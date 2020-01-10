import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  function timeChange(count) {
    return count === 1 ? "time" : "times";
  }
  return (
    <div className="App">
      <h1>React Hooks Playground</h1>
      <p onClick={() => setCount(count + 1)}>
        You've clicked this counter: {count} {timeChange(count)}
      </p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>{name}</h2>
      <Form setName={setName} />
    </div>
  );
}
