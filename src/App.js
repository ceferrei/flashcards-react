import "./App.css";
import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">React Flashcards</h1>
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronized with state?",
    answer: "Controlled element",
  },
  // New questions
  {
    id: 4201,
    question: "What hook is used for side effects in React?",
    answer: "useEffect",
  },
  {
    id: 5632,
    question: "How to avoid re-creating functions on each render?",
    answer: "useCallback",
  },
  {
    id: 6743,
    question: "How to memoize expensive calculations?",
    answer: "useMemo",
  },
  {
    id: 7854,
    question: "How to access DOM elements directly in React?",
    answer: "useRef",
  },
  {
    id: 8965,
    question: "How to share state across components without prop drilling?",
    answer: "Context API",
  },
  {
    id: 9076,
    question: "What is the React virtual DOM?",
    answer: "An in-memory representation of the real DOM",
  },
  {
    id: 1098,
    question: "What is the React component lifecycle?",
    answer: "Mount, Update, Unmount",
  },
  {
    id: 2109,
    question: "What is React Strict Mode used for?",
    answer: "Highlighting potential problems in an application",
  },
  {
    id: 3210,
    question: "What is the purpose of keys in React lists?",
    answer: "To help React identify which items have changed",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
