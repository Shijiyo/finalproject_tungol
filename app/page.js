import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-emerald-100 flex items-center justify-center px-4">
      <section className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-700">
            BillWise
          </h1>
          <p className="mt-2 text-gray-600">
            A simple, smart way to track bills and avoid late payments
          </p>
        </header>

        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <span className="text-emerald-600 font-bold">✓</span>
            <p className="text-gray-700">
              Track upcoming bills with due dates, amounts, and categories
            </p>
          </div>

          <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <span className="text-emerald-600 font-bold">✓</span>
            <p className="text-gray-700">
              Instantly see overdue and approaching payments using a
              color-coded system
            </p>
          </div>

          <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <span className="text-emerald-600 font-bold">✓</span>
            <p className="text-gray-700">
              View countdowns so you always know how many days are left
            </p>
          </div>

          <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <span className="text-emerald-600 font-bold">✓</span>
            <p className="text-gray-700">
              Data is stored locally for a fast, private, and secure experience
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/billwise"
            className="inline-block bg-emerald-600 text-white font-semibold
                       px-6 py-3 rounded-lg shadow
                       hover:bg-emerald-700 transition"
          >
            Open BillWise
          </Link>
        </div>

        <footer className="mt-6 text-center text-xs text-gray-500">
          Built with Next.js & Tailwind CSS
        </footer>
      </section>
    </main>
  );
}
