// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Box, Grid, CircularProgress } from '@mui/material';
// import PageContainer from 'src/components/container/PageContainer';
// import BlankCard from 'src/components/shared/BlankCard';
// import MultipleChoiceQuestion from './Components/MultipleChoiceQuestion';
// import NumberOfQuestions from './Components/NumberOfQuestions';
// import WebCam from './Components/WebCam';
// import { useGetExamsQuery, useGetQuestionsQuery, useSubmitUserAnswersMutation } from '../../slices/examApiSlice';
// import { useSaveCheatingLogMutation } from 'src/slices/cheatingLogApiSlice';
// import { useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

// const TestPage = () => {
//   const { examId, testId } = useParams();

//   const [selectedExam, setSelectedExam] = useState([]);
//   const [examDurationInSeconds, setexamDurationInSeconds] = useState(0);
//   const { data: userExamdata } = useGetExamsQuery();
//    // Store selected answers
//   const [userAnswers, setUserAnswers] = useState({}); // Store selected answers



//   useEffect(() => {
//     if (userExamdata) {
//       const exam = userExamdata.filter((exam) => {
//         return exam.examId === examId;
//       });
//       setSelectedExam(exam);
//       setexamDurationInSeconds(exam[0].duration * 60);
//       console.log("Extracted Exam Duration (in seconds):", exam[0].duration * 60);
//     }
//   }, [userExamdata]);

//   const [questions, setQuestions] = useState([]);
//   const { data, isLoading } = useGetQuestionsQuery(examId);
//   const [score, setScore] = useState(0);
//   const navigate = useNavigate();

//   const [saveCheatingLogMutation] = useSaveCheatingLogMutation();
//   const [submitUserAnswers] = useSubmitUserAnswersMutation();
//   const { userInfo } = useSelector((state) => state.auth);
//   const [cheatingLog, setCheatingLog] = useState({
//     noFaceCount: 0,
//     multipleFaceCount: 0,
//     cellPhoneCount: 0,
//     ProhibitedObjectCount: 0,
//     examId: examId,
//     username: '',
//     email: '',
//   });

//   useEffect(() => {
//     if (data) {
//       setQuestions(data);
//     }
//   }, [data]);

//   // const handleTestSubmission = async () => {
//   //   try {
//   //     setCheatingLog((prevLog) => ({
//   //       ...prevLog,
//   //       username: userInfo.name,
//   //       email: userInfo.email,
//   //     }));

//   //     await saveCheatingLog(cheatingLog);

//   //     await saveCheatingLogMutation(cheatingLog).unwrap();

//   //     toast.success('User Logs Saved!!');

//   //     navigate(`/Success`);
//   //   } catch (error) {
//   //     console.log('cheatlog: ', error);
//   //   }
//   // };
//   const handleTestSubmission = async () => {
//     try {
//       console.log("User Answers: ", userAnswers); 
//       const updatedLog = {
//         ...cheatingLog,
//         username: userInfo.name,
//         email: userInfo.email,
//       };
//       setCheatingLog(updatedLog);

//       await saveCheatingLogMutation(updatedLog).unwrap();
//       toast.success("Cheating log saved!");

//       // Send selected answers to backend
//       await submitUserAnswers(userAnswers);

//       toast.success("Test submitted successfully!");
//       navigate(`/Success`);
//     } catch (error) {
//       console.error("Error submitting test:", error);
//       toast.error("Failed to submit the test. Please try again.");
//     }
//   };

//   const saveUserTestScore = () => {
//     setScore(score + 1);
//   };

//   const saveCheatingLog = async (cheatingLog) => {
//     console.log(cheatingLog);
//   };
//   return (
//     <PageContainer title="TestPage" description="This is TestPage">
//       <Box pt="3rem">
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={7} lg={7}>
//             <BlankCard>
//               <Box
//                 width="100%"
//                 minHeight="400px"
//                 boxShadow={3}
//                 display="flex"
//                 flexDirection="column"
//                 alignItems="center"
//                 justifyContent="center"
//               >
//                 {isLoading ? (
//                   <CircularProgress />
//                 ) : (
//                   // <MultipleChoiceQuestion questions={data} saveUserTestScore={saveUserTestScore} />
//                   <MultipleChoiceQuestion 
//                     questions={data || []} 
//                     saveUserTestScore={saveUserTestScore} 
//                     userAnswers={userAnswers} 
//                     setUserAnswers={setUserAnswers} 
//                             />

