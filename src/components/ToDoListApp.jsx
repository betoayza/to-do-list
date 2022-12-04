import React, { useState } from "react";
import { dbLists } from "../data/lists";
import { List } from "./List";

const newList = {
  id: dbLists.length + 1,
  title: "",
  tasks: [],
};

export const ToDoListApp = () => {
  const [lists, setLists] = useState(dbLists);

  const handleAddList = () => {
    setLists([...lists, newList]);
  };

  const handleDeleteList = (listID) => {
    setLists(
      lists.filter((list) => {
        return list.id !== listID;
      })
    );
  };

  return (
    <div>
      <h1 style={{ color: "#00ff00" }}>
        <span style={{ color: "#ff0000" }}>{lists.length}</span> Lists
      </h1>
      <button className="btn btn-primary" onClick={handleAddList}>
        Add
      </button>
      <button className="btn btn-danger" onClick={handleDeleteList}>
        Delete
      </button>
      <div className={"container"}>
        <div className={"row row-cols-auto text-center border"}>
          {lists.length ? (
            lists.map((list, index) => {
              return <List key={index} list1={list} />;
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
