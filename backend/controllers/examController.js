import asyncHandler from "express-async-handler";
import Exam from "./../models/examModel.js";

// @desc Get all exams
// @route GET /api/exams
// @access Public
const getExams = asyncHandler(async (req, res) => {
  const exams = await Exam.find();
  res.status(200).json(exams);
});

const getExamById = asyncHandler(async (req, res) => {
  const exam = await Exam.findById(req.params.id);

  if (exam) {
    res.status(200).json(exam);
  } else {
    res.status(404);
    throw new Error("Exam not found");
  }
});
// @desc Create a new exam
// @route POST /api/exams
// @access Private (admin)
const createExam = asyncHandler(async (req, res) => {
  const { examName, totalQuestions, duration, liveDate, deadDate } = req.body;

  const exam = new Exam({
    examName,
    totalQuestions,
    duration,
    liveDate,
    deadDate,
  });


  const createdExam = await exam.save();

  if (createdExam) {
    res.status(201).json(createdExam);
  } else {
    res.status(400);
    throw new Error("Invalid Exam Data");
  }
});
const updateTotalQuestions = asyncHandler(async (req, res) => {
  console.log("🔹 Received PUT request at :examId/updateTotalQuestions");
  console.log("🔹 Request Params:", req.params);
  console.log("🔹 Request Body:", req.body);
  const { examId } = req.params;
  const { totalQuestions } = req.body;

  if (!examId || totalQuestions === undefined) {
    return res.status(400).json({ error: "examId or totalQuestions is missing or invalid" });
  }

  const exam = await Exam.findOne({ examId: req.params.examId });


  if (!exam) {
    res.status(404);
    throw new Error("Exam not found");
  }

  exam.totalQuestions = totalQuestions;

  const updatedExam = await exam.save();
  res.status(200).json(updatedExam);
});

export { getExams, createExam, getExamById, updateTotalQuestions };

