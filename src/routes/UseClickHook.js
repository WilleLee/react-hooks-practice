import useClick from "../hooks/useClick";

const UseClickHook = () => {
  const sayHello = () => {
    console.log("hello");
  };
  const title = useClick(sayHello);
  return (
    <section>
      <h1>useClick (useEffect and useRef)</h1>
      <h2 ref={title}>title</h2>
    </section>
  );
};

export default UseClickHook;
