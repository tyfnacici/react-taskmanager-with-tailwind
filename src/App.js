import NewTask from "./components/NewTask.jsx";
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import { React, useState } from "react";
function App() {
  const [tasks, setTask] = useState([]);
  const taskHandler = (task) => {
    setTask((prevState) => [...prevState, task]);
    console.log(tasks);
  };
  return (
    <div className="h-screen flex flex-col items-center bg-slate-900 px-16">
      <Header />
      <NewTask taskHandler={taskHandler} tasks={tasks} />
      {tasks.map((task) => {
        return <Tasks key={task.id} header={task.header} desc={task.desc} />;
      })}
    </div>
  );
}

export default App;
