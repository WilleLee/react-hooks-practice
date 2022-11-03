import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    if (validator(event.target.value) || typeof validator !== "function") {
      setValue(event.target.value);
    }
  };
  return { value, onChange };
};

export default useInput;
