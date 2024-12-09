import { useEffect, useRef, useState } from "react";

export function useFocusWithin() {
  const [focused, setFocused] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const handleFocusIn = () => {
        setFocused(true);
      };
      const handleFocusOut = (e) => {
        if (!element.contains(e.relatedTarget)) {
          setFocused(false);
        }
      };

      element.addEventListener("focusin", handleFocusIn);

      element.addEventListener("focusout", handleFocusOut);

      return () => {
        element.removeEventListener("focusin", handleFocusIn);

        element.removeEventListener("focusout", handleFocusOut);
      };
    }
  }, [ref]);

  return { ref, focused };
}
