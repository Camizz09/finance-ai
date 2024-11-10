"use client"

import { Transaction } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import TransactionTypeBadge from "../_components/type-badge"
import { Button } from "@/app/_components/ui/button";
import { TrashIcon } from "lucide-react";

 export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};



export const transactioncolumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({row: {original: transaction}}) => (<TransactionTypeBadge transaction={transaction} />
    ),
    },
  {
    accessorKey:'category',
    header:"Categoria",
    cell: ({ row: { original: transaction} }) =>
      TRANSACTION_CATEGORY_LABELS[transaction.category],
  },
  {
    accessorKey: 'paymentMethod',
    header:"Método de Pagamento",
    cell: ({ row: { original: transaction} }) =>
      TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod],
  },
  {
    accessorKey:'date',
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleString("pt-br", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: 'amount',
    header: "Valor",
    cell: ({ row: { original: transaction} }) =>
      new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency:"BRL",
      }).format(Number(transaction.amount)),
  },
  {
    accessorKey:'actions',
    header: "ações",
    cell: () => {
      return (
        <div>
        <Button variant="ghost">
          <TrashIcon />
        </Button>
      </div>
      )
    }
  },
]
