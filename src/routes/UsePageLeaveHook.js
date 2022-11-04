import usePageLeave from "../hooks/usePageLeave";

const UsePageLeaveHook = () => {
  const onLeave = () => {
    console.log("Please don't leave!");
  };
  usePageLeave(onLeave);
  return (
    <section>
      <h1>usePageLeave</h1>
    </section>
  );
};

export default UsePageLeaveHook;
