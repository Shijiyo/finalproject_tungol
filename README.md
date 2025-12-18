Project Title

BillWise: A Local Bill Tracking and Recurring Payment Manager

Description

BillWise is a web-based bill tracking application built with Next.js and Tailwind CSS. It allows users to manage financial obligations by tracking bills, due dates, and recurring payments in a simple and organized interface. The application is useful for helping users avoid missed payments, understand upcoming expenses, and maintain awareness of monthly financial commitments.

Key features include adding, editing, and deleting bills; automatic bill status classification (overdue, approaching, upcoming); support for recurring bills (monthly or every X days); marking bills as paid; and a monthly total summary. All data is stored locally using browser localStorage, keeping the application lightweight and easy to use without authentication or a backend database.

Installation Instructions

Clone the repository
git clone https://github.com/your-username/cprg306-assignments.git

Navigate into the project directory
cd cprg306-assignments

Install dependencies
npm install

Run the development server
npm run dev

Open your browser and navigate to
http://localhost:3000/billwise

Usage

Use the form at the top of the page to add a new bill by entering the bill name, amount, due date, and optional recurring settings.

Select a recurring option to automatically advance the bill’s due date when marked as paid.

Click the Edit button on a bill to modify its details.

Click the Paid button to mark a bill as paid or unpaid.

View the monthly total summary to see how much is due in the current month.

All data persists automatically after refreshing the page.

Contributing

This project is currently intended for educational purposes. Contributions are not actively being accepted at this time. If contributions are enabled in the future, guidelines will be provided in a CONTRIBUTING.md file.

Credits

This project was developed independently by Charles Joshua L. Tungol as part of coursework for CPRG 306 – Web Development 2. Design and functionality were inspired by common personal finance and budgeting applications.

License

This project is under the MIT License.