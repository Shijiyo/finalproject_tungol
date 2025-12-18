"use client";

import { useEffect, useState } from "react";
import AddBillForm from "./add-bill-form";
import BillCard from "./bill-card";

function getBillStatus(dueDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);

  const diff = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
  if (diff < 0) return "overdue";
  if (diff <= 7) return "approaching";
  return "upcoming";
}

function getMonthKey(date) {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth()}`;
}

export default function BillList() {
  const [bills, setBills] = useState([]);
  const [editingBill, setEditingBill] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("billwise-bills");
    if (stored) setBills(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("billwise-bills", JSON.stringify(bills));
  }, [bills]);

  function addBill(bill) {
    setBills((prev) => [...prev, bill]);
  }

  function updateBill(updatedBill) {
    setBills((prev) =>
      prev.map((bill) =>
        bill.id === updatedBill.id ? updatedBill : bill
      )
    );
    setEditingBill(null);
  }

  function deleteBill(id) {
    setBills((prev) => prev.filter((bill) => bill.id !== id));
  }

  function togglePaid(id) {
    setBills((prev) =>
      prev.map((bill) => {
        if (bill.id !== id) return bill;

        if (bill.recurring !== "none" && !bill.paid) {
          const nextDue = new Date(bill.due);

          if (bill.recurring === "monthly") {
            nextDue.setMonth(nextDue.getMonth() + 1);
          } else if (bill.recurring === "interval" && bill.intervalDays) {
            nextDue.setDate(nextDue.getDate() + bill.intervalDays);
          }

          return {
            ...bill,
            paid: false,
            due: nextDue.toISOString().split("T")[0],
          };
        }

        return { ...bill, paid: !bill.paid };
      })
    );
  }

  // Monthly total (current month)
  const currentMonthKey = getMonthKey(new Date());
  const monthlyTotal = bills
    .filter((bill) => getMonthKey(bill.due) === currentMonthKey)
    .reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <>
      <AddBillForm
        onAddBill={addBill}
        onUpdateBill={updateBill}
        editingBill={editingBill}
      />

      {/* Monthly Summary */}
      <div className="mb-4 p-4 bg-emerald-100 border border-emerald-300 rounded-lg">
        <p className="text-sm text-gray-700">Total bills this month</p>
        <p className="text-2xl font-bold text-emerald-800">
          ${monthlyTotal.toFixed(2)}
        </p>
      </div>

      {bills.length === 0 ? (
        <div className="p-6 text-center bg-emerald-50 border-2 border-dashed border-emerald-300 rounded-lg">
          <p className="font-semibold text-emerald-700">
            No bills added yet
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Add a bill above to start tracking payments.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {bills
            .slice()
            .sort((a, b) => new Date(a.due) - new Date(b.due))
            .map((bill) => (
              <BillCard
                key={bill.id}
                bill={bill}
                status={getBillStatus(bill.due)}
                onTogglePaid={togglePaid}
                onDelete={deleteBill}
                onEdit={setEditingBill}
              />
            ))}
        </ul>
      )}
    </>
  );
}
