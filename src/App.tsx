import React from 'react';
import * as _ from 'lodash';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import type { Todo } from './shared/types';

interface State {
  todos: Todo[];
}

const initialState: State = {
  todos: [{ id: _.uniqueId(), text: 'Make more todos' }],
};

const App: React.FC = () => {
  const [todosState, setTodosState] = React.useState<State>(initialState);
  const newTodoHandler = React.useCallback(
    (todoText: string) => {
      const newTodo = { id: _.uniqueId(), text: todoText };
      setTodosState((prevState) => ({
        todos: [...prevState.todos, newTodo],
      }));
      console.log(todoText);
    },
    [setTodosState],
  );

  return (
    <div>
      <NewTodo onNewTodo={newTodoHandler} />
      <TodoList todos={todosState.todos} />
    </div>
  );
};

export default App;
