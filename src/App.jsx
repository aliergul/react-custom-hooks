import { useState } from "react";
import "./App.css";
import { useClickOutside } from "./hooks/use-click-outside";
import { useColorScheme } from "./hooks/use-color-scheme";

function App() {
  const [open, setOpen] = useState(false);

  const colorScheme = useColorScheme();
  const ref = useClickOutside(() => setOpen(false));
  return (
    <>
      <div id="click test">
        <h1>React Hooks</h1>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          {open ? "Close" : "Open"}
        </button>
      </div>

      <p>Test</p>

      {open && (
        <div
          style={{ border: "1px solid blue", flexDirection: "column" }}
          ref={ref}
        >
          <p>Controlling here</p>
          <p>Color Scheme: {colorScheme}</p>
        </div>
      )}
    </>
  );
}

export default App;
