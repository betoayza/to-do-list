import React, { useState, useRef } from "react";

//Pinta una tarea vacia o ya creada
export const Task = ({ task, handleDeleteTask }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [text, setText] = useState("");
  let refText = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);

    // Si esta chequeado tachar texto del input text, caso contrario destachar
    // if (isChecked) {
    //     refText.current.
    // }
  };

  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="checkbox"
            value={isChecked}
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
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={()=> handleDeleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};
