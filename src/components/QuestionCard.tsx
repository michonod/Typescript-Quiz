import React, { MouseEvent } from "react";
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback?: (event: MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestion: number;
};

const QuestionCard = ({
  answers,
  callback,
  question,
  questionNumber,
  totalQuestion,
  userAnswer,
}: Props) => (
  <div>
    <p>
      Question: {questionNumber} / {totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer, i) => (
        <div key={i}>
          <button disabled={!!userAnswer} onClick={callback} value={answer}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
