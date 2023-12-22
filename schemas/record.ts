import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const records = sqliteTable("records", {
  id: text("id").primaryKey(),
  offerId: text("offerId").notNull(),
  affiliateId: text("affiliateId").notNull(),
  clickId: text("clickId").notNull(),
  payout: integer("payout"),
  timestamp: integer("timestamp").notNull(),
  percentage: integer("percentage").notNull(),
  countryCode: text("countryCode"),
  ua: text("ua"),
  ip: text("ip"),
});
