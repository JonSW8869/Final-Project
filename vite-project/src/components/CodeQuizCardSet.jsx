// CodeQuizCardSet.jsx

import React, { useEffect, useState } from "react";
// No need to import Bootstrap components

import CodeLibrary from "../CodeLibrary.json"; // Import your CodeLibrary.json

const CodeQuizCardSet = ({ correctAnswerIndex }) => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    // Shuffle function to randomize array elements
    const shuffleArray = (array) => {
      const shuffledArray = array.slice();
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    };

    // Get the correct answer data
    const correctAnswerData = CodeLibrary[correctAnswerIndex];

    // Get three incorrect answers (exclude the correct answer)
    const incorrectAnswers = CodeLibrary.filter(
      (code, index) => index !== correctAnswerIndex
    );

    // Shuffle the array of incorrect answers
    const shuffledIncorrectAnswers = shuffleArray(incorrectAnswers);

    // Create the final array of quiz data with one correct answer and three incorrect answers
    const finalQuizData = shuffleArray([
      correctAnswerData,
      ...shuffledIncorrectAnswers.slice(0, 3),
    ]);

    setQuizData(finalQuizData);
  }, [correctAnswerIndex]);

  const handleCardClick = (selectedAnswer) => {
    // Handle the click event based on the selected answer
    // You can implement the logic to check if the selected answer is correct
    // and perform the necessary actions.
    console.log("Selected Answer:", selectedAnswer);
  };

  return (
    <div className="row">
      {quizData.map((quiz, index) => (
        <div
          key={index}
          className="col-lg-3 col-md-4 col-sm-6 mb-4"
          onClick={() => handleCardClick(quiz.id)}
        >
          {/* Bootstrap-like card styling */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{quiz.code}</h5>
              <p className="card-text">{quiz.description}</p>
              <button type="button" className="btn btn-primary">
                Select
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodeQuizCardSet;
