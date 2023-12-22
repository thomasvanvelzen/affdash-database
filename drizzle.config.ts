import type { Config } from "drizzle-kit";

const dbCredentials = {
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN!,
};

export default {
  schema: "./schemas",
  driver: "turso",
  dbCredentials,
  verbose: true,
  strict: true,
  tablesFilter: ["!libsql_wasm_func_table"],
} satisfies Config;
