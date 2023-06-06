# 🎓 Student Hub 🎓

Student Hub is an application for administrators to manage student data effectively. It includes user authentication, CRUD operations for student data, Prisma integration, and a React-based frontend.

## 📂 Project Structure

Here's the main structure of the project:

```bash
/student-hub
|-- /client
|   |-- /src
|   |   |-- /components
|   |   |-- /pages
|   |   |-- /api
|   |   |-- App.js
|   |   |-- index.js
|-- /server
|   |-- /src
|   |   |-- /models
|   |   |-- /routes
|   |   |-- /controllers
|   |   |-- /middlewares
|   |-- .env
|   |-- server.js

# 💻 Dependencies
Client-Side
React.js
Redux Toolkit
Redux Toolkit Query
React-Router

To install these dependencies, navigate to the client directory and run:
```bash
npm install react react-dom @reduxjs/toolkit @reduxjs/toolkit-query/react react-router-dom

# Server-Side
Express.js
Prisma
jsonwebtoken
bcrypt
dotenv

```bash
npm install express prisma jsonwebtoken bcrypt dotenv cors

## 🚀 Getting Started

After cloning the repository, follow these steps to set up the server:

1. **Server Setup**
   - Navigate to the `server` directory: `cd server`.
   - Install server dependencies: `npm install`.
   - Create a `.env` file in the `server` directory to store your environment variables, such as your JWT Secret and database credentials.
   - Run database migrations: `npx prisma migrate dev`.
   - Seed the database with initial data: `npx prisma db seed`.
   - Start the Front end: `npm start` and backend by node server.js.

2. **Client Setup**
   - Navigate to the `client` directory in a new terminal: `cd client`.
   - Install client dependencies: `npm install`.
   - Start the client: `npm start`.

The application should now be running locally. Enjoy exploring Student Hub!

Feel free to adjust the formatting or add additional details as needed for your specific project.

