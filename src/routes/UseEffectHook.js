import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const sayHello = () => {
    console.log("hello");
  };
  useEffect(() => {
    sayHello();
  }, [num1]);
  return (
    <section>
      <h1>use effect</h1>
      <button onClick={() => setNum1((prev) => prev + 1)}>{num1}</button>
      <button onClick={() => setNum2((prev) => prev + 1)}>{num2}</button>
    </section>
  );
};

export default UseEffectHook;
