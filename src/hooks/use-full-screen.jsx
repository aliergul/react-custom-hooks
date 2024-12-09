import { useEffect, useRef, useState } from "react";

export function useFullScreen() {
  const fullScreenRef = useRef();
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement) {
        setFullScreen(true);
      } else {
        setFullScreen(false);
      }
    });
  }, []);

  const toggle = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        alert("Unexpected error...", err);
      });
    } else {
      (fullScreenRef.current || document.documentElement)
        .requestFullscreen()
        .catch((err) => {
          alert("Unexpected error...", err);
        });
    }
  };
  return { fullScreenRef, toggle, fullScreen };
}
