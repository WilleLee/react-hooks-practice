import useNetwork from "../hooks/useNetwork";

const UseNetworkHook = () => {
  const onChangeNetwork = (onLine) => {
    onLine ? console.log("you are online") : console.log("you are offline");
  };
  const onLineStatus = useNetwork(onChangeNetwork);
  return (
    <section>
      <h1>{onLineStatus ? "Online" : "Offline"}</h1>
    </section>
  );
};

export default UseNetworkHook;
