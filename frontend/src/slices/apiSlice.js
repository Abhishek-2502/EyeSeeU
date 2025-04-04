import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://eyeseeu-1.onrender.com/api' || 'http://localhost:5000/api',
  credentials: 'include',
});


export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  // it like a prent to other api
  // it a build in builder
  endpoints: (builder) => ({}),
});
