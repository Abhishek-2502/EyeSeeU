// import React, { useEffect, useState } from 'react';
// import Grid from '@mui/material/Grid';
// import Avatar from '@mui/material/Avatar';
// import questions from './questionData';
// import BlankCard from 'src/components/shared/BlankCard';
// import { Box, Button, Stack, Typography } from '@mui/material';
// import Countdown from 'react-countdown';
// const NumberOfQuestions = ({ questionLength, submitTest, examDurationInSeconds }) => {
//   const totalQuestions = questionLength; //questions.length;
//   // Generate an array of question numbers from 1 to totalQuestions
//   const questionNumbers = Array.from({ length: totalQuestions }, (_, index) => index + 1);
//   const handleQuestionButtonClick = (questionNumber) => {
//     // Set the current question to the selected question number
//     // setCurrentQuestion(questionNumber);
//   };

//   // Create an array of rows, each containing up to 4 question numbers
//   const rows = [];
//   for (let i = 0; i < questionNumbers.length; i += 5) {
//     rows.push(questionNumbers.slice(i, i + 5));
//   }

//   // Timer related states
//   const [timer, setTimer] = useState(400); // Initialize timer with examDurationInSeconds
//   // Countdown timer
//   useEffect(() => {
//     setTimer(400);
//     const countdown = setInterval(() => {
//       setTimer((prevTimer) => prevTimer - 1);
//     }, 1000);

//     // Check if the timer has reached 0
//     if (timer <= 0) {
//       clearInterval(countdown); // Stop the timer
//       submitTest(); // Automatically submit the test
//     }

//     return () => {
//       clearInterval(countdown); // Cleanup the timer when the component unmounts
//     };
//   }, []); // Empty dependency array to run this effect only once when the component mounts

//   return (
//     <>
//       <Box
//         position="sticky"
//         top="0"
//         zIndex={1}
//         bgcolor="white" // Set background color as needed
//         paddingY="10px" // Add padding to top and bottom as needed
//         width="100%"
//         px={3}
//         // mb={5}
//       >
//         <Stack direction="row" alignItems="center" justifyContent="space-between">
//           <Typography variant="h6">Questions: 1/10</Typography>
//           <Typography variant="h6">
//             Time Left: {Math.floor(timer / 60)}:{timer % 60}
//           </Typography>
//           <Button variant="contained" onClick={submitTest} color="error">
//             Finish Test
//           </Button>
//         </Stack>
//       </Box>

//       <Box p={3} mt={5} maxHeight="270px">
//         <Grid container spacing={1}>
//           {rows.map((row, rowIndex) => (
//             <Grid key={rowIndex} item xs={12}>
//               <Stack direction="row" alignItems="center" justifyContent="start">
//                 {row.map((questionNumber) => (
//                   <Avatar
//                     key={questionNumber}
//                     variant="rounded"
//                     style={{
//                       width: '40px',
//                       height: '40px',
//                       fontSize: '20px',
//                       cursor: 'pointer',
//                       margin: '3px',
//                       background: '#ccc',
//                     }}
//                     onClick={() => handleQuestionButtonClick(questionNumber)}
//                   >
//                     {questionNumber}
//                   </Avatar>
//                 ))}
//               </Stack>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default NumberOfQuestions;

import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Box, Button, Stack, Typography } from '@mui/material';

const NumberOfQuestions = ({ questionLength, submitTest, examDurationInSeconds }) => {
  const totalQuestions = questionLength;
  const questionNumbers = Array.from({ length: totalQuestions }, (_, index) => index + 1);

  const handleQuestionButtonClick = (questionNumber) => {
    // Handle question selection logic
  };

  // Create rows of questions (5 per row)
  const rows = [];
  for (let i = 0; i < questionNumbers.length; i += 5) {
    rows.push(questionNumbers.slice(i, i + 5));
  }

  // Timer state
  const [timer, setTimer] = useState(examDurationInSeconds || 600); // Default 10 mins if not provided

  useEffect(() => {
    if (!examDurationInSeconds) return; // Prevent running effect if duration is missing

    setTimer(examDurationInSeconds); // Set initial time

    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
          submitTest(); // Auto-submit when timer reaches 0
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(countdown); // Cleanup on unmount
  }, [examDurationInSeconds, submitTest]); // Dependencies to avoid unnecessary re-renders

  // Format time as mm:ss
  const formattedTime = `${Math.floor(timer / 60).toString().padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`;

  return (
    <>
      <Box position="sticky" top="0" zIndex={1} bgcolor="white" paddingY="10px" width="100%" px={3}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Questions: 1/{totalQuestions}</Typography>
          <Typography variant="h6">Time Left: {formattedTime}</Typography>
          <Button variant="contained" onClick={submitTest} color="primary">
            Finish Test
          </Button>
        </Stack>
      </Box>

      <Box p={3} mt={5} maxHeight="270px">
        <Grid container spacing={1}>
          {rows.map((row, rowIndex) => (
            <Grid key={rowIndex} item xs={12}>
              <Stack direction="row" alignItems="center" justifyContent="start">
                {row.map((questionNumber) => (
                  <Avatar
                    key={questionNumber}
                    variant="rounded"
                    sx={{
                      width: 40,
                      height: 40,
                      fontSize: 20,
                      cursor: 'pointer',
                      margin: '3px',
                      background: '#ccc',
                    }}
                    onClick={() => handleQuestionButtonClick(questionNumber)}
                  >
                    {questionNumber}
                  </Avatar>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default NumberOfQuestions;
