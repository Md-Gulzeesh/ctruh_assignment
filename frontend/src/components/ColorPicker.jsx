import React from "react";
import colorPalette from "../data/colorPaletteData.json";
const ColorPicker = ({
  handleChange,
  handleCopyToClipBoard,
  colorValue,
  toggleTheme,
  handleChangeInTwoDigitNumber,
  twoDigitNumber
}) => {
  return (
    <div className="color_picker_container">
      <div
        style={{
          background: toggleTheme === "light" ? "white" : "#2d3748",
          color: toggleTheme === "light" ? "#4A5568" : "#A0AEC0",
        }}
      >
        <input
          onChange={handleChange}
          type="color"
          value={colorValue}
          name="colorPicker"
          id="colorPicker"
        />
        <span onClick={handleCopyToClipBoard}>{colorValue}</span>
      </div>
      <select
        name=""
        id=""
        style={{
          background: toggleTheme === "light" ? "white" : "#2d3748",
          color: toggleTheme === "light" ? "#4A5568" : "#A0AEC0",
        }}
      >
        <option value="">Choose color from palette</option>
        {colorPalette.map((elem, index) => (
          <option key={index} value={elem.code}>
            {elem.name}
          </option>
        ))}
      </select>
      <input
        onChange={handleChangeInTwoDigitNumber}
        type="number"
        value={twoDigitNumber}
        placeholder="Enter two digit number"
        style={{
          background: toggleTheme === "light" ? "white" : "#2d3748",
          color: toggleTheme === "light" ? "#4A5568" : "#A0AEC0",
        }}
      />
    </div>
  );
};

export default ColorPicker;
