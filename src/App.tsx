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
  const createTodoHandler = React.useCallback(
    (todoText: string) => {
      const newTodo = { id: _.uniqueId(), text: todoText };
      setTodosState((prevState) => ({
        todos: [...prevState.todos, newTodo],
      }));
      console.log(todoText);
    },
    [setTodosState],
  );

  const deleteTodoHandler = React.useCallback(
    (todoId: string) => {
      setTodosState((prevState) => {
        const { todos } = prevState;
        return { todos: todos.filter((todo) => todo.id !== todoId) };
      });
      console.log(todoId);
    },
    [setTodosState],
  );

  return (
    <div>
      <NewTodo onNewTodo={createTodoHandler} />
      <TodoList onDeleteTodo={deleteTodoHandler} todos={todosState.todos} />
    </div>
  );
};

export default App;
