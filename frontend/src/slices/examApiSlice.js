// import { apiSlice } from './apiSlice';

// // Define the base URL for the exams API
// const EXAMS_URL = '/api/users';

// // Inject endpoints for the exam slice
// export const examApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     // Get all exams
//     getExams: builder.query({
//       query: () => ({
//         url: `${EXAMS_URL}/exam`,
//         method: 'GET',
//       }),
//     }),
//     // Create a new exam
//     createExam: builder.mutation({
//       query: (data) => ({
//         url: `${EXAMS_URL}/exam`,
//         method: 'POST',
//         body: data,
//       }),
//     }),
//     // Get questions for a specific exam
//     getQuestions: builder.query({
//       query: (examId) => ({
//         url: `${EXAMS_URL}/exam/questions/${examId}`,
//         method: 'GET',
//       }),
//     }),
//     // Create a new question for an exam
//     createQuestion: builder.mutation({
//       query: (data) => ({
//         url: `${EXAMS_URL}/exam/questions`,
//         method: 'POST',
//         body: data,
//       }),

//     }),
//   }),
// });

// // Export the generated hooks for each endpoint
// export const {
//   useGetExamsQuery,
//   useCreateExamMutation,
//   useGetQuestionsQuery,
//   useCreateQuestionMutation,
// } = examApiSlice;

import { apiSlice } from './apiSlice';

// Define the base URL for the exams API
const EXAMS_URL = 'exams';
console.log("EXAMS_URL:", EXAMS_URL);


// Inject endpoints for the exam slice
export const examApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get all exams
    getExams: builder.query({
      query: () => ({
        url: `${EXAMS_URL}/exam`,
        method: 'GET',
      }),
    }),
    // Create a new exam
    createExam: builder.mutation({
      query: (data) => ({
        url: `${EXAMS_URL}/exam`,
        method: 'POST',
        body: data,
      }),
    }),
    // Get questions for a specific exam
    getQuestions: builder.query({
      query: (examId) => ({
        url: `${EXAMS_URL}/exam/questions/${examId}`,
        method: 'GET',
      }),
    }),
    fetchQuestionCount: builder.query({
      query: (examId) => ({
        url: `${EXAMS_URL}/exam/questions/count/${examId}`, // ✅ Matched with backend route
        method: 'GET',
      }),
    }),
    
    // Create a new question for an exam
    createQuestion: builder.mutation({
      query: (data) => ({
        url: `${EXAMS_URL}/exam/questions`,
        method: 'POST',
        body: data,
      }),
    }),
    // Update total questions in an exam
    
    updateTotalQuestions: builder.mutation({
      query: ({ examId, totalQuestions }) => {
        const url = `${EXAMS_URL}/exam/${examId}/updateTotalQuestions`;
        console.log("🔥 Making request to:", url);  // ✅ Check if the URL is correct
        console.log("📌 Payload:", { totalQuestions });  // ✅ Check what data is being sent
    
        return {
          url,
          method: "PUT",
          body: { totalQuestions },
        };
      },
    }),
    
  
    submitUserAnswers: builder.mutation({
      query: (userAnswers) => ({
        url: `${EXAMS_URL}/exam/submit-answers`,
        method: 'POST',
        body: userAnswers,
      }),
    }),
  }),
});

// Export the generated hooks for each endpoint
export const {
  useGetExamsQuery,
  useCreateExamMutation,
  useGetQuestionsQuery,
  useFetchQuestionCountQuery,
  useCreateQuestionMutation,
  useUpdateTotalQuestionsMutation,
  useSubmitUserAnswersMutation, // ✅ Exporting new mutation
} = examApiSlice;
