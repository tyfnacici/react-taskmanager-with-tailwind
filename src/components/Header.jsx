import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row text-center space-x-2 text-xl my-3 text-white font-bold px-3 rounded-xl py-2 w-4/5 lg:w-4/5 bg-slate-800">
      <h1>ToDo List using React.JS</h1>{" "}
      <p>
        made by{" "}
        <a
          className="text-orange-400 hover:text-orange-700"
          href="http://tyfnacici.com"
        >
          @tyfnacici
        </a>
      </p>
    </div>
  );
};

export default Header;
