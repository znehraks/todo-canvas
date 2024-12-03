'use server';

import { revalidateTag } from 'next/cache';

export async function updateTodoServerAction(data: FormData, id: string) {
  try {
    const title = data.get('title');
    const res = await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      revalidateTag('todos');
      return res.json();
    }
    return new Response('Failed to update todo by client error', { status: 400 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to update todo by server error', { status: 500 });
  }
}
