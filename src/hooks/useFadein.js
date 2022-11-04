import { useEffect, useRef } from "react";

const useFadein = (duration = 1, delay = 0) => {
  const element = useRef();
  console.log(element);
  useEffect(() => {
    const { current } = element;
    if (typeof duration !== "number" || typeof delay !== "number" || !current)
      return;
    if (current) {
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [duration, delay]);
  return {
    ref: element,
    style: { opacity: 0 },
  };
};

export default useFadein;
