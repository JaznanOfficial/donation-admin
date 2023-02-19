import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addTransactions,
    getTransactions,
    editTransactions,
    deleteTransactions,
} from "./transactionAPI";

// initial state
const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: "",
};

//  thunk
export const fetchTransactions = createAsyncThunk("transaction/fetchTransactions", async () => {
    const transactions = await getTransactions();
    return transactions;
});

export const createTransactions = createAsyncThunk("transaction/createTransactions", async (data) => {
    const transactions = await addTransactions(data);
    return transactions;
});

export const updateTransactions = createAsyncThunk(
    "transaction/editTransactions",
    async (id, data) => {
        const transactions = await editTransactions(id, data);
        return transactions;
    }
);

export const removeTransactions = createAsyncThunk("transaction/deleteTransactions", async (id) => {
    const transactions = await deleteTransactions(id);
    return transactions;
});

// create slice

const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.transactions = [];
                state.error = action.error.message;
            })
            .addCase(createTransactions.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(createTransactions.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.transactions.push(action.payload);
            })
            .addCase(createTransactions.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(updateTransactions.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(updateTransactions.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                const indexToUpdate = state.transactions.findIndex(
                    (t) => t.id === action.payload.id
                );
                state.transactions[indexToUpdate] = action.payload;
            })
            .addCase(updateTransactions.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(removeTransactions.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(removeTransactions.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.transactions = state.transactions.filter((t) => t.id !== action.payload);
            })
            .addCase(removeTransactions.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            });
    },
});

export default transactionSlice.reducer;

