import { v4 } from "https://deno.land/std@0.151.0/uuid/mod.ts";
// interface
import Todo from '../interfaces/Todo.ts';

const todos: Todo[] = [
  {
    id: v4.generate(),
    todo: 'walk dog',
    isCompleted: true,
  },
  {
    id: v4.generate(),
    todo: 'eat food',
    isCompleted: false,
  },
];

export default todos;