//                 )}
//               </Box>
//             </BlankCard>
//           </Grid>
//           <Grid item xs={12} md={5} lg={5}>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <BlankCard>
//                   <Box
//                     maxHeight="300px"
//                     sx={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'start',
//                       justifyContent: 'center',
//                       overflowY: 'auto',
//                       height: '100%',
//                     }}
//                   >
//                     <NumberOfQuestions
//                       questionLength={questions.length}
//                       submitTest={handleTestSubmission}
//                       examDurationInSeconds={examDurationInSeconds}
//                     />
//                   </Box>
//                 </BlankCard>
//               </Grid>
//               <Grid item xs={12}>
//                 <BlankCard>
//                   <Box
//                     width="300px"
//                     maxHeight="180px"
//                     boxShadow={3}
//                     display="flex"
//                     flexDirection="column"
//                     alignItems="start"
//                     justifyContent="center"
//                   >
//                     <WebCam cheatingLog={cheatingLog} updateCheatingLog={setCheatingLog} />
//                   </Box>
//                 </BlankCard>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Box>
//     </PageContainer>
//   );
// };

// export default TestPage;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, CircularProgress, Paper } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import BlankCard from "src/components/shared/BlankCard";
import MultipleChoiceQuestion from "./Components/MultipleChoiceQuestion";
import NumberOfQuestions from "./Components/NumberOfQuestions";
import WebCam from "./Components/WebCam";
import { useGetExamsQuery, useGetQuestionsQuery, useSubmitUserAnswersMutation } from "../../slices/examApiSlice";
import { useSaveCheatingLogMutation } from "src/slices/cheatingLogApiSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const TestPage = () => {
  const { examId, testId } = useParams();
  const [selectedExam, setSelectedExam] = useState([]);
  const [examDurationInSeconds, setexamDurationInSeconds] = useState(0);
  const { data: userExamdata } = useGetExamsQuery();
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    if (userExamdata) {
      const exam = userExamdata.filter((exam) => exam.examId === examId);
      setSelectedExam(exam);
      setexamDurationInSeconds(exam[0].duration * 60);
    }
  }, [userExamdata]);

  const [questions, setQuestions] = useState([]);
  const { data, isLoading } = useGetQuestionsQuery(examId);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const [saveCheatingLogMutation] = useSaveCheatingLogMutation();
  const [submitUserAnswers] = useSubmitUserAnswersMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const [cheatingLog, setCheatingLog] = useState({
    noFaceCount: 0,
    multipleFaceCount: 0,
    cellPhoneCount: 0,
    ProhibitedObjectCount: 0,
    examId: examId,
    username: "",
    email: "",
  });

  useEffect(() => {
    if (data) {
      setQuestions(data);
    }
  }, [data]);

  const handleTestSubmission = async () => {
    try {
      console.log("User Answers: ", userAnswers);
      const updatedLog = { ...cheatingLog, username: userInfo.name, email: userInfo.email };
      setCheatingLog(updatedLog);

      await saveCheatingLogMutation(updatedLog).unwrap();
      toast.success("Cheating log saved!");

      await submitUserAnswers(userAnswers);

      toast.success("Test submitted successfully!");
      navigate(`/Success`);
    } catch (error) {
      console.error("Error submitting test:", error);
      toast.error("Failed to submit the test. Please try again.");
    }
  };

  const saveUserTestScore = () => {
    setScore(score + 1);
  };

  return (
    <PageContainer title="TestPage" description="This is TestPage">
      <Box pt="3rem">
        <Grid container spacing={3}>

          {/* Right Section (Main Questions) */}
          <Grid item xs={12} md={8} lg={8} sx={{ borderLeft: "2px solid #ccc", paddingLeft: 3 }}>
            {isLoading ? (
              <CircularProgress />
            ) : questions.length > 0 ? (
              <MultipleChoiceQuestion
                questions={questions}
                saveUserTestScore={saveUserTestScore}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
              />
            ) : (
              <p>No questions available</p>
            )}
          </Grid>

          {/* Left Sidebar (Questions List + Camera) */}
          <Grid item xs={12} md={4} lg={4}>
            <Grid container spacing={3} direction="column">
              <Grid item xs={12}>
                <Paper elevation={4} sx={{ padding: 2, borderRadius: 3 }}>
                  <NumberOfQuestions
                    questionLength={questions.length}
                    submitTest={handleTestSubmission}
                    examDurationInSeconds={examDurationInSeconds}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={4} sx={{ padding: 2, borderRadius: 3 }}>
                  <WebCam cheatingLog={cheatingLog} updateCheatingLog={setCheatingLog} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default TestPage;
