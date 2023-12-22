import { blob, sqliteTable, text, numeric } from "drizzle-orm/sqlite-core";
import { users } from "./user";

export const paymentMethods = sqliteTable("payment_methods", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  methodName: numeric("method_name").notNull(),
  type: text("type").notNull(),
  data: text("data", { mode: "json" }).notNull(),
});
