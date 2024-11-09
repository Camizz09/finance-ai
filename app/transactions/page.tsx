import { CircleIcon } from "lucide-react";
import { db } from "../_lib/prisma";

const TransactionsPage = async () => {
    // Acessar as transações do meu banco de dados
    const transactions = await db.transaction.findMany({})
    return <div>
        {transactions.map(transaction => (
            <div key={transaction.id}>

            </div>
        ))}
    </div>;
};
 
export default TransactionsPage;

