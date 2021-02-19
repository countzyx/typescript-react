import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import type { Todo } from './shared/types';

const App: React.FC = () => {
  const todos: Todo[] = [{ id: 't1', text: 'Finish the course' }];
  return (
    <div>
      <NewTodo />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
