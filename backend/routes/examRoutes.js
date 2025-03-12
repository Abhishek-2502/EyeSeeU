// import express from "express";

// import { protect } from "../middleware/authMiddleware.js";
// import { createExam, getExams } from "../controllers/examController.js";
// import {
//   createQuestion,
//   getQuestionsByExamId,
// } from "../controllers/quesController.js";
// import {
//   getCheatingLogsByExamId,
//   saveCheatingLog,
// } from "../controllers/cheatingLogController.js";
// const examRoutes = express.Router();

// // protecting Exam route using auth middleware protect /api/users/
// examRoutes.route("/exam").get(protect, getExams).post(protect, createExam);
// examRoutes.route("/exam/:id").get(protect, getExamById);
// examRoutes.route("/exam/questions").post(protect, createQuestion);

// examRoutes.route("/exam/questions/:examId").get(protect, getQuestionsByExamId);
// examRoutes.route("/cheatingLogs/:examId").get(protect, getCheatingLogsByExamId);
// examRoutes.route("/cheatingLogs/").post(protect, saveCheatingLog);

// export default examRoutes;
import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { createExam, getExams, getExamById, updateTotalQuestions } from "../controllers/examController.js"; // ✅ Added getExamById
import {
  createQuestion,
  getQuestionsByExamId,
  getQuestionCountByExamId
} from "../controllers/quesController.js";
import {
  getCheatingLogsByExamId,
  saveCheatingLog,


} from "../controllers/cheatingLogController.js";

const examRoutes = express.Router();

// Protecting Exam routes using auth middleware
examRoutes.route("/exam").get(protect, getExams).post(protect, createExam);
examRoutes.route("/exam/:id").get(protect, getExamById); // ✅ Now properly imported
// examRoutes.route("/:examId/updateTotalQuestions").put(protect, updateTotalQuestions);
examRoutes.route("/exam/:examId/updateTotalQuestions").put(protect, updateTotalQuestions);


examRoutes.route("/exam/questions").post(protect, createQuestion);
examRoutes.route("/exam/questions/:examId").get(protect, getQuestionsByExamId);
examRoutes.route("/exam/questions/count/:examId").get(protect, getQuestionCountByExamId); // ✅ Added route


examRoutes.route("/cheatingLogs/:examId").get(protect, getCheatingLogsByExamId);
examRoutes.route("/cheatingLogs").post(protect, saveCheatingLog); 

export default examRoutes;
