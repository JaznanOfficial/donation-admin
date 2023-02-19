import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransactions } from "../features/transaction/transactionSlice";

export default function Form() {
    const dispatch = useDispatch();
    const {isLoading, isError, error} = useSelector((state) => state.transactions);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(
            createTransactions({
                name,
                type,
                amount: Number(amount),
            })
        );
    };

    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={handleCreate}>
                <div className="form-group">
                    <label for="transaction_name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="enter title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group radio">
                    <label for="transaction_type">Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="type"
                            checked={type === "income"}
                            onChange={(e) => setType("income")}
                            required
                        />
                        <label for="transaction_type">Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked={type === "expense"}
                            onChange={(e) => setType("expense")}
                        />
                        <label for="transaction_type">Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label for="transaction_amount">Amount</label>
                    <input
                        type="number"
                        placeholder="enter amount"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>

                <button className="btn" disabled={isLoading} >Add Transaction</button>

                {!isLoading && isError && <p className="error">{ error }</p>}
            </form>
            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    );
}
