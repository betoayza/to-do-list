import React, { useState } from "react";
import { Task } from "./Task";
import "bootstrap-icons/font/bootstrap-icons.css";

export const List = ({ list1, handleDeleteList }) => {
  const [list, setList] = useState(list1);
  const [listTitle, setListTitle] = useState(list.title);

  const emptyTask = {
    id: list.tasks.length + 1,
    message: "",
  };

  const handleAddTask = () => {
    setList({ ...list, tasks: [...list.tasks, emptyTask] });
  };

  const handleDeleteTask = (taskID) => {
    setList({
      ...list,
      tasks: list.tasks.filter((task) => {
        return task.id !== taskID;
      }),
    });
  };

  const handleChangeListTitle = (e) => {
    setListTitle(e.target.value);
  };

  return (
    <div
      className="col border border-2 border-dark rounded m-2 col"
      style={{ backgroundColor: list.color }}
    >
      <div className="mb-3">
        <input
          type="text"
          className="form-control m-2 text-center"
          name="listTitle"
          id="listTitle"
          aria-describedby="helpId"
          placeholder="List title..."
          value={listTitle}
          onChange={handleChangeListTitle}
          style={{ backgroundColor: "transparent" }}
        />
      </div>
      <hr />
      <button type="button" className="btn btn-success" onClick={handleAddTask}>
        <i className="bi-plus-lg"></i>
      </button>
      <button
        className="btn btn-danger"
        onClick={() => handleDeleteList(list.id)}
      >
        <i className="bi-trash"></i>
      </button>

      <hr />

      {list.tasks.length
        ? list.tasks.map((task, index) => {
            return (
              <Task
                key={index}
                task={task}
                handleDeleteTask={handleDeleteTask}
              />
            );
          })
        : ""}
    </div>
  );
};
