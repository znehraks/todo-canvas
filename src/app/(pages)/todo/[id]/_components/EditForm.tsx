'use client';

import { ITodo } from '@/lib/types/todo';
import { updateTodoServerAction } from '../update-todo';
import { deleteTodoServerAction } from '../delete-todo';

export default function EditForm({ todoData }: { todoData: ITodo }) {
  return (
    <>
      <form action={(data) => updateTodoServerAction(data, todoData.id)}>
        <input type="text" name="title" defaultValue={todoData.title} className="text-black" />
        <button type="submit">Update</button>
      </form>
      <button onClick={() => deleteTodoServerAction(todoData.id)}>삭제</button>
    </>
  );
}
