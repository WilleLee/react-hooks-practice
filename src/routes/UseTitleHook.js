import useTitle from "../hooks/useTitle";

const UseTitleHook = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("done"), 4000);
  return (
    <section>
      <h1>useTitle with useEffect</h1>
    </section>
  );
};

export default UseTitleHook;
