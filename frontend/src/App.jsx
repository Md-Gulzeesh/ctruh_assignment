import { useEffect, useRef, useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import ResizableCanvas from "./components/ResizableCanvas";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";

function App() {
  const [colorValue, setColorValue] = useState("#ffffff"); //default value is white
  const canvasRef = useRef(null);
  const [toggleTheme, setToggleTheme] = useState("light");
  const [twoDigitNumber, setTwoDigitNumber] = useState(10);

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
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    context.fillStyle = colorValue;
    context.fillRect(0, 0, canvas.width, canvas.height);
    // conditional rendering for text colour
    context.fillStyle = colorValue === "#ffffff" ? "#000000" : "#ffffff";
    context.font = "bold 60px sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(twoDigitNumber, centerX, centerY);
  };
  // This will run whenever there is a change in the div's dimension or in the color's value.
  useEffect(() => {
    handleResize();
  }, [colorValue, twoDigitNumber]);

  const handleChangeInTwoDigitNumber = (e) => {
    if (e.target.value < 100) {
      setTwoDigitNumber(e.target.value);
    }
  };
  return (
    <div className={toggleTheme === "light" ? "lightMode" : "darkMode"}>
      {" "}
      <div className="toggleThemeContainer">
        {toggleTheme === "light" ? (
          <BsFillMoonStarsFill
            onClick={() => setToggleTheme("dark")}
            style={{ fontSize: "25px", cursor: "pointer" }}
          />
        ) : (
          <BsSun
            onClick={() => setToggleTheme("light")}
            style={{ fontSize: "25px", cursor: "pointer", color: "white" }}
          />
        )}
      </div>
      <div className="container">
        <ColorPicker
          handleChange={handleChange}
          handleCopyToClipBoard={handleCopyToClipBoard}
          colorValue={colorValue}
          toggleTheme={toggleTheme}
          handleChangeInTwoDigitNumber={handleChangeInTwoDigitNumber}
          twoDigitNumber={twoDigitNumber}
        />
        <ResizableCanvas canvasRef={canvasRef} colorValue={colorValue} />
      </div>
    </div>
  );
}

export default App;
