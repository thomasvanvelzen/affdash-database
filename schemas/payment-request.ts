import { sqliteTable, text, numeric } from "drizzle-orm/sqlite-core";
import { users } from "./user";
import { paymentMethods } from "./payment-method";

export const paymentRequests = sqliteTable("payment_request", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  methodId: text("method_id")
    .notNull()
    .references(() => paymentMethods.id),
  amount: numeric("amount").notNull(),
  type: text("type").notNull(),
  status: text("status").notNull(),
});
