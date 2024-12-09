import { useEffect, useRef } from "react";

export function useClickOutside(callbackFunc) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
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
