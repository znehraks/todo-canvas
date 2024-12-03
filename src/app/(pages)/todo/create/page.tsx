'use client';

import { createTodoServerAction } from './create-todo';

export default function CreateTodoPage() {
  const createTodoRouteHandler = async (formData: FormData) => {
    const title = formData.get('title');
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ title }),
    });
  };
  return (
    <>
      <form action={createTodoServerAction}>
        Create Todo Page (Server Action)
        <input type="text" name="title" placeholder="Enter a title" className="text-black" />
      </form>
      <form action={createTodoRouteHandler}>
        Create Todo Page (Route Handler)
        <input type="text" name="title" placeholder="Enter a title" className="text-black" />
        <button type="submit">Create</button>
      </form>
    </>
  );
}
