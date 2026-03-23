import todosData from './todos.json';
import TodoList from './components/TodoList';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Ma Todo App</h1>
      {todosData.lists.map((list: any) => (
        <div key={list.id}>
          <Link href ={`/lists/${list.id}`}>
          <h2>{list.name}</h2>
          </Link>
          
          <TodoList todos={list.todos} />
        </div>
      ))}
    </main>
  );
}