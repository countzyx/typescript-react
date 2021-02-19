import * as React from 'react';

interface Props {
  onNewTodo: (todoText: string) => void;
}

const NewTodo: React.FC<Props> = (props: Props) => {
  const { onNewTodo } = props;

  const todoTextInputRef = React.useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoText = todoTextInputRef.current?.value;
    if (todoText) {
      onNewTodo(todoText);
    }
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
