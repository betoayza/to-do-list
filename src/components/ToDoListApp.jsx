import React, { useState } from "react";
//import { dbLists } from "../data/lists";
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
  const [lists, setLists] = useState([]);

  let newList = {
    id: lists.length + 1,
    title: "",
    tasks: [],
    color: randomColor(),
    isDeleted: false
  };

  const handleAddList = () => {
    setLists([...lists, newList]);
  };

  const handleDeleteList = (listID) => {
    console.log(listID);   

    setLists(lists.map((list) => {
      console.log(list.id, " | ", listID);
      list.id === listID && (list.isDeleted = true)
      return list;
    }));
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
      <div className={"container mt-3"}>
        <div
          className={"row row-cols-auto text-center"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {lists.length ? (
            lists.map((list, index) => {
              return (
                !list.isDeleted && (
                  <List
                    key={index}
                    list1={list}
                    handleDeleteList={handleDeleteList}
                  />
                )
              );
            })
          ) : (
            <div className={"text-center w-100"}>
              <h2 style={{ color: "#ffd700" }}>No lists yet :(</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
