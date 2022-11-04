import useConfirm from "../hooks/useConfirm";

const UseConfirmHook = () => {
  const onConfirmSaveWorld = () => {
    console.log("saving the world!");
  };
  const onCancelSaveWorld = () => {
    console.log("aborted...");
  };
  const onClick = useConfirm(
    "Are you sure?",
    onConfirmSaveWorld,
    onCancelSaveWorld
  );
  return (
    <section>
      <h1>useConfirm</h1>
      <button onClick={onClick}>Save the world</button>
    </section>
  );
};

export default UseConfirmHook;
