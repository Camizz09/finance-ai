import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactioncolumns } from "./_columns";
import AddTransaction from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const TransactionsPage = async () => {
    const {userId} = await auth()
    if (!userId){
     redirect('/login')
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
    <div className="p-6 space-y-6">
        {/* TÍTULO E BOTÃO */}
        <div className="flex w-full justify-between items-center ">
            <h1 className="font-bold text-2xl">Transações</h1>
            <AddTransaction />
        </div>
        <div>
            <DataTable columns={transactioncolumns} data={transactions}/>
        </div>
    </div>
    </>
    );
};
 
export default TransactionsPage;

