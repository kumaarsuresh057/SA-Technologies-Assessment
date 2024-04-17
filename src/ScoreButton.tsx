import React from "react";
interface ScoreButtonProps {
  calculateScore: () => void;
}

function ScoreButton({ calculateScore }: ScoreButtonProps) {
  return (
    <div className="text-center">
      <button className="btn btn-success" onClick={calculateScore}>
        Calculate Score
      </button>
    </div>
  );
}

export default ScoreButton;
