import shallow from "zustand/shallow";
import { useBearStore } from "../store";

const UseZustand = () => {
  const { bear, incrementBear, decrementBear } = useBearStore(
    (state) => ({
      bear: state.bear,
      incrementBear: state.incrementBear,
      decrementBear: state.decrementBear,
    }),
    shallow
  );
  return (
    <section>
      <h1>zustand</h1>
      <p>
        you now have {bear} {bear > 1 ? "bears" : "bear"}
      </p>
      <div className="btns">
        <button onClick={incrementBear}>add a bear</button>
        <button onClick={decrementBear}>remove a bear</button>
      </div>
    </section>
  );
};

export default UseZustand;
