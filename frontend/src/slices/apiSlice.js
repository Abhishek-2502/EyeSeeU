import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  // baseUrl: 'http://50.19.10.187:5000/api',
  baseUrl: 'https://eyeseeu.onrender.com/api',
  credentials: 'include', // if you're using cookies with authentication
});


export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  // it like a prent to other api
  // it a build in builder
  endpoints: (builder) => ({}),
});