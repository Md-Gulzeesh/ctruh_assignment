import { useState } from 'react';
import './App.css'

function App() {
  const [colorValue, setColorValue] = useState("#ffffff");
  const handleChange = (e)=>{
      setColorValue(e.target.value);
  }
  const handleCopyToClipBoard= (e)=>{
      navigator.clipboard.writeText(e.target.textContent);
      alert("Color code copied!");
  }
  return (
    <div className="container">
      <div className="color_picker_container">
        <div>
          <input
            onChange={handleChange}
            type="color"
            value={colorValue}
            name="colorPicker"
            id="colorPicker"
          />
          <span onClick={handleCopyToClipBoard}>{colorValue}</span>
        </div>
          <select name="" id="">
            <option value="">Choose color palette</option>
            <option value="">Choose color palette</option>
            <option value="">Choose color palette</option>
          </select>
      </div>
      <div style={{ resize: "both", overflow: "hidden", width: "60%" }}>
        <canvas
          style={{
            border: "1px solid gainsboro",
            borderRadius: "12px",
            background: colorValue,
            width: "100%",
            height: "100%",
          }}
        ></canvas>
      </div>
    </div>
  );
}

export default App
