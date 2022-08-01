import { useState } from "react";
import { useDispatch } from "react-redux";

import { postTodo } from "../store/actions/todoAction";

export default function FormComponent() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postTodo({ name }));
    setName("");
  };

  return (
    <form className="p-2 mb-12" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-neutral-800 rounded-md drop-shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 delay-150 duration-700 transition text-neutral-200 w-1/3 h-12 p-3.5"
        placeholder="E.g. Build a web app"
        value={name}
        onChange={(e) => {
          let val = e.target.value;
          setName(val);
        }}
      />
      <button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-400 hover:text-neutral-800 hover:-translate-y-1 transform delay-150 duration-700 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 active:bg-emerald-600 rounded-md drop-shadow-md uppercase tracking-wider text-neutral-900 text-sm font-semibold w-16 h-12 p-2 ml-4"
      >
        Save
      </button>
    </form>
  );
}
