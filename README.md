# Finance Tracker

## Overview
Finance Tracker is a web application built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Clerk authentication** to help users manage their expenses, track income, and analyze financial data efficiently.

## Features
- **User Authentication**: Secure sign-up, login, and session management using **Clerk**.
- **Expense & Income Tracking**: Add, edit, and delete financial transactions.
- **Category Management**: Organize expenses into categories for better insights.
- **Secure Storage**: Data stored securely in MongoDB with authentication.
- **Responsive UI**: Mobile-friendly and modern UI with React.

## Tech Stack
- **Frontend**: React (JSX), Clerk for authentication
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: Clerk
- **Styling**: Tailwind CSS (or any preferred UI framework)

## Installation

### Prerequisites
Ensure you have **Node.js**, **MongoDB**, and **yarn/npm** installed on your system.

### Clone the Repository
```sh
git clone https://github.com/HrushikeshMiddela/finance-tracker.git
cd finance-tracker
```

### Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd frontend
npm install
```

### Environment Variables
Create a `.env` file in the backend folder and add the following:
```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
CLERK_API_KEY=your_clerk_api_key
```

### Running the Application
#### Start the Backend Server
```sh
cd backend
npm start
```

#### Start the Frontend
```sh
cd frontend
npm start
```

## API Endpoints
### Authentication (Handled by Clerk)
### Transactions
- `POST /api/transactions` - Add a new transaction
- `GET /api/transactions` - Get all transactions
- `PUT /api/transactions/:id` - Update a transaction
- `DELETE /api/transactions/:id` - Delete a transaction

## Deployment
- **Frontend**: Deploy on Vercel/Netlify
- **Backend**: Deploy on Render/Heroku
- **Database**: Use MongoDB Atlas for cloud storage

## Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit changes: `git commit -m "Add new feature"`
4. Push changes: `git push origin feature-branch`
5. Open a Pull Request

## License
This project is licensed under the **MIT License**.

## Contact
For any questions, reach out to **middelahrushikeshsai@gmail.com** or visit the repository's **Issues** section.


