import { useEffect, useRef } from "react";

export function useClickOutside(callbackFunc) {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    const handleClick = (e) => {
      if (element && !element.contains(e.target)) {
        callbackFunc();
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]); //eslint-disable-line

  return ref;
}
