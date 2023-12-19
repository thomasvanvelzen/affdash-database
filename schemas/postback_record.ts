import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const postbackRecords = sqliteTable("postback_records", {
  id: text("id").primaryKey(),
  offerId: text("offerId").notNull(),
  affiliateId: text("affiliateId").notNull(),
  clickId: text("clickId").notNull(),
  payout: integer("payout").notNull(),
  timestamp: integer("timestamp").notNull(),
});

