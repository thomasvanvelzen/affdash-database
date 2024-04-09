import { paymentMethods } from "../schemas";

export type PaymentMethod = typeof paymentMethods.$inferSelect;
