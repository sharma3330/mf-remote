import React, { useState } from "react";

export default function Button({
  label = "Remote Button",
  initialCount = 0,
  color = "blue",
}: {
  label?: string;
  initialCount?: number;
  color?: string;
}) {
  const [count, setCount] = useState(initialCount);

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "10px 16px",
        borderRadius: "8px",
        color: "white",
        display: "inline-block",
        fontFamily: "sans-serif",
      }}
    >
      <button
        style={{
          backgroundColor: "white",
          color: color,
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        {label}
      </button>
      <div style={{ marginTop: "6px", fontSize: "14px" }}>
        Clicked: <strong>{count}</strong>
      </div>
    </div>
  );
}
