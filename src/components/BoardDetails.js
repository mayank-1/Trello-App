import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class BoardDetails extends Component {
  state = {
    taskName: "",
    boardId: ""
  };
  render() {
    return (
      <div>
        <div className="row">
          <Link to="/">
            <div className="col-md-1 align-self-start m-3 text-info">
              <i className="fas fa-arrow-left"></i>
            </div>
          </Link>
          <div className="col-md-6 mx-auto align-self-center text-primary mt-3">
            <h4 className="text-center">
              {this.props.boards.length > 0
                ? this.props.boards[this.props.match.params.id].title
                : "NO BOARDS FOUND PLEASE CREATE ONE"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mx-auto bg-info">
            <form
              onSubmit={e => {
                e.preventDefault();
                this.props.dispatch({
                  type: "ADD_NEW_TASK_IN_BOARD",
                  payload: {
                    taskName: this.state.taskName,
                    boardId: this.props.match.params.id
                  }
                });
              }}
            >
              <div className="form-group">
                <label htmlFor="task-name">Task Name</label>
                <input
                  id="task-name"
                  className="form-control"
                  onChange={e => this.setState({ taskName: e.target.value })}
                  type="text"
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary form-control"
                value="ADD TASK"
              />
            </form>
          </div>
          <div className="col-md-6 mx-auto bg-warning">View Task with</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("DATA FROM STORE: ", state);
  return state;
};

export default connect(mapStateToProps)(BoardDetails);
