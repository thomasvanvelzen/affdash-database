import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { offers } from "./offer";

export const smartLinks = sqliteTable("smartLinks", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  offerId: text("offerId")
    .notNull()
    .references(() => offers.id),
});
