import { MouseEvent, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuestions, Difficulty, QuestionState } from "./API";
import "./App.css";
import { Body, FlexDiv, H1, Input, Label, StartButton } from "./styles";

export interface AnswerObject {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [total, setTotal] = useState(10);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const fetchAllQuestions = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(total, Difficulty.HARD);
    console.log(newQuestions);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (event: MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = event.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prevScore) => prevScore + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prevState) => [...prevState, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === total) {
      setGameOver(true);
    }
    setNumber(nextQuestion);
  };

  return (
    <Body>
      <FlexDiv>
        <H1>Typescript Quiz</H1>
        <Label htmlFor="number">Number of questions: Max: 30 </Label>
        <Input
          type="number"
          max={20}
          placeholder="Enter number"
          onChange={(e) => setTotal(Number(e.target.value))}
        />
        {(gameOver || userAnswers.length === total) && (
          <>
            <StartButton className="start" onClick={fetchAllQuestions}>
              Start
            </StartButton>
          </>
        )}
      </FlexDiv>
      {loading && <p>Loading ......</p>}
      <FlexDiv>{!gameOver && <p className="score">Score: {score}</p>}</FlexDiv>
      {!loading && !gameOver && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestion={total}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </Body>
  );
};

export default App;
