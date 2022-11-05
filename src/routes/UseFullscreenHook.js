import useFullscreen from "../hooks/useFullscreen";

const UseFullscreenHook = () => {
  const { fullscreenRef, onFullscreen, onExitFullscreen, fullscreen } =
    useFullscreen();
  return (
    <section>
      <h1>useFullscreen</h1>
      <div
        style={{
          width: "130px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={fullscreenRef}
      >
        <img src="/logo192.png" alt="react logo" />
        {!fullscreen ? null : (
          <button
            style={{ position: "fixed", left: "0", top: "0", widht: "200px" }}
            onClick={onExitFullscreen}
          >
            Go Smaller
          </button>
        )}
      </div>
      <button onClick={onFullscreen}>Go Bigger</button>
    </section>
  );
};

export default UseFullscreenHook;
