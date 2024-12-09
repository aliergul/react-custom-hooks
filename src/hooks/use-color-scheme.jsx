import { useEffect, useState } from "react";

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState("dark");

  useEffect(() => {
    const handleChange = (e) => {
      if (e.matches) {
        setColorScheme("dark");
      } else {
        setColorScheme("light");
      }
    };

    const scheme = matchMedia("(prefers-color-scheme: dark)");
    handleChange(scheme); //for first render
    scheme.addEventListener("change", handleChange);

    return () => {
      scheme.removeEventListener("change", handleChange);
    };
  });

  return colorScheme;
}
