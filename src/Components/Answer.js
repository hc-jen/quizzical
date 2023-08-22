import React, { useContext } from "react"
import styled from '@emotion/styled'
import {decode} from 'html-entities';
import {isSubmittedContext} from '../views/QuizPage'

const AnswerButton = styled.button`
  background-color: ${({ isSelectedAnswer, isCorrect, showResults }) =>
    showResults && isCorrect
      ? "#94D7A2"          // Correct answer during results display
      : showResults && isSelectedAnswer && !isCorrect
      ? "#F8BCBC"            // Incorrect answer during results display
      : isSelectedAnswer
      ? "#D6DBF5"           // Selected answer during selection
      : "white"};         // Default background color
  color: #293264;
  font-weight: bold;
  border: 2px solid 
  ${({ isSelectedAnswer, isCorrect, showResults }) =>
    showResults && isCorrect
      ? "#94D7A2"
      : showResults && isSelectedAnswer && !isCorrect
      ? "#F8BCBC" 
      : isSelectedAnswer
      ? "#D6DBF5"
      : "#4D5B9E"};
      border-radius: 10px;
  margin: 0.2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  input[type="radio"] {
    display: none;
  }
  &:hover {
    background-color: ${({ isSelectedAnswer }) =>
      isSelectedAnswer ? null : "lightgray"};

     
      }
  }


`;
export default function Answer({
                            text, 
                            isCorrect, 
                            isSelectedAnswer, 
                            onSelect, 
                            name}){
  const handleAnswerSelect = () => {
      onSelect(text);
  };
  const showResults= useContext(isSubmittedContext)
  console.log('showResults in Answer.js',showResults)
  return (
    <AnswerButton
      isSelectedAnswer={isSelectedAnswer}
      isCorrect={isCorrect}
      onClick={handleAnswerSelect}
      showResults={showResults}
  >
      <input 
        type="radio" 
        name={name}
        checked={isSelectedAnswer} 
        onChange={() => {}} />
      <span>{decode(text)}</span>

    </AnswerButton>
  )
}