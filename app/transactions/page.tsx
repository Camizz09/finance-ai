import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactioncolumns } from "./_columns";

const TransactionsPage = async () => {
    // Acessar as transações do meu banco de dados
    const transactions = await db.transaction.findMany({})
    return (
    <div className="p-6 space-y-6">
        {/* TÍTULO E BOTÃO */}
        <div className="flex w-full justify-between items-center ">
            <h1 className="font-bold text-2xl">Transações</h1>
            <Button className="rounded-full">
                Adicionar Transação
                <ArrowDownUpIcon />
                </Button>
        </div>
        <div>
            <DataTable columns={transactioncolumns} data={transactions}/>
        </div>
    </div>
    );
};
 
export default TransactionsPage;

