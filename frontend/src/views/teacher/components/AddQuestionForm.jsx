// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Button,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Stack,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import swal from 'sweetalert';
// import { useCreateQuestionMutation, useGetExamsQuery, useUpdateTotalQuestionsMutation } from 'src/slices/examApiSlice';
// import { toast } from 'react-toastify';

// const AddQuestionForm = () => {
//   const [questions, setQuestions] = useState([]);
//   const [newQuestion, setNewQuestion] = useState('');
//   const [newOptions, setNewOptions] = useState(['', '', '', '']);
//   const [correctOptions, setCorrectOptions] = useState([false, false, false, false]);
//   const [selectedExamId, setSelectedExamId] = useState(0);
//   const [totalQuestions, setTotalQuestions] = useState(0); //
//   const [selectedExam, setSelectedExam] = useState(null);
//   const [updateTotalQuestions] = useUpdateTotalQuestionsMutation();


//   const handleOptionChange = (index) => {
//     const updatedCorrectOptions = [...correctOptions];
//     updatedCorrectOptions[index] = !correctOptions[index];
//     setCorrectOptions(updatedCorrectOptions);
//   };

//   const [createQuestion, { isLoading }] = useCreateQuestionMutation();
//   const { data: examsData } = useGetExamsQuery();

//   // useEffect(() => {
//   //   if (examsData && examsData.length > 0) {
//   //     // setSelectedExamId(examsData[0].examId);
      
//   //     // console.log(examsData[0].examId, 'examsData[0].examId');
//   //     const firstExam = examsData[0];
//   //     setSelectedExam(firstExam);
//   //     setSelectedExamId(firstExam.examId);
//   //   }
//   // }, [examsData]);
//   useEffect(() => {
//     if (examsData && selectedExamId) {
//       const updatedExam = examsData.find(exam => exam.examId === selectedExamId);
//       if (updatedExam) {
//         setSelectedExam(updatedExam);
//         setTotalQuestions(updatedExam.totalQuestions);
//       }
//     }
//   }, [examsData, selectedExamId]);

//   const handleAddQuestion = async () => {
    
//     if (!selectedExam) {
//       swal('', 'Please select an exam.', 'error');
//       return;
//     }
//     console.log("in the starting")
//     console.log(selectedExam.totalQuestions)
//     if (questions.length >= selectedExam.totalQuestions) {
//       swal({
//         title: 'Question Limit Reached!',
//         text: `You have reached the limit of ${selectedExam.totalQuestions} questions. Do you want to increase the limit?`,
//         icon: 'warning',
//         buttons: {
//           increase: "Increase Limit",
//           submit: "Submit Questions",
//         },
//       }).then(async(value) => {

//         if (value==='increase') {
//           const newLimit = selectedExam.totalQuestions + 1;

//           await updateTotalQuestions({
//             examId: selectedExam.examId,
//             totalQuestions: newLimit,
//           });
//           // Update totalQuestions in backend
//           // setTotalQuestions(newLimit);
//           // setTotalQuestions((prev) => prev + 1);
//           // updateTotalQuestions({ examId: selectedExam.examId, totalQuestions: selectedExam.totalQuestions + 1 });
//           // setSelectedExam({ ...selectedExam, totalQuestions: newLimit });
//           setSelectedExam({ ...selectedExam, totalQuestions: newLimit });
//           setTotalQuestions(newLimit); // Update totalQuestions here
//           console.log("after increase");
//           console.log(selectedExam.totalQuestions)
//         }
//         else {
//           setQuestions([...questions, newQuestion]);
//           setNewQuestion("");
//         }
        
//       });
//       return;
//     }
  

//     if (newQuestion.trim() === '' || newOptions.some((option) => option.trim() === '')) {
//       swal('', 'Please fill out the question and all options.', 'error');
//       return;
//     }

//   //   const newQuestionObj = {
//   //     question: newQuestion,
//   //     options: newOptions.map((option, index) => ({
//   //       optionText: option,
//   //       isCorrect: correctOptions[index],
//   //     })),
//   //     examId: selectedExamId,
//   //   };

//   //   try {
//   //     const res = await createQuestion(newQuestionObj).unwrap();
//   //     if (res) {
//   //       toast.success('Question added successfully!!!');
//   //     }
//   //     setQuestions([...questions, res]);
//   //     setNewQuestion('');
//   //     setNewOptions(['', '', '', '']);
//   //     setCorrectOptions([false, false, false, false]);
//   //   } catch (err) {
//   //     swal('', 'Failed to create question. Please try again.', 'error');
//   //   }
//   // };

//   const newQuestionObj = {
//     question: newQuestion,
//     options: newOptions.map((option, index) => ({
//       optionText: option,
//       isCorrect: correctOptions[index],
//     })),
//     examId: selectedExamId,
//   };

//   try {
//     const res = await createQuestion(newQuestionObj).unwrap();
//     if (res) {
//       toast.success('Question added successfully!!!');
      
