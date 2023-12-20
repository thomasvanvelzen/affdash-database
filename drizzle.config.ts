import type { Config } from "drizzle-kit";

const dbCredentials = {
  //url: config.env.DATABASE_URL,
  url: process.env.DATABASE_URL,
  //url: "libsql://aff-thomasvanvelzen.turso.io",

  //authToken: config.env.DATABASE_AUTH_TOKEN!,
  authToken: process.env.DATABASE_AUTH_TOKEN!,
  // authToken:
  //   "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTExLTI5VDE1OjI0OjIyLjM2NTQ3MzY2MloiLCJpZCI6IjUwODA5NTE5LThlY2ItMTFlZS05ZTFmLThhMDdkYjllZjBiOSJ9.PUKc54lLwH9UKBkrKgxSvmy0alHHpfT_Pir5iAW3b0dhu-P6tJt6F2Dxg3mK-4QiOvPqKZHScOgVV2KTO_tVAQ",
};

export default {
  schema: "./schemas",
  driver: "turso",
  dbCredentials,
  verbose: true,
  strict: true,
  tablesFilter: ["!libsql_wasm_func_table"],
} satisfies Config;
