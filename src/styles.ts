import styled from "styled-components";
export const QuestionCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardQuestions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
`;

export const H1 = styled.h1`
  color: white;
`;
export const Label = styled.label`
  color: white;
`;
export const Input = styled.input`
  width: 100px;
  height: 100px;
  padding: 10px;
  font-size: 40px;
  ::-webkit-input-placeholder {
    text-align: center;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Div = styled.div``;

export const AnswerButtons = styled.button`
  padding: 10px 40px;
  background-color: white;
  color: green;
  margin: 10px;
  font-size: 20px;
  transition: all 0.2s ease-in;
  :hover {
    background-color: #eeff33;
    color: white;
  }
`;

export const StartButton = styled.button`
  padding: 20px 50px;
  border-radius: 8px;
  font-size: 20px;
  background-color: yellow;
  margin: 20px;
`;

export const PTag = styled.p`
  font-size: 20px;
  color: white;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("jsback.jpg");
`;
