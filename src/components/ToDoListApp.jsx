import React, { useState } from "react";
import { dbLists } from "../data/lists";
import { List } from "./List";

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

export const ToDoListApp = () => {
  const [lists, setLists] = useState(dbLists);

  let newList = {
    id: lists.length + 1,
    title: "",
    tasks: [],
    color: randomColor(),
  };

  const handleAddList = () => {
    setLists([...lists, newList]);
  };

  const handleDeleteList = (listID) => {
    console.log(listID);

    setLists(
      lists.filter((list) => {
        //if (list.id !== listID) return list;
        return list.id != listID;
      })
    );
  };

  const handleCleanAll = () => {
    setLists([]);
  };

  return (
    <div className={"h-auto"}>
      <h1 style={{ color: "#00ff00" }}>
        <span style={{ color: "#ff0000" }}>{lists.length}</span> Lists
      </h1>
      <button className="btn btn-primary" onClick={handleAddList}>
        <i className="bi-plus-lg"></i>
      </button>
      <button className="btn btn-danger" onClick={handleCleanAll}>
        Clean All
      </button>
      <div className={"container"}>
        <div
          className={"row row-cols-auto text-center border"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {lists.length ? (
            lists.map((list, index) => {
              return (
                <List
                  key={index}
                  list1={list}
                  handleDeleteList={handleDeleteList}
                />
              );
            })
          ) : (
            <div className={"text-center w-100 border"}>
              <h2 style={{ color: "#8b0000" }}>No lists yet :(</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
