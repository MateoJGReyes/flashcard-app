import sqlite3 from "better-sqlite3";
import path from "path";

const dbPath = path.resolve("./flashcards.db");
const db = sqlite3(dbPath, { verbose: console.log });

export default db;