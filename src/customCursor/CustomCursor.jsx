import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid blue",
          borderRadius: "50%",
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>

      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          width: "6px",
          height: "6px",
          backgroundColor: "blue",
          borderRadius: "50%",
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
          transition: "transform 0.05s ease-out",
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
