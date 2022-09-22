import { React, useState } from "react";

let i = 0;

const NewTask = (props) => {
  const [header, setHeader] = useState("");
  const [desc, setDesc] = useState("");

  const newTaskHandler = (event) => {
    event.preventDefault();
    i++;
    const newTask = {
      id: i.toString(),
      header: header,
      desc: desc,
    };
    props.taskHandler(newTask);
    setHeader("");
    setDesc("");
  };

  return (
    <form
      onSubmit={newTaskHandler}
      className="flex flex-col place-content-between space-y-3 p-6 bg-slate-800 text-white rounded-xl w-4/5 lg:w-4/5"
    >
      <div className="flex flex-col">
        <label>Task Name</label>
        <input
          placeholder="Enter a task"
          className="border-2 border-orange-500 pl-3 py-3 rounded-xl text-black"
          type="text"
          onChange={(e) => setHeader(e.target.value)}
          value={header}
        />
      </div>
      <div className="flex flex-col">
        <label>Task Description</label>
        <input
          placeholder="Enter a task description"
          className="border-2 border-orange-500 pl-3 py-3 rounded-xl text-black"
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="px-2 grow py-3.5 self-end bg-orange-500 rounded-xl hover:bg-white hover:text-orange-500"
        >
          Add task
        </button>
      </div>
    </form>
  );
};

export default NewTask;
