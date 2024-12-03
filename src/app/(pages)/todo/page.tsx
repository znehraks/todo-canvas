import { ITodo } from '@/lib/types/todo';
import Link from 'next/link';

export default async function TodosPage() {
  const todosByRouteHandler = await fetch('http://localhost:3002/api/todos', {
    next: {
      tags: ['todos'],
    },
    cache: 'force-cache',
  });
  const todosByRouteHandlerData = (await todosByRouteHandler.json()) as ITodo[];
  console.log('todosByRouteHandlerData', todosByRouteHandlerData);

  const todosByServerAction = await fetch('http://localhost:4000/todos', {
    next: {
      tags: ['todos'],
    },
    cache: 'force-cache',
  });
  const todosByServerActionData = (await todosByServerAction.json()) as ITodo[];
  console.log('todosByServerActionData', todosByServerActionData);

  return (
    <div>
      {todosByRouteHandlerData.map((todo) => (
        <div key={todo.id}>
          <Link href={`/todo/${todo.id}`}>{todo.title}</Link>
        </div>
      ))}
      <Link href="/todos/create" className="border-gray-200 rounded-md p-2">
        Create Todo
      </Link>
    </div>
  );
}
