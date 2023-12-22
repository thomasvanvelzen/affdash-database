import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const trackRecords = sqliteTable("track_records", {
  id: text("id").primaryKey(),
  offerId: text("offerId").notNull(),
  affiliateId: text("affiliateId").notNull(),
  clickId: text("clickId").notNull(),
  timestamp: integer("timestamp").notNull(),
  percentage: integer("percentage").notNull(),
  ua: text("ua"),
  ip: text("ip"),
  countryCode: text("countryCode"),
});
