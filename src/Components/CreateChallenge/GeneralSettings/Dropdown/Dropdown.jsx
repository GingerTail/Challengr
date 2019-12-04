import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const options = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "Javascript" },
  { value: "C#", label: "C#" },
  { value: "Python", label: "python" }
];

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      isMulti
      options={options}
    />
  );
}
