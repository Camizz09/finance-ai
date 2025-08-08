import { db } from "@/app/_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactioncolumns } from "./_columns";
import AddTransaction from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ScrollArea } from "../_components/ui/scroll-area";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  // Acessar as transações do meu banco de dados
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });
  return (
    <>
      <Navbar />
      <div className="space-y-6 overflow-hidden p-6">
        {/* TÍTULO E BOTÃO */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransaction />
        </div>
        <div>
          <ScrollArea>
            <DataTable columns={transactioncolumns} data={transactions} />
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default TransactionsPage;
