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

# 🚀 Getting Started
After cloning the repository:

Server Setup

Navigate to the server directory and run npm install to install server dependencies.
Create a .env file in the server directory to store your environment variables, such as your JWT Secret and database credentials.
Run npx prisma migrate dev to run database migrations.
Run npx prisma db seed to seed the database with initial data.
Start the server by running npm start in front end and backend server by node server.js
Client Setup

Navigate to the client directory in a new terminal and run npm install to install client dependencies.
Start the client by running npm start
