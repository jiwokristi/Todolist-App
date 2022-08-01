import { useDispatch } from "react-redux";
import { CheckmarkOutline, CloseOutline } from "react-ionicons";

import { deleteTodo, patchTodo } from "../store/actions/todoAction";

export default function CardComponent(props) {
  const { name, isToggled } = props.todo;

  const dispatch = useDispatch();

  const handleClick = (id) => dispatch(deleteTodo(id));

  const handlePatch = (id) => dispatch(patchTodo(id));

  return (
    <div className="mb-4 flex justify-center">
      <div className="bg-neutral-800 hover:bg-neutral-700 delay-150 duration-700 transition rounded-md drop-shadow-md w-1/2 h-24 flex justify-between">
        <div className="h-24 ml-4 flex flex-col justify-center">
          <h1
            className={`text-neutral-200 text-lg font-medium font-sans truncate ${
              isToggled ? "line-through decoration-red-800 decoration-4" : ""
            }`}
          >
            {name.length >= 50 ? `${name.slice(0, 50)}...` : name}
          </h1>
        </div>
        <div className="h-24 flex flex-col justify-center">
          <div className="flex inline-block">
            <CheckmarkOutline
              className="bg-emerald-500 hover:bg-emerald-400 hover:-translate-y-1 transform delay-150 duration-700 transition active:bg-emerald-600 rounded-full drop-shadow-md cursor-pointer p-1 mr-6"
              onClick={() => handlePatch(props.todo.id)}
            />
            <CloseOutline
              className="bg-red-800 hover:bg-red-700 hover:-translate-y-1 transform delay-150 duration-700 transition active:bg-red-900 rounded-full drop-shadow-md cursor-pointer p-1 mr-8"
              onClick={() => handleClick(props.todo.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
