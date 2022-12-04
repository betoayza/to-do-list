import React, { useState } from "react";
import { Task } from "./Task";
import "bootstrap-icons/font/bootstrap-icons.css";

export const List = ({ list1, handleDeleteList }) => {
  const [list, setList] = useState(list1);
  const [listTitle, setListTitle] = useState("Title...");

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      message: "",
      isDeleted: false,
    };

    setList({ ...list, tasks: [...list.tasks, newTask] });
  };

  const handleDeleteTask = (taskID) => {
    setList({
      ...list,
      tasks: list.tasks.map((task) => {
        task.id === taskID && (task.isDeleted = true);
        return task;
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
        type="button"
        onClick={() => handleDeleteList(list.id)}
      >
        <i className="bi-trash"></i>
      </button>

      <hr />

      {list.tasks.length
        ? list.tasks.map((task, index) => {
            return (
              !task.isDeleted && (
                <Task
                  key={index}
                  task={task}
                  handleDeleteTask={handleDeleteTask}
                />
              )
            );
          })
        : ""}
    </div>
  );
};
