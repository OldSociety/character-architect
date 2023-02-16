import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestions] = useState(0);

  const [showScore, setShowScore] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === false) {
      setMistakes(mistakes + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length || mistakes < 3) {
      setCurrentQuestions(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/characters/builder`);
  };

  return (
    <div className="app">
      if ({showScore}){' '}
      {
        <>
          <div className="score-section">You scored {questions.length - 3}</div>
          <form onSubmit={handleSubmit} className="d-flex row">
            <button type="submit" className="btn btn-outline-light">
              Submit
            </button>
          </form>
        </>
      }{' '}
      else{' '}
      {
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion]}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      }
    </div>
  );
}
