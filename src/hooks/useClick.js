import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    const { current } = element;
    // when the useEffect mounts, add an event
    if (current) {
      current.addEventListener("click", onClick);
    }
    // when the component will unmount, remove the event
    return () => {
      if (current) {
        current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return element;
};

export default useClick;
