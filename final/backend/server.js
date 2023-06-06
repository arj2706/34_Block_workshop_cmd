// Import necessary dependencies
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

// Instantiate express application
const app = express();

// Instantiate Prisma client to interact with the database
const prisma = new PrismaClient();

// Add middleware to enable CORS
app.use(cors());

// Add middleware to parse JSON bodies
app.use(express.json());

// Define login endpoint
app.post('/login', async (req, res) => {
  // Destructure username and password from request body
  const { username, password } = req.body;

  // Find the user in the database using the username
  const user = await prisma.user.findUnique({ where: { username } });

  // If user does not exist, return a 404 status with an error message
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Compare the provided password with the stored user password
  const passwordMatch = await bcrypt.compare(password, user.password);

  // If passwords do not match, return a 401 status with an error message
  if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // If passwords match, sign a JWT with the user ID and a secret key
  const token = jwt.sign({ userId: user.id }, 'your-secret-key');

  // Return the token in the response
  res.json({ token });
});

// Define endpoint to get all students
app.get('/students', async (req, res) => {
  // Fetch all students from the database
  const students = await prisma.student.findMany();

  // Return the students in the response
  res.json(students);
});

// Define endpoint to get a student by ID
app.get('/students/:id', async (req, res) => {
  // Destructure ID from request parameters
  const { id } = req.params;

  // Find the student in the database using the ID
  const student = await prisma.student.findUnique({ where: { id: parseInt(id) } });

  // If student does not exist, return a 404 status with an error message
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  // Return the student in the response
  res.json(student);
});

// Define endpoint to create a new student
app.post('/students', async (req, res) => {
  // Destructure name, age and grade from request body
  const { name, age, grade } = req.body;

  // Create a new student in the database with the provided data
  const student = await prisma.student.create({ data: { name, age: parseInt(age), grade } });

  // Return the created student in the response
  res.json(student);
});

// Define endpoint to update a student
app.put('/students/:id', async (req, res) => {
  // Destructure ID from request parameters and name, age, grade from request body
  const { id } = req.params;
  const { name, age, grade } = req.body;

  // Update the student in the database using the provided data
  const updatedStudent = await prisma.student.update({
    where: { id: parseInt(id) },
    data: { name, age: parseInt(age), grade },
  });

  // Return the updated student in the response
  res.json(updatedStudent);
});

// Define endpoint to delete a student
app.delete('/students/:id', async (req, res) => {
  // Destructure ID from request parameters
  const { id } = req.params;

  // Delete the student in the database using the ID
  await prisma.student.delete({ where: { id: parseInt(id) } });

  // Return a success message in the response
  res.json({ message: 'Student deleted successfully' });
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
