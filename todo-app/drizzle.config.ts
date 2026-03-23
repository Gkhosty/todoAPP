import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",  // ou "mysql" ou "sqlite"
  schema: "./src/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});