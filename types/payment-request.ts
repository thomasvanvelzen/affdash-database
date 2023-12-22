import { paymentRequests } from "../schemas/payment-request";

export type PaymentRequest = typeof paymentRequests.$inferSelect;
