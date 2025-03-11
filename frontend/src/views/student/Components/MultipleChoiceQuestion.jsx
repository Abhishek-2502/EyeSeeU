import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { Container } from '@mui/material';
import { useGetQuestionsQuery } from 'src/slices/examApiSlice';
import { useParams } from 'react-router';

export default function MultipleChoiceQuestion({ questions, saveUserTestScore }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [isFinishTest, setisFinishTest] = useState(false);
  const [userAnswers, setUserAnswers] = useState({}); // Store selected answers


  useEffect(() => {
    setIsLastQuestion(currentQuestion === questions.length - 1);
  }, [currentQuestion,questions.length]);

  const handleOptionSelect = (questionId, selectedOption) => {
    console.log(questions.length)
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
    setSelectedOption(selectedOption); 
  };
  // const handleNextQuestion = () => {
  //   let isCorrect = false;
  //   isCorrect =
  //     questions[currentQuestion].options.find((option) => option.isCorrect)._id === selectedOption;
  //   if (isCorrect) {
  //     setScore(score + 1);
  //     saveUserTestScore();
  //   }

  //   setSelectedOption(null);
  //   if (currentQuestion < questions.length - 1) {

  //    console.log(questions.length)
  //     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  //   } else {
  //     setisFinishTest(true);
  //   }
  // };
  const handleNextQuestion = () => {
    if (!questions[currentQuestion]) {
      console.error("Error: Question not found at index", currentQuestion);
      return;
    }
  
    setSelectedOption(null);
  
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setisFinishTest(true);
    }
  };
  

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" mb={3}>
          Question {currentQuestion + 1}:
        </Typography>
        <Typography variant="body1" mb={3}>
          {questions[currentQuestion].question}
        </Typography>
        <Box mb={3}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              // value={selectedOption}
              // onChange={handleOptionChange}
              value={userAnswers[questions[currentQuestion]._id] || ''}
              onChange={(event) => handleOptionSelect(questions[currentQuestion]._id, event.target.value)}

            >
              {questions[currentQuestion].options.map((option) => (
                <FormControlLabel
                  key={option._id}
                  value={option._id}
                  control={<Radio />}
                  label={option.optionText}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextQuestion}
            disabled={!userAnswers[questions[currentQuestion]._id]}

            style={{ marginLeft: 'auto' }}
          >
            {isLastQuestion ? 'Finish' : 'Next Question'}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
