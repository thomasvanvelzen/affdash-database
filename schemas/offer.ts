import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const offers = sqliteTable("offers", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  link: text("link").notNull(),
  percentage: integer("percentage").notNull().default(60),
});
