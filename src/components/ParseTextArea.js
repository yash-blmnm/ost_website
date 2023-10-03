"use client";
import React from "react";

const ParseTextarea = ({ value = [], onChange }) => {
  const [text, setText] = React.useState(value.join("\n"));

  const handleChange = (e) => {
    const value = e.target.value;

    setText(value);
    onChange(value.split("\n"));
  };

  return <textarea onChange={handleChange} value={text} />;
};

export default ParseTextarea;
