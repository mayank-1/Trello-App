import { createStore } from "redux";

let initialState = {};

const trelloReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    default:
      return stateCopy;
  }
};

const store = createStore(trelloReducer);

export default store;
