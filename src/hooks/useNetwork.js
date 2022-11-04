import { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  useEffect(() => {
    const handler = () => {
      setStatus(navigator.onLine);
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
    };
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    };
  }, [onChange, status]);
  return status;
};

export default useNetwork;
