import React, { MouseEvent } from "react";
import { AnswerObject } from "../App";
import { PTag } from "../dist/styles";
import { QuestionCardDiv, CardQuestions, Div, AnswerButtons } from "../styles";

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
  <QuestionCardDiv>
    <PTag>
      Question: {questionNumber} / {totalQuestion}
    </PTag>
    <PTag dangerouslySetInnerHTML={{ __html: question }}></PTag>
    <CardQuestions>
      {answers.map((answer, i) => (
        <Div key={i}>
          <AnswerButtons
            disabled={!!userAnswer}
            onClick={callback}
            value={answer}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </AnswerButtons>
        </Div>
      ))}
    </CardQuestions>
  </QuestionCardDiv>
);

export default QuestionCard;
