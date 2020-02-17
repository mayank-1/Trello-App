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

    case "ADD_NEW_TASK_IN_BOARD":
      let taskCopy = stateCopy.boards[action.payload.boardId].tasks;
      let updatedTasks = [...taskCopy, action.payload];
      let thisBoard = {
        title: stateCopy.boards[action.payload.boardId].title,
        tasks: updatedTasks
      };

      stateCopy.boards[action.payload.boardId] = thisBoard;
      console.log("NEW STATE AFTER ADDING TASK IN BOARD", stateCopy);
      return stateCopy;
    default:
      return stateCopy;
  }
};

const store = createStore(trelloReducer);

export default store;
