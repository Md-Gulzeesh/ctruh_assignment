import React from "react";

const ColorPicker = ({
  handleChange,
  handleCopyToClipBoard,
  colorValue,
  toggleTheme,
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
        <option value="">Choose color palette</option>
        <option value="">Choose color palette</option>
        <option value="">Choose color palette</option>
      </select>
      <input
        type="number"
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
