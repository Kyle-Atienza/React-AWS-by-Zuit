import './App.css';

function TasksList() {
  return(
    <ul>
      <li className='tasks-item'>Follow Edukasyon.ph on Facebook</li>
      <li className='tasks-item'>Follow AWS Skilab Pilipinas on Facebook</li>
      <li className='tasks-item'>Follow Zuitt Coding Bootcamp on Facebook</li>
    </ul>
  );
}

function App() {
  const pStyle = {
    "marginBottom": "15px"
  }
  return (
    <div className="app">
      <header className='app-header'>
        <h1>My Amazing To-do list App</h1>
        <p style={pStyle}>The most simple and amazing todo-list React app.</p>
        <TasksList />
      </header>
    </div>
  );
}

export default App;
