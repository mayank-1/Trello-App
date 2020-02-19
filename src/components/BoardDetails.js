import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ListTasks from "./ListTasks";
import MenuFilter from "./MenuFilter";

class BoardDetails extends Component {
  state = {
    taskName: "",
    currentFilter: "PENDING"
  };

  render() {
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
              {this.props.boards.length > 0
                ? this.props.boards[this.props.match.params.id].title
                : "NO BOARD FOUND PLEASE CREATE ONE"}
            </h4>
          </div>
        </div>
        {this.props.boards.length > 0 ? (
          <div className="row mt-3">
            <div className="col-md-5 col-xs-8 ">
              <div className="col-md-10 col-xs-10 mx-auto">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    this.props.dispatch({
                      type: "ADD_NEW_TASK_IN_BOARD",
                      payload: {
                        taskName: this.state.taskName,
                        boardId: this.props.match.params.id,
                        taskStatus: "PENDING",
                        comments: []
                      }
                    });
                    this.setState({
                      taskName: ""
                    });
                  }}
                >
                  <h4 className="text-center">Create New Task</h4>
                  <div className="form-group">
                    <input
                      id="task-name"
                      className="form-control"
                      onChange={e =>
                        this.setState({ taskName: e.target.value })
                      }
                      type="text"
                      value={this.state.taskName}
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
                  <MenuFilter
                    filterBy={filter =>
                      this.setState({ currentFilter: filter })
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-10 col-xs-8 mx-auto overflow-auto"
                  style={{ height: "600px" }}
                >
                  <ListTasks />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("DATA FROM STORE: ", state);
  return state;
};

export default connect(mapStateToProps)(BoardDetails);