//       // await updateTotalQuestions({
//       //   examId: selectedExam.examId,
//       //   totalQuestions: selectedExam.totalQuestions + 1,
//       // });

//       // Fetch the updated exam data
//       setSelectedExam({ ...selectedExam, totalQuestions: selectedExam.totalQuestions + 1 });
//       console.log(totalQuestions)
//       console.log(selectedExam.totalQuestions)
//     }
//     setQuestions([...questions, res]);
//     setNewQuestion('');
//     setNewOptions(['', '', '', '']);
//     setCorrectOptions([false, false, false, false]);
//   } catch (err) {
//     swal('', 'Failed to create question. Please try again.', 'error');
//   }
// };

//   const handleSubmitQuestions = () => {
//     setQuestions([]);
//     setNewQuestion('');
//     setNewOptions(['', '', '', '']);
//     setCorrectOptions([false, false, false, false]);
//   };

//   return (
//     <div>
//       <Select
//         label="Select Exam"
//         value={selectedExamId}
//         onChange={(e) => {
//           console.log(e.target.value, 'option ID');
//           // setSelectedExamId(e.target.value);
//           const selected = examsData.find((exam) => exam.examId === e.target.value);
//           setSelectedExamId(e.target.value);
//           setSelectedExam(selected);

//         }}
//         fullWidth
//         sx={{ mb: 2 }}
//       >
//         {examsData &&
//           examsData.map((exam) => (
//             <MenuItem key={exam.examId} value={exam.examId}>
//               {exam.examName}
//             </MenuItem>
//           ))}
//       </Select>

