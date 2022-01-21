import "./App.css";

const tasks = [
  "Follow Edukasyon.ph on Facebook",
  "Follow AWS Skilab Pilipinas on Facebook",
  "Follow Zuitt Coding Bootcamp on Facebook",
];

function Task({ taskName, index }) {
  return (
    <li className="tasks-item" key={index}>
      {taskName}
    </li>
  );
}

function TasksList() {
  const task = tasks.map((task, index) => {
    return <Task taskName={task} key={index} />;
  });
  return (
    <div className="">
      <input type="text" className="task-input" />
      <ul>{task}</ul>
    </div>
  );
}

function App() {
  const pStyle = {
    marginBottom: "15px",
  };
  return (
    <div className="app">
      <header className="app-header">
        <h1>My Amazing To-do list App</h1>
        <p style={pStyle}>The most simple and amazing todo-list React app.</p>
        <TasksList />
      </header>
    </div>
  );
}

export default App;
