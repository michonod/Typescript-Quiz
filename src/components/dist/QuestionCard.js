"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("../dist/styles");
var styles_2 = require("../styles");
var QuestionCard = function (_a) {
    var answers = _a.answers, callback = _a.callback, question = _a.question, questionNumber = _a.questionNumber, totalQuestion = _a.totalQuestion, userAnswer = _a.userAnswer;
    return (react_1["default"].createElement(styles_2.QuestionCardDiv, null,
        react_1["default"].createElement(styles_1.PTag, null,
            "Question: ",
            questionNumber,
            " / ",
            totalQuestion),
        react_1["default"].createElement(styles_1.PTag, { dangerouslySetInnerHTML: { __html: question } }),
        react_1["default"].createElement(styles_2.CardQuestions, null, answers.map(function (answer, i) { return (react_1["default"].createElement(styles_2.Div, { key: i },
            react_1["default"].createElement(styles_2.AnswerButtons, { disabled: !!userAnswer, onClick: callback, value: answer },
                react_1["default"].createElement("span", { dangerouslySetInnerHTML: { __html: answer } })))); }))));
};
exports["default"] = QuestionCard;
