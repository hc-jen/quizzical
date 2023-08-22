import styled from '@emotion/styled';
import axios from 'axios';
import React from 'react';
import StartPage from './views/StartPage';
import QuizPage from './views/QuizPage';



/* const StyledButton = styled.button`
  background-color: teal;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkcyan;
  }
`; */
const Wrapper = styled.div`
  background-color:"red";
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

`
const YellowBlob = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  background-color: #FFFFCC;
  border-radius: 300%;
  transform: rotate(45deg);
  z-index: 1; /* Place the blob behind the content */
`;
const GreenBlob = styled.div`
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 200px;
  height: 200px;
  background-color:  rgba(153, 204, 204, 0.4);
  border-radius: 300%;
  transform: rotate(45deg);
  z-index: 1; /* Place the blob behind the content */
`;
function App() {
  
  const [trivia,setTrivia]=React.useState([]);
  const [currentPage,setCurrentPage] = React.useState("StartPage");
  const [scores, setScores] = React.useState(0);

  async function fetchQuizzes(){
    const triviaData = await axios.get('https://opentdb.com/api.php?amount=5&type=multiple').then(res=>res.data.results)
    setTrivia(triviaData)
  } 
  React.useEffect(()=>{
    //document.body.style.overflow = 'hidden'; //By setting overflow: hidden; on the body element, scrollbars will be hidden throughout your app.
    fetchQuizzes()
  },[])  
  //console.log('trivia',trivia)

  const handleCurrentPageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };
  const restart =()=>{
    setTrivia([])
    setScores(0)
    fetchQuizzes()
  }
  const plusScore= (numberOfCorrectAnswers) => {
    setScores(prev=>prev+numberOfCorrectAnswers)
  }
  return (
    <Wrapper>
      <YellowBlob/>
      <GreenBlob/>
      {currentPage === 'StartPage' && 
        (<StartPage handleCurrentPageChange={handleCurrentPageChange} fetchQuizzes={fetchQuizzes}/>)}
      {currentPage === 'QuizPage' && 
        (<QuizPage 
            trivia={trivia} 
            handleCurrentPageChange={handleCurrentPageChange} 
            restart={restart}
            scores={scores} 
            plusScore={plusScore}/>)}
    </Wrapper>
  );
}

export default App;
