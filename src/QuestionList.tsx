import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { QUESTIONS } from "./questions";
import "./QuestionStyle.css";
import useScoreCalculator from "./useScoreCalculator";
import ScoreButton from "./ScoreButton";
import Scorecard from "./Scorecard";

function QuestionList() {
  const {
    answers,
    score,
    averageRating,
    errorMessage,
    handleAnswer,
    calculateScore,
  } = useScoreCalculator(QUESTIONS);

  return (
    <div className="container questionnaire-container">
      <h2 className="text-center">Question List</h2>
      {Object.entries(QUESTIONS).map(([key, question]: any) => (
        <div key={key} className="question-container text-center">
          <p>{question}</p>
          <div className="btn-group" role="group" aria-label="Answer Options">
            <button
              className={`btn ${
                answers[key] === "Yes" ? "btn-success" : "btn-primary"
              }`}
              onClick={() => handleAnswer(Number(key), "Yes")}
            >
              Yes
            </button>
            <button
              className={`btn ${
                answers[key] === "No" ? "btn-danger" : "btn-primary"
              }`}
              onClick={() => handleAnswer(Number(key), "No")}
            >
              No
            </button>
          </div>
        </div>
      ))}
      <ScoreButton calculateScore={calculateScore} />
      <Scorecard
        errorMessage={errorMessage}
        score={score}
        averageRating={averageRating}
      />
    </div>
  );
}

export default QuestionList;
