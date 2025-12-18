export default function BillCard({
  bill,
  status,
  onTogglePaid,
  onDelete,
  onEdit,
}) {
  const statusStyles = {
    overdue: "bg-red-100 border-red-300",
    approaching: "bg-yellow-100 border-yellow-300",
    upcoming: "bg-emerald-50 border-emerald-200",
  };

  return (
    <li className={`p-4 rounded-lg border flex justify-between items-center
      ${bill.paid ? "bg-gray-100 border-gray-300 opacity-80" : statusStyles[status]}`}>
      
      <div>
        <p className="font-semibold text-gray-800">
          {bill.paid ? "✓ " : ""}{bill.name}
        </p>
        <p className="text-sm text-gray-600">Due: {bill.due}</p>

        {bill.recurring !== "none" && (
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-200 px-2 py-0.5 rounded">
            {bill.recurring === "monthly"
              ? "Monthly"
              : `Every ${bill.intervalDays} days`}
          </span>
        )}
      </div>

      <div className="text-right space-y-1">
        <p className="font-bold">${bill.amount}</p>
        <p className="text-xs capitalize">{bill.paid ? "Paid" : status}</p>

        <div className="flex gap-2 justify-end mt-2">
          <button onClick={() => onEdit(bill)}
            className="text-xs px-2 py-1 bg-blue-600 text-white rounded">
            Edit
          </button>

          <button onClick={() => onTogglePaid(bill.id)}
            className="text-xs px-2 py-1 bg-emerald-600 text-white rounded">
            {bill.paid ? "Unmark" : "Paid"}
          </button>

          <button onClick={() => onDelete(bill.id)}
            className="text-xs px-2 py-1 bg-red-600 text-white rounded">
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}
