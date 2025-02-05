import React, { useState } from "react";
import TransactionForm from "./TransactionForm";
import SummaryPanel from "./SummaryPanel";
import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";

const ExpenseTracker = () => {
    const defaultExpenseTacker = [
        {
            id: crypto.randomUUID,
            category: "Education",
            amount: 200,
            date: "20/01/2025",
            type: "income", // income,expense
        },
        {
            id: crypto.randomUUID,
            category: "Education",
            amount: 500,
            date: "20/01/2025",
            type: "expense", // income,expense
        },
    ];

    const [tracker, setTracker] = useState(defaultExpenseTacker);

    function handleAddTransaction(transaction) {
        console.log("New Transaction");
        console.log(transaction);
    }

    return (
        <main className="relative mx-auto mt-10 w-full max-w-7xl">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TransactionForm onTransaction={handleAddTransaction}/>

                <div className="lg:col-span-2">
                    <SummaryPanel summary={tracker}/>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                        <IncomeList />
                        <ExpenseList />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ExpenseTracker;
