import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Boards extends Component {
  render() {
    return (
      <div className="d-flex flex-wrap">
        {this.props.boards.length > 0 ? (
          this.props.boards.map((item, index) => (
            <Link
              to={`/board/${index}`}
              key={index}
              style={{ textDecoration: "none" }}
              onClick={() =>
                this.props.dispatch({
                  type: "SET_CURRENT_SELECTED_BOARD",
                  payload: index
                })
              }
            >
              <div className="card m-2 shadow-sm" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title text-center">{item.title}</h5>
                  <div className="text-center display-4">
                    {item.tasks.length}
                  </div>
                  <p className="text-center">Tasks</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div
            className="card mx-auto mt-5 shadow-sm border-info mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header text-center">CREATE A NEW BOARD</div>
            <div className="card-body text-info">
              <h5 className="card-title display-4 text-center">0</h5>
              <p className="card-text text-center">BOARDS FOUND</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Boards);
