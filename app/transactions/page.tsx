import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactioncolumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";

const TransactionsPage = async () => {
    // Acessar as transações do meu banco de dados
    const transactions = await db.transaction.findMany({})
    return (
    <div className="p-6 space-y-6">
        {/* TÍTULO E BOTÃO */}
        <div className="flex w-full justify-between items-center ">
            <h1 className="font-bold text-2xl">Transações</h1>
            <AddTransactionButton />
        </div>
        <div>
            <DataTable columns={transactioncolumns} data={transactions}/>
        </div>
    </div>
    );
};
 
export default TransactionsPage;

