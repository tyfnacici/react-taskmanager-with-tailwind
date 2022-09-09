import { React, useEffect, useCallback, useState, useRef } from "react";
import { db } from "../firebase";

//Veritabanından veri çekiliyor zaten fakat verilerin ekrana çıktısı verilemiyor gelen objeler dizide olmadığı için. Bunu arraya çevirip çıktı alabilirsin. Ek olarak:Firebasede firestorm veya realtime database kullanarak verileri silebilmeyi, düzenleyebilmeyi bir de taskın yanına tık atmak için kutu koy. bunu işaretleyince taskın üzeri çizilmiş olsun, veritabanında 0=>1 olsun en aşağıda düşsün.
const NewTask = (props) => {
  const headerRef = useRef("");
  const descRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const task = {
      header: headerRef.current.value,
      desc: descRef.current.value,
    };
    // fetch(
    //   "https://todo-list-37c01-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(task),
    //     headers: { "Content-Type": "application/json" },
    //   }
    // );
    const uuid = uid();
    set(ref(db, `${uuid}`), task);
  };

  const taskFetchHandler = useCallback(async (event) => {
    event.preventDefault();
    const response = fetch(
      "https://todo-list-37c01-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
    )
      .then(props.setIsLoading(1))
      .then((response) => response.json())
      .then(
        setTimeout(() => {
          props.setIsLoading(2);
        }, 1000)
      )
      .then((data) => props.setTasks(data.results))
      .catch(alert("An unexpected thing happen :("));
  });

  useEffect(() => {
    const response = fetch(
      "https://todo-list-37c01-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
    )
      .then(props.setIsLoading(1))
      .then((response) => response.json())
      .then(
        setTimeout(() => {
          props.setIsLoading(2);
        }, 1000)
      )
      .then((data) => console.log(data))
      .then((data) => props.setTasks(data));
  }, []);

  return (
    <form className="flex flex-col place-content-between space-y-3 p-6 bg-slate-800 text-white rounded-xl w-4/5 lg:w-4/5">
      <div className="flex flex-col">
        <label>Task Name</label>
        <input
          placeholder="Enter a task"
          className="border-2 border-orange-500 pl-3 py-3 rounded-xl text-black"
          type="text"
          ref={headerRef}
        />
      </div>
      <div className="flex flex-col">
        <label>Task Description</label>
        <input
          placeholder="Enter a task description"
          className="border-2 border-orange-500 pl-3 py-3 rounded-xl text-black"
          type="text"
          ref={descRef}
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          onClick={submitHandler}
          className="px-2 grow py-3.5 self-end bg-orange-500 rounded-xl hover:bg-white hover:text-orange-500"
        >
          Add task
        </button>
        <button
          onClick={taskFetchHandler}
          className="px-2 grow py-3.5 self-end bg-orange-500 rounded-xl hover:bg-white hover:text-orange-500"
        >
          Refresh
        </button>
      </div>
    </form>
  );
};

export default NewTask;
