import React, { useReducer } from "react";
import { data } from "../data";

const defaultState = {
  people: data,
  isLoading: false,
};
const CLEAR_LIST = "CLEAR_LIST";
const REMOVE_ITEM = "REMOVE-ITEM";
const RESET_LIST = "RESET_LIST";
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = people.filter((person) => person.id !== id);
    return { ...state, people: newPeople };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({
      type: REMOVE_ITEM,
    });
  };
  const clearList = () => {
    dispatch({
      type: CLEAR_LIST,
    });
  };
  const resetList = () => {
    dispatch({
      type: RESET_LIST,
    });
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
