import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { z } from "zod";

export const upsertTransactionSchema = z.object({
    name: z.string().trim().min(1),
    amount: z.number(),
    type: z.nativeEnum(TransactionType, {
        required_error: "O tipo é obrigatório.",
    }),
    category: z.nativeEnum(TransactionCategory,),
    paymentMethod: z.nativeEnum(TransactionPaymentMethod,),
    date: z.date(),
  })

