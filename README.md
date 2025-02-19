# 🚀 Node.js REST API with Express & PostgreSQL

## 📌 Project Overview

This project is a **RESTful API** built with **Node.js, Express, and Sequelize ORM** to manage users. It performs **CRUD operations** and connects to a **PostgreSQL database** .

---

## 📂 Project Structure

```
oyelabs-assignment/
│── config/
│   ├── database.js        # Database configuration
│── models/
│   ├── index.js           # Sequelize initialization
│   ├── user.model.js      # User model definition
│── routes/
│   ├── user.routes.js     # User-related API routes
│── controllers/
│   ├── user.controller.js # User CRUD logic
│── middlewares/
│   ├── validation.js      # Input validation middleware
│   ├── errorHandler.js    # Global error handling
│── tests/
│   ├── user.test.js       # Jest test cases for API
│── server.js                  # Express app entry point
│── swagger.yaml               # API documentation (Swagger)
│── .env                        # Environment variables
│── package.json                # Dependencies and scripts
│── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add:

```
DB_NAME=your_database
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
PORT=5000
```

### 3️⃣ Start the Server

```sh
npm run start
```

OR with **nodemon** (for auto-restart on changes):

```sh
npm run dev
```

---

## 📌 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/users`     | Fetch all users   |
| GET    | `/api/users/:id` | Fetch user by ID  |
| POST   | `/api/users`     | Create new user   |
| PUT    | `/api/users/:id` | Update user by ID |
| DELETE | `/api/users/:id` | Delete user       |

### **📄 Example Request (POST /api/users)**

```json
{
  "name": "Aman Singh",
  "email": "aman@example.com"
}
```

### **📄 Example Response**

```json
{
  "id": 1,
  "name": "Aman Singh",
  "email": "aman@example.com",
  "createdAt": "2024-02-19T10:00:00.000Z",
  "updatedAt": "2024-02-19T10:00:00.000Z"
}
```

---

## ✅ Running Tests (Jest & Supertest)

```sh
npm test
```

---

## 📜 API Documentation (Swagger)

After running the server, open:

```
http://localhost:5000/api-docs
```

---

## 🛠 Technologies Used

- **Node.js** (Express.js)
- **PostgreSQL** (Sequelize ORM)
- **Jest & Supertest** (Testing)
- **Swagger** (API Documentation)

---

## ⚡ Author

**Aman Singh**

Feel free to reach out! 😊
