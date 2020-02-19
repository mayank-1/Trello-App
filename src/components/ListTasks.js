import React, { Component } from "react";
import { connect } from "react-redux";

class ListTasks extends Component {
  render() {
    console.log("PROPS ", this.props);

    return (
      <div>
        {this.props.boards[this.props.selectedBoardID].tasks.length > 0 ? (
          <div>Tasks FOUND</div>
        ) : (
          <div
            className="card bg-light mx-auto my-auto mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header text-center">
              <i className="far fa-smile display-4"></i>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">
                {/* {this.props.items.length} Todo's Found */}
              </h5>
              <p className="card-text text-muted">
                You don't have any task, Enjoy!
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE IN LIST TASKS: ", state);

  return state;
};

export default connect(mapStateToProps)(ListTasks);
