import React, { useState } from "react";
import { Task } from "./Task";

const emptyTask = {
  id: Date.now(),
  message: "",
  priority: "",
};

export const List = ({ list }) => {
  const [tasks, setTasks] = useState(list.title);
  const [listTitle, setListTitle] = useState(list.tasks);

  const handleAddTask = () => {
    setTasks([...tasks, emptyTask]);
  };

  const handleDeleteTask = (taskID) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== taskID;
      })
    );
  };

  const handleChangeListTitle = (e) => {
    setListTitle(e.target.value);
  };

  return (
    <div className="col">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="listTitle"
          id="listTitle"
          aria-describedby="helpId"
          placeholder="List title..."
          value={listTitle}
          onChange={handleChangeListTitle}
        />
      </div>
      <hr />
      <button type="button" className="btn btn-primary" onClick={handleAddTask}>
        Add
      </button>

      <hr />

      {tasks.length &&
        tasks.map((task, index) => {
          return (
            <Task key={index} task={task} handleDeleteTask={handleDeleteTask} />
          );
        })}
    </div>
  );
};
