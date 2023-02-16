import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizIndex.css';

export default function App() {
  const navigate = useNavigate();

  const questions = [
    {
      questionText: 'Which is the Seraph of magic?',
      answerOptions: [
        { answerText: 'Cupid', isCorrect: false },
        { answerText: 'Larimar', isCorrect: false },
        { answerText: 'Nassenti', isCorrect: true },
        { answerText: 'Miira', isCorrect: false },
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
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestions] = useState(0);

  const [showScore, setShowScore] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
			setScore(score + 1);
		} else {
      setMistakes(mistakes + 1)
    }

    const nextQuestion = currentQuestion + 1;

    if (mistakes === 1) {
      setShowScore(true)
    }
    
    if (nextQuestion < questions.length) {
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
      {showScore ? (
        <>
          <div className="score-section">You scored {score}</div>
          <form onSubmit={handleSubmit} className="d-flex row">
            <button type="submit" className="btn btn-outline-light">
              Submit
            </button>
          </form>
        </>
      )
      :
      (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1} </span>/{questions.length}
            </div>
            <div className="question-text">
            {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ),
            )}
          </div>
        </>
      )}
    </div>
  );
}
