// Import necessary modules from their respective packages
import React, { useState } from 'react'; // React and the useState hook from 'react'
import { Provider } from 'react-redux'; // Provider component from 'react-redux'
import { store } from './store'; // Store from './store'
import StudentForm from './StudentForm'; // StudentForm component from './StudentForm'
import RegisterForm from './register'; // RegisterForm component from './register'
import './styles.css'; // Import global styles

// Main App component
function App() {
  // Initialize local state using the useState hook
  const [errorMessages, setErrorMessages] = useState({}); // For error messages
  const [isSubmitted, setIsSubmitted] = useState(false); // Flag for form submission
  const [isRegistering, setIsRegistering] = useState(false); // Flag for registration

  // A mock database of users
  const database = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
  ];

  // Error messages for different validation failures
  const errors = { uname: "invalid username", pass: "invalid password" };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form default behavior

    // Destructure username and password from form event
    var { uname, pass } = event.target.elements;

    // Look up the user in the database
    const userData = database.find((user) => user.username === uname.value);

    if (userData) { // If the user is found
      if (userData.password !== pass.value) { // If the password is incorrect
        setErrorMessages({ name: "pass", message: errors.pass }); // Set an error message
      } else { // If the password is correct
        setIsSubmitted(true); // Update the isSubmitted state
      }
    } else { // If the user is not found
      setErrorMessages({ name: "uname", message: errors.uname }); // Set an error message
    }
  };

  // Function to render the error message based on the input field name
  const renderErrorMessage = (name) =>
    name === errorMessages.name && <div className="error">{errorMessages.message}</div>;

  // JSX for the login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  // Navigating to Student Form
  const handleNavigateToStudentForm = () => {
    setIsSubmitted(true);
  };

  // Navigating to Register Form
  const handleNavigateToRegisterForm = () => {
    setIsRegistering(true);
  };

  // Based on certain conditions render different components
  if (isSubmitted) { // If the form is successfully submitted
    return (
      <Provider store={store}> // Wrap StudentForm component with Provider
        <StudentForm />
      </Provider>
    );
  }

  if (isRegistering) { // If the user is registering
    return <RegisterForm />;
  }

  // Render login form by default
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
}

// Export the App component as default export
export default App;
