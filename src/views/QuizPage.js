import React from 'react'
import styled from '@emotion/styled'
import Quiz from '../Components/Quiz'

const QuizPageWrapper = styled.div`
  position: relative;
  min-width: 360px;
  background-color: #F5F7FB;
  box-sizing: border-box;
  padding: 30px 15px;
  font-color: #293264;
  font-weight: bold;
  margin: 0 50px;
`;


const Tagline = styled.div`
  position: relative;
  font-size: 14px;
  color: gray;
  box-sizing: border-box;
  padding: 30px 15px 0;
  margin: 0px;
`; 
const ButtonContainer = styled.div`
  display: flex; /* Use flex display for horizontal alignment */
  justify-content: space-between; /* Distribute buttons evenly */
  margin-top: 1rem; /* Add some spacing between buttons */
  justify-content: center;
`;

const SubmittedContainer = styled.div`
display: flex;
justify-content: space-around; /* Distribute items with space around them */
align-items: center; /* Center items vertically */
`;

const QuizButton = styled.button`
  background-color: #4D5B9E;
  font-size: 14px;
  color: #F5F7FB;
  padding: 0.7rem 2.25rem;
  border-radius:12px;
  border: #4D5B9E;
`
const ScoreDisplay = styled.div`
  font-size: 18px;
  color: #293264;
  margin-right: 1.5rem;
  
`;
export const isSubmittedContext=React.createContext(false)  
export default function QuizPage({
  trivia,
  handleCurrentPageChange,
  restart,
  scores,
  plusScore}) {
  const [selectedAnswers, setSelectedAnswers] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const handleAnswerSelect = (question, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
    console.log('selectedAnswers',selectedAnswers)
  };

  const handleAnswerSubmit = () => {
    if (!submitted) {
      const correctAnswers = trivia.filter(
        (item) => selectedAnswers[item.question] === item.correct_answer
      );
      plusScore(correctAnswers.length);
      setSubmitted(true);
    }
  };
  const quizCollection = trivia.map( t => <Quiz key={t.question}
                                                question={t.question} 
                                                correct_answer={t.correct_answer}
                                                incorrect_answers={t.incorrect_answers}
                                                selectedAnswer={selectedAnswers[t.question] || ""}
                                                handleAnswerSelect={(answer) => handleAnswerSelect(t.question, answer)}
                                          />)
                                      
  return (
    <isSubmittedContext.Provider value={submitted}>
      <QuizPageWrapper>
        <Tagline>
          {quizCollection}
        </Tagline>
        <ButtonContainer submitted={submitted}>
          {!submitted&&
            <QuizButton onClick={handleAnswerSubmit}>
              Submit Answers
            </QuizButton>}
          {submitted&&
            <SubmittedContainer>
              <ScoreDisplay>You scored {scores}/5 correct answers</ScoreDisplay>
              <QuizButton onClick={()=>{handleCurrentPageChange('StartPage');restart()}}>
                Play Again
              </QuizButton>
            </SubmittedContainer>}
        </ButtonContainer>
      </QuizPageWrapper>
    </isSubmittedContext.Provider>
  )
}