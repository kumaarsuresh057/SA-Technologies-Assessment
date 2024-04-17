import { useState } from "react";

const useScoreCalculator = (questions: Record<number, string>) => {
  const [answers, setAnswers] = useState<Record<number, string | null>>({});
  const [score, setScore] = useState<number>(0);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAnswer = (index: number, answer: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [index]: answer }));
  };

  const calculateScore = () => {
    const answeredQuestions = Object.keys(questions)
      .map(Number)
      .filter((key) => answers[key] !== undefined);
    if (answeredQuestions.length !== Object.keys(questions).length) {
      setErrorMessage("Please answer all questions.");
      return;
    }

    const yesCount = answeredQuestions.filter(
      (key) => answers[key] === "Yes"
    ).length;
    const newScore = (yesCount / Object.keys(questions).length) * 100;
    setScore(newScore);

    const localValue = localStorage.getItem("scores");
    let storedScores = [];
    if (localValue) {
      storedScores = JSON.parse(localValue) || [];
      localStorage.setItem(
        "scores",
        JSON.stringify([...storedScores, newScore])
      );
    } else {
      localStorage.setItem("scores", JSON.stringify([newScore]));
    }

    const total =
      storedScores.reduce((acc: number, cur: number) => acc + cur, 0) +
      newScore;
    setAverageRating(total / (storedScores.length + 1));
    setErrorMessage("");
  };

  return {
    answers,
    score,
    averageRating,
    errorMessage,
    handleAnswer,
    calculateScore,
  };
};

export default useScoreCalculator;
