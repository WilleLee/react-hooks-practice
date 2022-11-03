import { useState } from "react";

function UseStateHook() {
  const [item, setItem] = useState(0);
  const incrementItem = () => {
    if (item < 10) {
      setItem((prev) => prev + 1);
    }
  };
  const decrementItem = () => {
    if (item > 0) {
      setItem((prev) => prev - 1);
    }
  };
  return (
    <section>
      <h1>hi</h1>
      <p>
        <span>count: </span>
        <span>{item}</span>
      </p>
      <button onClick={incrementItem}>add a count</button>
      <button onClick={decrementItem}>minus a count</button>
    </section>
  );
}

export default UseStateHook;
