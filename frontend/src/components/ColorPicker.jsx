import React from "react";

const ColorPicker = ({ handleChange, handleCopyToClipBoard, colorValue }) => {
  return (
    <div className="color_picker_container">
      <div style={{background:"white"}}>
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
  );
};

export default ColorPicker;
