// Import necessary dependencies
import { configureStore } from '@reduxjs/toolkit'; // configureStore function from Redux Toolkit
import { studentApi } from './api'; // studentApi from api file

// Define the Redux store
export const store = configureStore({
  // Configure the reducer
  reducer: {
    // Assign the generated reducer from the studentApi to the key equal to the api's reducerPath
    [studentApi.reducerPath]: studentApi.reducer,
  },
  // Configure middleware
  middleware: (getDefaultMiddleware) =>
    // Using getDefaultMiddleware to add the default middlewares,
    // and using concat to add additional middlewares provided by the api
    getDefaultMiddleware().concat(studentApi.middleware),
});
