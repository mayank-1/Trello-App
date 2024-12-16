import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import ListTasks from "./ListTasks";
import MenuFilter from "./MenuFilter";

const BoardDetails = (props) => {
  const { id } = useParams(); // Extract the board ID from the route params
  const [taskName, setTaskName] = useState("");
  const [currentFilter, setCurrentFilter] = useState("PENDING");

  const currentBoard = props.boards.length > 0 ? props.boards[id] : null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentBoard) {
      props.dispatch({
        type: "ADD_NEW_TASK_IN_BOARD",
        payload: {
          taskName,
          boardId: id,
          taskStatus: "PENDING",
          comments: [],
        },
      });
      setTaskName(""); // Reset the task input field
    }
  };

  return (
    <div>
      <div className="row">
        <Link to="/">
          <div className="col-md-1 col-xs-1 m-3 text-info">
            <i className="fas fa-arrow-left"></i>
          </div>
        </Link>
        <div className="col-md-6 col-xs-6 mx-auto text-info mt-3">
          <h4 className="text-center">
            {currentBoard
              ? currentBoard.title
              : "NO BOARD FOUND PLEASE CREATE ONE"}
          </h4>
        </div>
      </div>
      {currentBoard ? (
        <div className="row mt-3">
          <div className="col-md-5 col-xs-8">
            <div className="col-md-10 col-xs-10 mx-auto">
              <form onSubmit={handleSubmit}>
                <h4 className="text-center">Create New Task</h4>
                <div className="form-group">
                  <input
                    id="task-name"
                    className="form-control"
                    onChange={(e) => setTaskName(e.target.value)}
                    type="text"
                    value={taskName}
                    placeholder="Enter task name"
                    required
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-info form-control"
                  value="ADD TASK"
                />
              </form>
            </div>
          </div>
          <div className="col-md-7 col-xs-8 align-self-center mx-auto m-2">
            <div className="row">
              <div className="col-md-4 ml-auto p-2 text-center">
                <MenuFilter filterBy={setCurrentFilter} />
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-10 col-xs-8 mx-auto overflow-auto"
                style={{ height: "600px" }}
              >
                <ListTasks filter={currentFilter} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-danger mt-4">
          Board not found. Please return to the home page and create a new
          board.
        </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(BoardDetails);
