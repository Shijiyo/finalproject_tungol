// app/billwise/page.js
import BillList from "./bill-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-emerald-100 flex justify-center px-4 py-10">
      <section className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-emerald-700 mb-2">
          BillWise
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Track your bills, recurring payments, and monthly expenses in one place.
        </p>

        <BillList />
      </section>
    </main>
  );
}
