import React from "react";
interface ScorecardProps {
  errorMessage: string;
  score: number;
  averageRating: number;
}

function Scorecard({ errorMessage, score, averageRating }: ScorecardProps) {
  return (
    <div className="text-center">
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      {score > 0 && <p className="result">Your score: {score.toFixed(2)}%</p>}
      {averageRating > 0 && (
        <p className="result">Average rating: {averageRating.toFixed(2)}%</p>
      )}
    </div>
  );
}

export default Scorecard;
