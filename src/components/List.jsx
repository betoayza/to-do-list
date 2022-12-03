import React, { useState } from "react";
import { Task } from "./Task";

const emptyTask = {
  id: Date.now(),
  message: "",
  priority: "",
};

export const List = ({ list1 }) => {
  // const [tasks, setTasks] = useState(list.tasks);
  const [list, setList] = useState(list1);
  // const [listTitle, setListTitle] = useState(list.title);

  let arrColors = [
    "#ffa07a",
    "#ff6347",
    "#d0ff14",
    "#ffcff1",
    "#7df9ff ",
    "#ffd700",
  ];

  const randomColor = () => {
    let colorChosen = arrColors[Math.floor(Math.random() * 6)];
    return colorChosen;
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
      className="col border border-2 border-dark rounded m-2"
      style={{ backgroundColor: randomColor() }}
    >
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="listTitle"
          id="listTitle"
          aria-describedby="helpId"
          placeholder="List title..."
          value={list.title}
          onChange={handleChangeListTitle}
        />
      </div>
      <hr />
      <button type="button" className="btn btn-success" onClick={handleAddTask}>
        Add
      </button>

      <hr />

      {list.tasks.length &&
        list.tasks.map((task, index) => {
          return (
            <Task key={index} task={task} handleDeleteTask={handleDeleteTask} />
          );
        })}
    </div>
  );
};
