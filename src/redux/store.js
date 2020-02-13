import { createStore } from "redux";

let initialState = {
  boards: []
};

const trelloReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case "CREATE_NEW_BOARD":
      console.log("DATA FOR NEW BOARD: ", action);
      let boardItem = {
        title: action.payload,
        tasks: []
      };
      stateCopy = { boards: [...stateCopy.boards, boardItem] };
      return stateCopy;
    default:
      return stateCopy;
  }
};

const store = createStore(trelloReducer);

export default store;
