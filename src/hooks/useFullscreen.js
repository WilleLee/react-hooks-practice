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

export default useFullscreen;
