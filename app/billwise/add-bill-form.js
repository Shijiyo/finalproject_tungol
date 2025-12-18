"use client";

import { useEffect, useState } from "react";

export default function AddBillForm({ onAddBill, onUpdateBill, editingBill }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [due, setDue] = useState("");
  const [recurring, setRecurring] = useState("none");
  const [intervalDays, setIntervalDays] = useState("");

  useEffect(() => {
    if (editingBill) {
      setName(editingBill.name);
      setAmount(editingBill.amount);
      setDue(editingBill.due);
      setRecurring(editingBill.recurring);
      setIntervalDays(editingBill.intervalDays || "");
    }
  }, [editingBill]);

  function resetForm() {
    setName("");
    setAmount("");
    setDue("");
    setRecurring("none");
    setIntervalDays("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !amount || !due) return;

    const billData = {
      id: editingBill?.id ?? crypto.randomUUID(),
      name,
      amount: Number(amount),
      due,
      paid: editingBill?.paid ?? false,
      recurring,
      intervalDays: recurring === "interval" ? Number(intervalDays) : null,
    };

    if (editingBill) {
      onUpdateBill(billData);
    } else {
      onAddBill(billData);
    }

    resetForm();
  }

  const inputClasses =
    "w-full p-3 bg-white border-2 border-emerald-400 rounded-lg " +
    "text-gray-900 placeholder-gray-500 " +
    "focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-700";

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-6 bg-white border-2 border-emerald-300 rounded-xl shadow-md"
    >
      <h2 className="text-xl font-bold text-emerald-800 mb-5">
        {editingBill ? "Edit Bill" : "Add New Bill"}
      </h2>

      <div className="space-y-4">
        <input type="text" placeholder="Bill name" value={name}
          onChange={(e) => setName(e.target.value)} className={inputClasses} />

        <input type="number" placeholder="Amount" min="0" value={amount}
          onChange={(e) => setAmount(e.target.value)} className={inputClasses} />

        <input type="date" value={due}
          onChange={(e) => setDue(e.target.value)}
          className={`${inputClasses} appearance-none`} />

        <select value={recurring}
          onChange={(e) => setRecurring(e.target.value)}
          className={inputClasses}>
          <option value="none">Not recurring</option>
          <option value="monthly">Monthly (same day)</option>
          <option value="interval">Every X days</option>
        </select>

        {recurring === "interval" && (
          <input type="number" placeholder="Interval (days)" min="1"
            value={intervalDays}
            onChange={(e) => setIntervalDays(e.target.value)}
            className={inputClasses} />
        )}

        <button
          type="submit"
          className="w-full bg-emerald-700 text-white font-bold text-lg py-3 rounded-lg
                     shadow-md hover:bg-emerald-800 transition"
        >
          {editingBill ? "Update Bill" : "Add Bill"}
        </button>
      </div>
    </form>
  );
}
