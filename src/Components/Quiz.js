import React from "react"
import styled from '@emotion/styled'
import Answer from './Answer'
import {decode} from 'html-entities';

const QuestionWrapper = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
  color: #293264;
  font-weight: 550;
`;

export default function Quiz({
  question,
  correct_answer,
  incorrect_answers,
  selectedAnswer,
  handleAnswerSelect}) {
  /* 1. merge and shuffle the answer array
     2. map over the answer array into answer, and each answer has a boolean value called isCorrect
     3. create answercollection to store all the answers
     4. create function to check the anser isCorrect, if true turn green
     */
/*      const [selectedAnswer, setSelectedAnswer] = React.useState('')
     const handleAnswerSelect = (answer) => {
      setSelectedAnswer(answer)
    } */
    const anwsers = incorrect_answers.concat(correct_answer).sort()
    const finalAnswers = anwsers.map(a=>
                          <Answer key={a} 
                                  text={a} 
                                  isCorrect={a===correct_answer} 
                                  isSelectedAnswer={selectedAnswer === a}
                                  onSelect={handleAnswerSelect}
                                  name={question}
                          />
)
    console.log('finalAnswers',finalAnswers)

  return (
    <QuestionWrapper>
      <h2>{decode(question)}</h2>
{/*       <div>selectedAnswer: {selectedAnswer}</div>
      <div>correct_answer: {correct_answer}</div> */}
      <div>{finalAnswers}</div>
    </QuestionWrapper>
  );
}