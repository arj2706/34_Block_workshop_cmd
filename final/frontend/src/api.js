// Import necessary dependencies
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // createApi and fetchBaseQuery functions from Redux Toolkit Query

// Define the API
export const studentApi = createApi({
  // Provide a unique key for the Redux store
  reducerPath: 'studentApi',
  // Define the base query
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  // Define the endpoints
  endpoints: (builder) => ({
    // Endpoint for getting all students
    getStudents: builder.query({
      query: () => 'students',
    }),
    // Endpoint for getting a student by id
    getStudentById: builder.query({
      query: (id) => `students/${id}`,
    }),
    // Endpoint for creating a student
    createStudent: builder.mutation({
      query: (newStudent) => ({
        url: 'students',
        method: 'POST',
        body: newStudent,
      }),
    }),
    // Endpoint for updating a student
    updateStudent: builder.mutation({
      query: ({ id, ...student }) => ({
        url: `students/${id}`,
        method: 'PUT',
        body: student,
      }),
    }),
    // Endpoint for deleting a student
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export hooks for each endpoint
export const {
  useGetStudentsQuery,
  useGetStudentByIdQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentApi.endpoints;
