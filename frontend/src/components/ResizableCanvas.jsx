import React from "react";

const ResizableCanvas = ({ colorValue }) => {
  return (
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
  );
};

export default ResizableCanvas;
