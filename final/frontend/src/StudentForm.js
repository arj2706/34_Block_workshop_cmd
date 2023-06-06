// Import necessary dependencies
import React, { useState } from 'react'; // React and useState hook from React
import './style1.css'; // Importing CSS for styling
// Importing custom hooks from the api file which are used for CRUD operations
import { useCreateStudentMutation, useGetStudentByIdQuery, useUpdateStudentMutation, useDeleteStudentMutation, useGetStudentsQuery } from './api';

// Define the StudentForm functional component
function StudentForm() {
  // Define state variables for storing student data and form errors
  const [studentData, setStudentData] = useState({ id: '', name: '', age: '', grade: '' });
  const [formErrors, setFormErrors] = useState({});

  // Define custom hooks for fetching, creating, updating, and deleting students
  const { data: students, isLoading: studentsLoading } = useGetStudentsQuery();
  const [createStudent, { isLoading: createLoading }] = useCreateStudentMutation();
  const [updateStudent] = useUpdateStudentMutation();
  const [deleteStudent] = useDeleteStudentMutation();

  // Function to handle changes to the form inputs
  const handleInputChange = (event) => {
    // Updating the state of the studentData with the new input values
    setStudentData({ ...studentData, [event.target.name]: event.target.value });
  };

  // Function for form validation
  const validateForm = () => {
    // Object to hold error messages
    let errors = {};

    // Checks if the name contains only alphabets
    if (!studentData.name.match(/^[A-Za-z]+$/)) {
      errors.name = 'Name should only contain alphabets';
    }

    // Checks if the grade contains only alphabets
    if (!studentData.grade.match(/^[A-Za-z]+$/)) {
      errors.grade = 'Grade should only contain alphabets';
    }

    // Checks if the age contains only numbers
    if (!studentData.age.match(/^[0-9]+$/)) {
      errors.age = 'Age should only contain numbers';
    }

    // Set form errors if any
    setFormErrors(errors);

    // Return true if no errors
    return Object.keys(errors).length === 0;
  };

  // Function to add a new student
  const addStudent = async () => {
    if (validateForm()) {
      // Creating a student with studentData
      await createStudent(studentData);
      // Reset the form
      setStudentData({ id: '', name: '', age: '', grade: '' });
    }
  };

  // Function to handle student update
  const handleUpdate = async () => {
    if (validateForm()) {
      // Updating a student with studentData
      await updateStudent(studentData);
      // Reset the form
      setStudentData({ id: '', name: '', age: '', grade: '' });
    }
  }

  // Function to handle student deletion
  const handleDelete = async (id) => {
    // Deleting a student by id
    await deleteStudent(id);
  }

  // Loading state
  if (studentsLoading || createLoading) return 'Loading...';

  // Return the JSX to render
  return (
    // Container for the form and student list
    <div className="container">
      <h1 className="title">Student Hub</h1>
      <div className="form-container">
        <h2 className="subtitle">Add Student</h2>
        {/* Student form */}
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          {/* Name input */}
          <input type="text" name="name" value={studentData.name} onChange={handleInputChange} placeholder="Name" />
          {/* Age input */}
          <input type="text" name="age" value={studentData.age} onChange={handleInputChange} placeholder="Age" />
          {/* Grade input */}
          <input type="text" name="grade" value={studentData.grade} onChange={handleInputChange} placeholder="Grade" />
          {/* Button to submit the form */}
          <button type="button" onClick={addStudent} className="button">Add Student</button>
          {/* Button to update the student */}
          <button type="button" onClick={handleUpdate} className="button">Update Student</button>
        </form>
        {/* Show form errors */}
        {formErrors.name && <div className="error">{formErrors.name}</div>}
        {formErrors.age && <div className="error">{formErrors.age}</div>}
        {formErrors.grade && <div className="error">{formErrors.grade}</div>}
      </div>
      {/* Student list */}
      <div className="student-list-container">
        <h2 className="subtitle">Student List</h2>
        <table className="student-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through each student and creating a row */}
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
                <td>
                  {/* Edit and delete buttons */}
                  <button onClick={() => setStudentData(student)}>Edit</button>
                  <button onClick={() => handleDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Export the component
export default StudentForm;
