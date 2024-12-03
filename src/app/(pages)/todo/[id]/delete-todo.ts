import { revalidateTag } from 'next/cache';

export async function deleteTodoServerAction(id: string) {
  try {
    const res = await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      revalidateTag('todos');
      return res;
    }
    return new Response('Failed to delete todo by client error', { status: 400 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to delete todo by server error', { status: 500 });
  }
}
