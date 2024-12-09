import { useState } from "react";
import { useClickOutside } from "./hooks/use-click-outside";
import { useColorScheme } from "./hooks/use-color-scheme";
import { useFocusWithin } from "./hooks/use-focus-within";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const clickRef = useClickOutside(() => setOpen(false));
  const colorScheme = useColorScheme();
  const focusObject = useFocusWithin();

  return (
    <div style={{ width: 400 }}>
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
          border: "1px solid #ffffff",
          padding: 30,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={clickRef}
      >
        {open && (
          <div style={{ border: "1px solid #0A07B6FF", padding: 20 }}>
            Controlling Here
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
          border: "1px solid #ffffff",
          padding: 30,
        }}
      >
        <p
          style={{ textTransform: "capitalize", border: "1px solid #0A07B6FF" }}
        >
          Color Scheme: {colorScheme}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #CEDB0DFF",
          padding: 10,
        }}
      >
        <h3>Focus Within Input</h3>

        <span>
          {focusObject.focused ? "Focus-Within" : "There Is No Focus!"}
        </span>
        <input ref={focusObject.ref} />
      </div>
    </div>
  );
}

export default App;
