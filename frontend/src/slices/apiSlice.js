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

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  // it like a prent to other api
  // it a build in builder
  endpoints: (builder) => ({}),
});

