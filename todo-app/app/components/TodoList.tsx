'use client';

import { useState } from 'react';

export default function TodoList(props: any) {
  const [todoList, setTodoList] = useState(props.todos);

  async function toggleTodo(id: string) {
    // 1. On met à jour l'affichage
    const nouvelleListe = todoList.map((todo: any) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    setTodoList(nouvelleListe);

    // 2. On appelle la route API pour sauvegarder
    await fetch('/api/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id }),
    });
  }

  return (
    <ul>
      {todoList.map((todo: any) => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{
            cursor: 'pointer',
            textDecoration: todo.done ? 'line-through' : 'none',
            color: todo.done ? 'gray' : 'black',
          }}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}