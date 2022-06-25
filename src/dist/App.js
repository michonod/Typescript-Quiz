"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var QuestionCard_1 = require("./components/QuestionCard");
var API_1 = require("./API");
require("./App.css");
var styles_1 = require("./styles");
var App = function () {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState([]), questions = _b[0], setQuestions = _b[1];
    var _c = react_1.useState(0), number = _c[0], setNumber = _c[1];
    var _d = react_1.useState(10), total = _d[0], setTotal = _d[1];
    var _e = react_1.useState([]), userAnswers = _e[0], setUserAnswers = _e[1];
    var _f = react_1.useState(0), score = _f[0], setScore = _f[1];
    var _g = react_1.useState(true), gameOver = _g[0], setGameOver = _g[1];
    var fetchAllQuestions = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newQuestions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    setGameOver(false);
                    return [4 /*yield*/, API_1.fetchQuestions(total, API_1.Difficulty.HARD)];
                case 1:
                    newQuestions = _a.sent();
                    console.log(newQuestions);
                    setQuestions(newQuestions);
                    setScore(0);
                    setUserAnswers([]);
                    setNumber(0);
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var checkAnswer = function (event) {
        if (!gameOver) {
            var answer = event.currentTarget.value;
            var correct = questions[number].correct_answer === answer;
            if (correct)
                setScore(function (prevScore) { return prevScore + 1; });
            var answerObject_1 = {
                question: questions[number].question,
                answer: answer,
                correct: correct,
                correctAnswer: questions[number].correct_answer
            };
            setUserAnswers(function (prevState) { return __spreadArrays(prevState, [answerObject_1]); });
        }
    };
    var nextQuestion = function () {
        var nextQuestion = number + 1;
        if (nextQuestion === total) {
            setGameOver(true);
        }
        setNumber(nextQuestion);
    };
    return (React.createElement(styles_1.Body, null,
        React.createElement(styles_1.FlexDiv, null,
            React.createElement(styles_1.H1, null, "Typescript Quiz"),
            React.createElement(styles_1.Label, { htmlFor: "number" }, "Number of questions: Max: 30 "),
            React.createElement(styles_1.Input, { type: "number", max: 20, placeholder: "Enter number", onChange: function (e) { return setTotal(Number(e.target.value)); } }),
            (gameOver || userAnswers.length === total) && (React.createElement(React.Fragment, null,
                React.createElement(styles_1.StartButton, { className: "start", onClick: fetchAllQuestions }, "Start")))),
        loading && React.createElement("p", null, "Loading ......"),
        React.createElement(styles_1.FlexDiv, null, !gameOver && React.createElement("p", { className: "score" },
            "Score: ",
            score)),
        !loading && !gameOver && (React.createElement(QuestionCard_1["default"], { questionNumber: number + 1, totalQuestion: total, question: questions[number].question, answers: questions[number].answers, userAnswer: userAnswers ? userAnswers[number] : undefined, callback: checkAnswer })),
        !gameOver && !loading && userAnswers.length === number + 1 && (React.createElement("button", { onClick: nextQuestion }, "Next Question"))));
};
exports["default"] = App;
