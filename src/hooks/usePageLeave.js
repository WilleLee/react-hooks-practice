import { useEffect } from "react";

const usePageLeave = (onLeave) => {
  useEffect(() => {
    if (typeof onLeave !== "function") return;
    const onPageLeave = (event) => {
      const { clientY } = event;
      if (clientY <= 0) onLeave();
    };
    document.addEventListener("mouseleave", onPageLeave);
    return () => {
      document.removeEventListener("mouseleave", onPageLeave);
    };
  }, [onLeave]);
};

export default usePageLeave;
