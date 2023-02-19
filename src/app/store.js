import { configureStore } from "@reduxjs/toolkit";
import transactions from "../features/transaction/transactionSlice"

export const store = configureStore({
    reducer: {
        transactions,
    },
});