//       {questions.map((questionObj, questionIndex) => (
//         <div key={questionIndex}>
//           <TextField
//             label={`Question ${questionIndex + 1}`}
//             value={questionObj.question}
//             fullWidth
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           {questionObj.options.map((option, optionIndex) => (
//             <div key={optionIndex}>
//               <TextField
//                 label={`Option ${optionIndex + 1}`}
//                 value={option.optionText}
//                 fullWidth
//                 InputProps={{
//                   readOnly: true,
//                 }}
//               />
//               <FormControlLabel
//                 control={<Checkbox checked={option.isCorrect} disabled />}
//                 label={`Correct Option ${optionIndex + 1}`}
//               />
//             </div>
//           ))}
//         </div>
//       ))}

//       <TextField
//         label="New Question"
//         value={newQuestion}
//         onChange={(e) => setNewQuestion(e.target.value)}
//         fullWidth
//         rows={4}
//         sx={{ mb: 1 }}
//       />

//       {newOptions.map((option, index) => (
//         <Stack
//           key={index}
//           direction="row"
//           justifyContent="space-between"
//           alignItems="center"
//           spacing={1}
//           mb={1}
//         >
//           <TextField
//             label={`Option ${index + 1}`}
//             value={newOptions[index]}
//             onChange={(e) => {
//               const updatedOptions = [...newOptions];
//               updatedOptions[index] = e.target.value;
//               setNewOptions(updatedOptions);
//             }}
//             fullWidth
//             sx={{ flex: '80%' }}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={correctOptions[index]}
//                 onChange={() => handleOptionChange(index)}
//               />
//             }
//             label={`Correct Option ${index + 1}`}
//           />
//         </Stack>
//       ))}

//       <Stack mt={2} direction="row" spacing={2}>
//         <Button variant="outlined" onClick={handleAddQuestion}>
//           Add Question
//         </Button>
//         <Button variant="outlined" onClick={handleSubmitQuestions}>
//           Submit Questions
//         </Button>
//       </Stack>
//       {/* <p>
//         Questions Added: {questions.length}/{totalQuestions}
//       </p> */}
//     </div>
//   );
// };

// export default AddQuestionForm;
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Stack,
  Select,
  MenuItem,
} from '@mui/material';
import swal from 'sweetalert';
import { useCreateQuestionMutation, useGetExamsQuery, useUpdateTotalQuestionsMutation ,useFetchQuestionCountQuery,} from 'src/slices/examApiSlice';
import { toast } from 'react-toastify';

const AddQuestionForm = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newOptions, setNewOptions] = useState(['', '', '', '']);
  const [correctOptions, setCorrectOptions] = useState([false, false, false, false]);
  const [selectedExamId, setSelectedExamId] = useState('');
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [selectedExam, setSelectedExam] = useState(null);
  const [updateTotalQuestions] = useUpdateTotalQuestionsMutation();

  const handleOptionChange = (index) => {
    const updatedCorrectOptions = [...correctOptions];
    updatedCorrectOptions[index] = !correctOptions[index];
    setCorrectOptions(updatedCorrectOptions);
  };

  const [createQuestion] = useCreateQuestionMutation();
  const { data: examsData } = useGetExamsQuery();
  


  // useEffect(() => {
  //   if (examsData && selectedExamId) {
  //     const updatedExam = examsData.find(exam => exam.examId === selectedExamId);
  //     if (updatedExam) {
  //       setSelectedExam(updatedExam);
  //       setTotalQuestions(updatedExam.totalQuestions);
  //     }
  //   }
  // }, [examsData, selectedExamId]);


  const { data: questionCountData, refetch: refetchQuestionCount } = useFetchQuestionCountQuery(selectedExamId, { skip: !selectedExamId });

useEffect(() => {
  if (questionCountData) {
    setQuestions(new Array(questionCountData.count).fill(null)); // Sync fetched count
    console.log(`Fetched question count: ${questionCountData.count}`);
  }
}, [questionCountData]);
  useEffect(() => {
    if (examsData && selectedExamId) {
      const updatedExam = examsData.find(exam => exam.examId === selectedExamId);
      if (updatedExam) {
        setSelectedExam(updatedExam);
        setTotalQuestions(updatedExam.totalQuestions);
      }
    }
  }, [examsData, selectedExamId]);
  const handleAddQuestion = async () => {
    const currentQuestionCount = questionCountData?.count || 0; 
  
    if (!selectedExam) {
      swal('', 'Please select an exam.', 'error');
      return;
    }

    if (currentQuestionCount  >= totalQuestions) {
      swal({
        title: 'Question Limit Reached!',
        text: `You have reached the limit of ${totalQuestions} questions. Do you want to increase the limit?`,
        icon: 'warning',
        buttons: {
          increase: 'Increase Limit',
          submit: 'Submit Questions',
        },
      }).then(async (value) => {
        if (value === 'increase') {

          const newLimit = totalQuestions + 1;
            const requestUrl = `/api/users/exam/${selectedExamId}/updateTotalQuestions`;

            console.log(`🔍 Full Request URL: ${requestUrl}`);
             console.log(`📤 Sending update request: examId=${selectedExamId}, TotalQuestions=${newLimit}`);
          
          try {
            const response = await updateTotalQuestions({ examId: selectedExamId, totalQuestions: newLimit }).unwrap();
            console.log('Update response:', response);
            
            setTotalQuestions(newLimit);
            setSelectedExam({ ...selectedExam, totalQuestions: newLimit });
             // ✅ Refetch question count to update UI
          refetchQuestionCount();
          } catch (error) {
            console.error('Failed to update total questions:', error);
            swal('', 'Failed to update question limit.', 'error');
          }
        }
      });
      return;
    }

    if (newQuestion.trim() === '' || newOptions.some(option => option.trim() === '')) {
      swal('', 'Please fill out the question and all options.', 'error');
      return;
    }

    const newQuestionObj = {
      question: newQuestion,
      options: newOptions.map((option, index) => ({
        optionText: option,
        isCorrect: correctOptions[index],
      })),
      examId: selectedExamId,
    };

    try {
      const res = await createQuestion(newQuestionObj).unwrap();
      if (res) {
        console.log(" this is when new question is added questions length")
        console.log(questions.length)
        console.log("totalQuestions")
        console.log(totalQuestions);
        toast.success('Question added successfully!');
        setQuestions([...questions, res]);
        setNewQuestion('');
        setNewOptions(['', '', '', '']);
        setCorrectOptions([false, false, false, false]);
         // ✅ Update UI count immediately

      // ✅ Force refetch for verification
      refetchQuestionCount();
      }
    } catch (err) {
      swal('', 'Failed to create question. Please try again.', 'error');
    } 
  };

  return (
    <div>
      <Select
        label="Select Exam"
        value={selectedExamId}
        onChange={(e) => {
          const selected = examsData.find(exam => exam.examId === e.target.value);
          setSelectedExamId(e.target.value);
          setSelectedExam(selected);
        }}
        fullWidth
        sx={{ mb: 2 }}
      >
        {examsData && examsData.map(exam => (
          <MenuItem key={exam.examId} value={exam.examId}>{exam.examName}</MenuItem>
        ))}
      </Select>

      <p>Questions Added: {questions.length} / {totalQuestions}</p>

      <TextField
        label="New Question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        fullWidth
        sx={{ mb: 1 }}
      />

      {newOptions.map((option, index) => (
        <Stack key={index} direction="row" spacing={1} mb={1}>
          <TextField
            label={`Option ${index + 1}`}
            value={option}
            onChange={(e) => {
              const updatedOptions = [...newOptions];
              updatedOptions[index] = e.target.value;
              setNewOptions(updatedOptions);
            }}
            fullWidth
          />
          <FormControlLabel
            control={<Checkbox checked={correctOptions[index]} onChange={() => handleOptionChange(index)} />}
            label={`Correct Option ${index + 1}`}
          />
        </Stack>
      ))}

      <Stack mt={2} direction="row" spacing={2}>
        <Button variant="outlined" onClick={handleAddQuestion}>Add Question</Button>
      </Stack>
    </div>
  );
};

export default AddQuestionForm;
