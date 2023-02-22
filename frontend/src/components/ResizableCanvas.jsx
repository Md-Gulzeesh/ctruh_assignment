import React from "react";

const ResizableCanvas = ({ colorValue, canvasRef }) => {
  return (
    <div
      style={{
        resize: "both",
        overflow: "hidden",
        width: "100%",
        height: "50vh",
        textAlign: "center",
        margin:"20px"
      }}
    >
      <canvas
        ref={canvasRef}
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
