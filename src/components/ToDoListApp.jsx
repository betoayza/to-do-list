import React, { useState } from "react";
import { List } from "./List";

export const ToDoListApp = () => {
  const [lists, setLists] = useState([]);

  const handleAddList = () => {
    setLists([...lists, { title: "", tasks: [] }]);
  };

  return (
    <div>
      <h1>All Lists</h1>
      <button className="btn btn-primary" onClick={handleAddList}>
        Add list
      </button>
      <div className={"container"}>
        <div className={"row row-cols-auto"}>
          {lists.length ? (
            lists.map((list, index) => {
              return <List key={index} list={list} />;
            })
          ) : (
            <h1>No lists yet :(</h1>
          )}
        </div>
      </div>
    </div>
  );
};
