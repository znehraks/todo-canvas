import { notFound } from 'next/navigation';
import EditForm from './_components/EditForm';

export default async function TodoPage({ params }: { params: { id: string } }) {
  console.log(params.id);
  const todo = await fetch(`http://localhost:4000/todos/${params.id}`);
  if (!todo.ok) {
    notFound();
  }
  const todoData = await todo.json();
  return <EditForm todoData={todoData} />;
}
