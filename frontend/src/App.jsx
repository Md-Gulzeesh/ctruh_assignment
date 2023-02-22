import { useEffect, useRef, useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import ResizableCanvas from "./components/ResizableCanvas";

function App() {
  const [colorValue, setColorValue] = useState("#ffffff"); //default value is white
  const canvasRef = useRef(null);

  // Function to handle div dimension change
  const handleResize = () => {
    // ResizeObserver will track changes in div's dimension
    let resizeObserver = new ResizeObserver(() => {
      handleCanvasContext();
      console.log("The element was resized.");
    });
    resizeObserver.observe(canvasRef.current);
  };

  //Input type colour picker value handling function
  const handleChange = (e) => {
    setColorValue(e.target.value);
  };
  // Function for copying the color's hexadecimal code
  const handleCopyToClipBoard = (e) => {
    navigator.clipboard.writeText(e.target.textContent);
    alert("Color code copied!");
  };
  // Function for handling canvas context and text on canvas
  const handleCanvasContext = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    context.fillStyle = colorValue;
    context.fillRect(0, 0, canvas.width, canvas.height);
    // conditional rendering for text colour
    context.fillStyle = colorValue === "#ffffff" ? "#000000" : "#ffffff";
    context.font = "bold 60px sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("hello", centerX, centerY);
  };
  // This will run whenever there is a change in the div's dimension or in the color's value.
  useEffect(() => {
    handleResize();
  }, [colorValue]);

  return (
    <div className="container">
      <ColorPicker
        handleChange={handleChange}
        handleCopyToClipBoard={handleCopyToClipBoard}
        colorValue={colorValue}
      />
      <ResizableCanvas canvasRef={canvasRef} colorValue={colorValue} />
    </div>
  );
}

export default App;
