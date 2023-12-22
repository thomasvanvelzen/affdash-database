import { paymentMethods } from "../schemas";
import { paymentRequests } from "../schemas/payment-request";

export type PaymentMethod = typeof paymentMethods.$inferSelect;
