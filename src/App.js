import NewTask from "./components/NewTask.jsx";
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import { db } from "./firebase.js";
import { uid } from "uid";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(0);

  return (
    <div className="h-screen flex flex-col items-center bg-slate-900 px-16">
      <Header />
      <NewTask tasks={tasks} setIsLoading={setIsLoading} setTasks={setTasks} />
      {isLoading === 1 && (
        <p className="text-orange-600 text-xl pt-10">
          Loading tasks from database...
        </p>
      )}
      {/* {isLoading === 2 && tasks.length === 0 && (
        <p className="text-orange-600 text-xl pt-10">No tasks found</p>
      )} */}
      {/* {isLoading === 2 &&
        loadedTasks.map((task) => (
          <Tasks setIsLoading={setIsLoading} task={task} />
        ))} */}
      <Tasks />
    </div>
  );
}

export default App;
