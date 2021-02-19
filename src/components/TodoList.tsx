import * as React from 'react';
import { Todo } from '../shared/types';

interface Props {
  todos: Todo[];
}

const TodoList: React.FC<Props> = (props: Props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} id={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
