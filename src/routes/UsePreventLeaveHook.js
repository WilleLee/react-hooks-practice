import usePreventLeave from "../hooks/usePreventLeave";

const UsePreventLeaveHook = () => {
  const { onProtect, onUnprotect } = usePreventLeave();
  return (
    <section>
      <h1>usePreventLeave</h1>
      <div>
        <button onClick={onProtect}>Protect</button>
        <button onClick={onUnprotect}>Unprotect</button>
      </div>
    </section>
  );
};

export default UsePreventLeaveHook;
