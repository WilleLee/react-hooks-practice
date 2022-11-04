const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const onProtect = () => {
    window.addEventListener("beforeunload", listener);
  };
  const onUnprotect = () => {
    window.removeEventListener("beforeunload", listener);
  };
  return { onProtect, onUnprotect };
};

export default usePreventLeave;
