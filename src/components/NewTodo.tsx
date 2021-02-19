import * as React from 'react';
import type { Todo } from '../shared/types';

const NewTodo: React.FC = () => {
  const todoTextInputRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoText = todoTextInputRef.current?.value;
    console.log(todoText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={todoTextInputRef} />
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
