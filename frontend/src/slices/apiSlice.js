import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://eyeseeu.onrender.com/api',
  credentials: 'include', // If your backend uses cookies (optional)
  prepareHeaders: (headers, { getState }) => {
    // Try getting token from localStorage
    const token = localStorage.getItem('token');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

// Create the API slice
export const apiSlice = createApi({
  reducerPath: 'api', // Optional: You can rename this if needed
  baseQuery,
  tagTypes: ['User', 'Exam'], // Add all tags you'll use for caching/invalidation
  endpoints: (builder) => ({}), // Add endpoints later here
});
