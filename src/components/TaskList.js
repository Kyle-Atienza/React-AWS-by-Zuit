import React, { useState } from "react";

import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([
    "Follow Edukasyon.ph on Facebook",
    "Follow AWS Skilab Pilipinas on Facebook",
    "Follow Zuitt Coding Bootcamp on Facebook",
  ]);

  const addNewTask = (event) => {
    setTasks([event.target.value, ...tasks]);
    event.target.value = "";
  };

  return (
    <div className="">
      <input
        type="text"
        className="task-input"
        placeholder="Create a new Task"
        onBlur={addNewTask}
      />
      <ul>
        {tasks.map((task, index) => {
          return <Task taskName={task} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default TaskList;
