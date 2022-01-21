import "./App.css";

import TaskList from "./components/TaskList";

function App() {
  const pStyle = {
    marginBottom: "15px",
  };
  return (
    <div className="app">
      <header className="app-header">
        <h1>My Amazing To-do list App</h1>
        <p style={pStyle}>The most simple and amazing todo-list React app.</p>
        <TaskList />
      </header>
    </div>
  );
}

export default App;
