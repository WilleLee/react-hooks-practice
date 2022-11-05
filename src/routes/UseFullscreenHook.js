import { useEffect, useRef, useState } from "react";

const useFullscreen = () => {
  const fullscreenRef = useRef();
  const [fullscreen, setFullscreen] = useState();
  const onHandleFullscreen = () => {
    if (document.fullscreenElement) {
      setFullscreen(true);
    } else {
      setFullscreen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("fullscreenchange", onHandleFullscreen);
    return () => {
      document.removeEventListener("fullscreenchange", onHandleFullscreen);
    };
  }, []);
  const onFullscreen = () => {
    const { current } = fullscreenRef;
    if (!current) return;
    current.requestFullscreen();
  };
  const onExitFullscreen = () => {
    const { current } = fullscreenRef;
    if (!current) return;
    document.exitFullscreen();
  };
  return { fullscreenRef, onFullscreen, onExitFullscreen, fullscreen };
};

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
