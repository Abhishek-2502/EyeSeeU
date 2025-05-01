import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://eyeseeu.onrender.com/api',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    // Get the token from Redux state or localStorage
    const token = localStorage.getItem('token'); // Or use getState() if you store it in Redux

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
