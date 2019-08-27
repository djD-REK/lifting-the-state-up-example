// Lifting The State Up (React.js Example) by Dr. Derek Austin 🥳

// Adapted from code by Kent C. Dodds and the React docs
// https://kentcdodds.com/blog/application-state-management-with-react
// https://reactjs.org/docs/lifting-state-up.html

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function CounterButton({ count, incrementOnClick }) {
  return <button onClick={incrementOnClick}>{count}</button>;
}

function CounterDisplay({ count }) {
  return <h2>The current counter count is {count}</h2>;
}

function Counter() {
  const [count, setCount] = React.useState(0);
  const incrementCounter = () => setCount(current => current + 1);
  return (
    <div>
      <CounterDisplay count={count} />
      <CounterButton count={count} incrementOnClick={incrementCounter} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
