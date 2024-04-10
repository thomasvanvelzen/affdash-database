import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { offers } from "./offer";
import { users } from "./user";

export const smartLinks = sqliteTable("smartLinks", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull().references(() => users.id),
  name: text("name").notNull(),
  offerId: text("offerId")
    .notNull()
    .references(() => offers.id),
});
