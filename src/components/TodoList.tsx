import * as React from 'react';
import { Todo } from '../shared/types';
import styles from './TodoList.module.css';

interface Props {
  onDeleteTodo: (todoId: string) => void;
  todos: Todo[];
}

const TodoList: React.FC<Props> = (props: Props) => {
  const { onDeleteTodo, todos } = props;
  console.log(todos, typeof todos);

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <li key={todo.id} id={todo.id} className={styles.todo}>
          <span>{todo.text}</span>
          <button onClick={() => onDeleteTodo(todo.id)} className={styles.deleteButton}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
