import * as React from 'react';
import styles from './NewTodo.module.css';

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
    <form onSubmit={submitHandler} className={styles.newTodoForm}>
      <div className={styles.newTodoFormControl}>
        <label htmlFor='todo-text' className={styles.todoTextLabel}>
          Todo Text
        </label>
        <input type='text' id='todo-text' className={styles.todoTextInput} ref={todoTextInputRef} />
      </div>
      <button type='submit' className={styles.addTodoButton}>
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
