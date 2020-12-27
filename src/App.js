import React, {useState} from 'react';

const App = () => {
  const questions = [
    {
      questionText: "what is the capital of Finland?",
      answerOptions: [
        {answerText: "Copenhagen", isCorrect: false},
        {answerText: "Helsinki", isCorrect: true},
        {answerText: "Lisbon", isCorrect: false},
        {answerText: "Tallinn", isCorrect: false},
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        {answerText: "Tony Stark", isCorrect: false},
        {answerText: "Satya Nadella", isCorrect: false},
        {answerText: "Ted Sarandos", isCorrect: false},
        {answerText: "Elon Musk", isCorrect: true},
      ],
    },
    {
      questionText: "The Galaxy was created by which company?",
      answerOptions: [
        {answerText: "Apple", isCorrect: false},
        {answerText: "Sharp", isCorrect: false},
        {answerText: "Huawei", isCorrect: false},
        {answerText: "Samsun", isCorrect: true},
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {answerText: "5", isCorrect: false},
        {answerText: "6", isCorrect: false},
        {answerText: "7", isCorrect: true},
        {answerText: "8", isCorrect: false},
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
     if (isCorrect === true) {
       setScore(score + 1);
     }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } else {
    setShowScore(true);
  }
  }

  return (
    <div className="app">
       {showScore ? (
         <div className="score-section">You scored {score} out of{questions.length}</div>  
       ) : (
         <>
           <div className="question-section">
           <div className="question-count">
           <span>Question {currentQuestion + 1}</span>/{questions.length}
             </div>
           <div className="question-text">{questions[currentQuestion].questionText}</div>
             </div>
           <div className="answer-section">
          {questions[currentQuestion].answerOptions.map((answerOption) => (
          <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
       ))}
             </div>
         </>
       )
      }
    </div>
  );
}

export default App;
