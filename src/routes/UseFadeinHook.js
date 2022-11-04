import useFadein from "../hooks/useFadein";

const UseFadeinHook = () => {
  const onFadeinH1 = useFadein(1.5);
  const onFadeinP = useFadein(1.5, 1);
  return (
    <section>
      <h1 {...onFadeinH1}>useFadein</h1>
      <p {...onFadeinP}>blah blah blah blah blah</p>
    </section>
  );
};

export default UseFadeinHook;
