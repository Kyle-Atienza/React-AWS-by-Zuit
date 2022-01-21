import React from "react";

function Task({ taskName, index }) {
  return (
    <li className="tasks-item" key={index}>
      {taskName}
    </li>
  );
}

export default Task;
