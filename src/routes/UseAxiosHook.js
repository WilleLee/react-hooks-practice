import useAxios from "../hooks/useAxios";

const UseAxiosHook = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(
    `Loading: ${loading}\nError: ${error}\ndata: ${JSON.stringify(data)}`
  );
  return (
    <section>
      <h1>useAxios</h1>
      <h2>{loading && "Loading"}</h2>
      <h2>{data && data.status}</h2>
      <button onClick={refetch}>Refetch</button>
    </section>
  );
};

export default UseAxiosHook;
