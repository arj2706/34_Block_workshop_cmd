// Import the bcrypt module for password hashing
const bcrypt = require('bcrypt');

// Define a seed function which is used to initialize the database with some test or default data
const seed = async (prisma) => {
  // Create a hashed version of the string 'password' using bcrypt.hash
  // The number 10 represents the number of rounds that bcrypt will go through to hash the password
  const password = await bcrypt.hash('password', 10);

  // Use the Prisma client to create a new user in the database
  // Here, the username is set to 'admin' and the password is set to the previously hashed password
  await prisma.user.create({
    data: {
      username: 'admin',
      password,
    },
  });

  // This comment suggests that you could add more seed data here if needed

  // Once the seeding operation is complete, log a success message to the console
  console.log('Seeding completed successfully!');
};

// Export the seed function as a module
// This allows the function to be imported and run in other parts of your application
module.exports = {
  default: seed,
};
