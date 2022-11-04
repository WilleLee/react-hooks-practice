const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function" || typeof onCancel !== "function") return;
  const confirmed = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmed;
};

export default useConfirm;
