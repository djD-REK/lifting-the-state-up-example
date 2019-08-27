// Lifting State Up (React.js Example) by Dr. Derek Austin 🥳

// Adapted from code by Kent C. Dodds and the React docs
// https://kentcdodds.com/blog/application-state-management-with-react
// https://reactjs.org/docs/lifting-state-up.html

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function CounterDisplay({ count }) {
  // We pass the mutable state to the counter display function
  return <h2>The current counter count is {count}</h2>;
}

function CounterButton({ count, incrementOnClick }) {
  // We pass the mutable state and increment function from the app to the button functoin
  return <button onClick={incrementOnClick}>{count}</button>;
}

function Counter() {
  // We lift state up one level, from the component to the app
  const [count, setCount] = React.useState(0);
  const incrementCounter = () => setCount(current => current + 1);
  return (
    <div>
      <CounterDisplay count={count} />
      <CounterButton count={count} incrementOnClick={incrementCounter} />
      <h3>State is lifted from component to app level</h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
