import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const offers = sqliteTable("offers", {
  id: text("id").primaryKey(),
  affiliateId: text("affiliateId").notNull(),
  name: text("name").notNull(),
  link: text("link").notNull(),
});
