import React from 'react'
import styled from '@emotion/styled'

const StartPageWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center; /* Center horizontally */
justify-content: center; /* Center vertically */
min-height: 100vh; /* Ensure the component takes at least the viewport height */
background-color: #F5F7FB;
box-sizing: border-box;
padding: 30px 15px;
`;
const Headline = styled.div`
  position: relative;
  font-size: 40px;
  color: #293264;
  font-weight: 550;
  box-sizing: border-box;
  padding: 5px 15px;
  text-align: center;
`; 

const Tagline = styled.div`
  position: relative;
  font-size: 20px;
  color: #293264;
  box-sizing: border-box;
  padding: 10px 15px 40px;
  text-align: center;
`; 

const StartButton = styled.button`
  background-color: #4D5B9E;
  font-size: 18px;
  color: #F5F7FB;
  padding: 1.2rem 4.5rem;
  border-radius:15px;
  border: #4D5B9E;
`
export default function StartPage({handleCurrentPageChange, fetchQuizzes}) {
  return (
    <StartPageWrapper>
      <Headline>
        Quizzical
      </Headline>
      <Tagline>
        Some description if needed
      </Tagline>
      <StartButton onClick={()=>{handleCurrentPageChange('QuizPage');}}>
        Start Quiz
      </StartButton>
    </StartPageWrapper>
  )
}