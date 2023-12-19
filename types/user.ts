import { users } from "../schemas";

export type User = typeof users.$inferSelect;
