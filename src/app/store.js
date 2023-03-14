// Import the necessary functions from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

// Configure the Redux store
const store = configureStore({
  // Add the apiSlice reducer to the store
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Add the apiSlice middleware to the default middlewares for the store
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

// Export the configured store
export default store;
