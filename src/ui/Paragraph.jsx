import React from "react";

export default function Paragraph({ children }) {
  const text = children.substring(0, 60);
  return <p>{text}...</p>;
}
