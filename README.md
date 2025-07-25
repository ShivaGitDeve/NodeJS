# Node.js Backend API 🔧

This is a modular and secure backend API built with **Node.js**, **Express**, and **MongoDB**, following best practices like authentication, protected routes, and file uploads. This project is a complete backend foundation for full-stack applications.

## 🚀 Features

- ✅ User Registration & Login (with hashed passwords using `bcrypt`)
- 🛡️ JWT-based Authentication Middleware
- 🔐 Protected Routes (accessible only after login)
- 📤 File Upload with `Multer` (image only, up to 2MB)
- 🧱 MongoDB Integration via `Mongoose`
- ⚠️ Centralized Error Handling Middleware
- 📁 Organized Routes & Modular Code Structure

## 🗃️ Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for authentication
- Multer for file uploads
- bcrypt for password hashing

## 📂 Project Structure

NODE_Backend/
│
├── models/ # Mongoose schemas
├── routes/ # All route files (userRoutes, uploadRoutes)
├── middleware/ # Authentication and error middleware
├── uploads/ # Uploaded image files (auto-created)
├── app.js # Main server file
├── package.json # NPM dependencies
└── README.md # Project documentation


## 🧪 API Endpoints

### ✅ Register User
`POST /users/register`
```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}

2. Login
POST /users/login
Returns: JWT Token

3. Protected Route
GET /users/profile
Header: Authorization: Bearer <token>

4. File Upload
POST /upload/
Use form-data with key image.

⚙️ Installation & Usage
# 1. Clone the repository
git clone https://github.com/ShivaGitDeve/NodeJS.git

# 2. Go to project directory
cd NodeJS

# 3. Install dependencies
npm install

# 4. Run the server
node app.js

📦 Environment Variables
For simplicity, secrets are hardcoded. You should store secrets like JWT keys in environment variables in production using .env files.

📌 Important Notes
Make sure the uploads/ folder exists or gets created before upload

Don't push node_modules/ to GitHub — use .gitignore to exclude it

You can install all dependencies using:
npm install

👨‍💻 Author
Built with ❤️ by Shiva Rajput

