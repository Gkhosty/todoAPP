import todosData from '../../todos.json';
import TodoList from '../../components/TodoList';

export default async function ListPage(props: any) {
await new Promise((resolve) => setTimeout(resolve, 2000));
  const param = await props.params;
  const id = param.id;
  const list = todosData.lists.find((list: any) => list.id === id);

  if (!list) {
    return <main><h1>Liste introuvable</h1></main>;
  }

  return (
    <main>
      <h1>{list.name}</h1>
      <TodoList todos={list.todos} />
    </main>
  );
}