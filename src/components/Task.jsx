import React, { useState, useRef } from "react";

export const Task = ({ task, handleDeleteTask }) => {
  const [isChecked, setIsChecked] = useState(task.isCheked);
  const [text, setText] = useState(task.message);
  let refText = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="checkbox"
            value={task.isChecked}
            aria-label="Checkbox for following text input"
            onClick={handleCheck}
          />
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          onChange={handleChange}
          value={text}
          ref={refText}
          style={isChecked ?  { textDecoration: "line-through"} : {}}
        />
      </div>
      <button
        type="button"
        className="btn btn-danger h-50"
        onClick={() => handleDeleteTask(task.id)}
      >
        <i className="bi-dash-lg"></i>
      </button>
    </div>
  );
};
