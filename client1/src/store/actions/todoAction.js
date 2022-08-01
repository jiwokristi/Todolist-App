import toast from "react-hot-toast";

import { FETCH_TODOS } from "./actionTypes";
import { setLoadingAction } from "./loadingAction";

const fetchGetAction = (payload) => {
  return {
    type: FETCH_TODOS,
    payload,
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/")
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            const { message } = JSON.parse(text);
            throw message;
          });
        } else {
          return res.json();
        }
      })
      .then((data) => dispatch(fetchGetAction(data)))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoadingAction(false)));
  };
};

export const postTodo = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            const { message } = JSON.parse(text);
            throw message;
          });
        } else {
          return res.json();
        }
      })
      .then(() => dispatch(fetchTodos()))
      .catch((err) =>
        toast.error(err, {
          position: "top-right",
          className: "bg-neutral-700 text-neutral-200",
        })
      );
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/${id}/delete`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            const { message } = JSON.parse(text);
            throw message;
          });
        } else {
          return res.json();
        }
      })
      .then(() => dispatch(fetchTodos()))
      .catch((err) => console.log(err));
  };
};

export const patchTodo = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/${id}/patch`, {
      method: "PATCH",
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            const { message } = JSON.parse(text);
            throw message;
          });
        } else {
          return res.json();
        }
      })
      .then(() => dispatch(fetchTodos()))
      .catch((err) => console.log(err));
  };
};
