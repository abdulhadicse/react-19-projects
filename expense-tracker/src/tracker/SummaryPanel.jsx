import React from "react";

const SummaryPanel = ({ summary }) => {
    let income = 0;
    let expense = 0;

    summary.map((item) => {
        if ("income" === item.type) {
            income += item.amount;
        } else if ("expense" === item.type) {
            expense += item.amount;
        }
    });

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
                    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
                        <dt className="text-base leading-7 text-gray-600">
                            Balance
                        </dt>
                        <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
                            BDT {income - expense}
                        </dd>
                    </div>
                    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
                        <dt className="text-base leading-7 text-gray-600">
                            Total Income
                        </dt>
                        <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
                            BDT {income}
                        </dd>
                    </div>
                    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
                        <dt className="text-base leading-7 text-gray-600">
                            Total Expense
                        </dt>
                        <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
                            BDT {expense}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};

export default SummaryPanel;
