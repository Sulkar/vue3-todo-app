// db.js
import Dexie from "dexie";

export const db = new Dexie("myTodoDatabase");
db.version(1).stores({
  // Primary key and indexed props
  todos: "++id, text, done",
});
