'use server';

import { revalidateTag } from 'next/cache';

export async function createTodoServerAction(data: FormData) {
  try {
    const title = data.get('title');
    const res = await fetch('http://localhost:4000/todos', {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      revalidateTag('todos');
      return res.json();
    }
    return new Response('Failed to create todo by client error', { status: 400 });
  } catch (error) {
    console.error('Error creating todo:', error);
    return new Response('Failed to create todo by server error', { status: 500 });
  }
}
