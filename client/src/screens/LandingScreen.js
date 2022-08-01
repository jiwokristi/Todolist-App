import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTodos } from "../store/actions/todoAction";

import LogoComponent from "../components/LogoComponent";
import FormComponent from "../components/FormComponent";
import CardComponent from "../components/CardComponent";
import SpinnerComponent from "../components/SpinnerComponent";
import EmptyMessage from "../components/EmptyMessage";

export default function LandingScreen() {
  const { todos } = useSelector((state) => state.todos);
  const { isLoading } = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 min-h-screen min-w-screen first:pt-16 last:pb-16 flex flex-col">
        <LogoComponent />
        <FormComponent />
        <hr className="border-neutral-600 p-2 mb-12" />
        {isLoading && <SpinnerComponent />}
        {todos.length === 0 && !isLoading && <EmptyMessage />}
        {!isLoading &&
          todos.map((todo) => {
            return <CardComponent key={todo.id} todo={todo} />;
          })}
      </div>
    </>
  );
}
