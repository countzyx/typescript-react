import React from 'react';
import TodoList from './components/TodoList';
import type { Todo } from './shared/types';

const App: React.FC = () => {
  const todos: Todo[] = [{ id: 't1', text: 'Finish the course' }];
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
