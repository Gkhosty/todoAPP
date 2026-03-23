import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // 1. On reçoit l'id de la todo cliquée
  const body = await request.json();
  const todoId = body.id;

  // 2. On lit le fichier JSON
  const filePath = path.join(process.cwd(), 'app', 'todos.json');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(fileContent);

  // 3. On cherche la todo et on inverse son état
for (const list of data.lists) {
  for (const todo of list.todos) {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
  }
};

  


  // 4. On sauvegarde le fichier
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  // 5. On répond "c'est bon !"
  return NextResponse.json({ success: true });
}