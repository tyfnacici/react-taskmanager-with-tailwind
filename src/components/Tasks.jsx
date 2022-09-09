import { React, useState } from "react";
import { motion } from "framer-motion";

const Tasks = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      transition={{ layout: { duration: 0.1 } }}
      className="text-white bg-slate-800 flex-col lg:flex-row mt-3 p-4 flex place-content-between space-x-3 rounded-xl w-4/5 lg:w-4/5"
    >
      <motion.div
        layout="position"
        className="lg:text-left text-center py-6 lg:py-0"
      >
        <h1 className="text-3xl text-orange-500">{props.header}</h1>
        {!isOpen && props.isLoading !== 1 && <p>Click to expand</p>}
        {isOpen && <p>{props.desc}</p>}
      </motion.div>
      {props.isLoading !== 1 && (
        <motion.div layout="position" className="self-center flex space-x-3">
          <button className="lg:px-2 px-4 py-4 lg:py-2 rounded-xl hover:bg-white border-2 hover:text-green-500 border-green-500 bg-green-500 text-white">
            Edit Task
          </button>
          <button className="lg:px-2 lg:py-2 px-4 py-4 rounded-xl hover:bg-white border-2 hover:text-red-500 border-red-500 bg-red-500 text-white">
            Delete
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Tasks;
