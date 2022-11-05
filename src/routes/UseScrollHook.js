import useScroll from "../hooks/useScroll";

const UseScrollHook = () => {
  const { y } = useScroll();
  return (
    <section style={{ height: "5000px" }}>
      <h1 style={{ marginTop: "400px", color: y > 300 ? "red" : "blue" }}>
        useScroll
      </h1>
    </section>
  );
};

export default UseScrollHook;
