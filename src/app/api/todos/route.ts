// import { cookies } from 'next/headers';
import { revalidateTag } from 'next/cache';
import { NextRequest } from 'next/server';

// Nextjs 15 부터 캐시가 디폴트가 아님
export async function GET() {
  try {
    const res = await fetch('http://localhost:4000/todos', {
      next: {
        tags: ['todos'],
      },
      cache: 'force-cache',
    });
    if (res.ok) {
      return res;
    }
    return new Response('Failed to fetch todos by client error', { status: 400 });
  } catch (error) {
    console.error('Error fetching todos:', error);
    return new Response('Failed to fetch todos by server error', { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  // const accessToken = (await cookies()).get('accessToken')?.value;
  try {
    const body = await request.json();
    const res = await fetch('http://localhost:4000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      revalidateTag('todos');
      return res;
    }
    return new Response('Failed to create todo by client error', { status: 400 });
  } catch (error) {
    console.error('Error creating todo:', error);
    return new Response('Failed to create todo by server error', { status: 500 });
  }
}
