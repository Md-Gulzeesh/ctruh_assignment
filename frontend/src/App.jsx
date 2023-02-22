import { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import ResizableCanvas from "./components/ResizableCanvas";

function App() {
  const [colorValue, setColorValue] = useState("#ffffff");
  const handleChange = (e) => {
    setColorValue(e.target.value);
  };
  const handleCopyToClipBoard = (e) => {
    navigator.clipboard.writeText(e.target.textContent);
    alert("Color code copied!");
  };
  return (
    <div className="container">
      <ColorPicker
        handleChange={handleChange}
        handleCopyToClipBoard={handleCopyToClipBoard}
        colorValue={colorValue}
      />
      <ResizableCanvas colorValue={colorValue} />
    </div>
  );
}

export default App;
