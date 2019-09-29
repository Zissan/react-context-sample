import React, { useReducer } from "react";
import types from "./actions";

function todoReducer(state, action) {
  switch (action.type) {
    case types.ADD:
      return [...state, ...[new Date()]];

    default:
      return state;
  }
}

export const Todos = props => {
  const [state, dispatch] = useReducer(
    todoReducer,
    props.todos ? props.todos : []
  );
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: types.ADD });
        }}
      >
        Add
      </button>
      <div>
        {state.map((todo, idx) => {
          return (
            <div key={idx} className={"todo"}>
              {todo.toString()}
            </div>
          );
        })}
      </div>
    </>
  );
};
