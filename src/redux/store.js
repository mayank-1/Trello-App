import { createStore } from "redux";

let initialState = {
  boards: [],
  selectedBoardID: ""
};

const trelloReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "CREATE_NEW_BOARD":
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
      return stateCopy;
    case "SET_CURRENT_SELECTED_BOARD":
      stateCopy = {
        boards: [...stateCopy.boards],
        selectedBoardID: action.payload
      };
      return stateCopy;
    default:
      return stateCopy;
  }
};

const store = createStore(trelloReducer);

export default store;
