import useInput from "../hooks/useInput";

const UseInputHook = () => {
  const checkMaxLen = (value) => value.length <= 10;
  const name = useInput("", checkMaxLen);
  return (
    <section>
      <h1>use input hook</h1>
      <input type="text" placeholder="name" {...name} />
    </section>
  );
};

export default UseInputHook;
