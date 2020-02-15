import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class BoardDetails extends Component {
  render() {
    console.log(
      "Lets show the details for Board with ID: ",
      this.props.match.params.id
    );
    console.log(
      "TITLE OF PARTICULAR BOARD: ",
      this.props.boards[this.props.match.params.id]
    );
    return (
      <div>
        <div className="row">
          <Link to="/">
            <div className="col-md-1 align-self-start m-3 text-info">
              <i className="fas fa-arrow-left"></i>
            </div>
          </Link>
          <div className="col-md-6 mx-auto align-self-center text-primary mt-3">
            <h4>
              {this.props.boards.length > 0
                ? this.props.boards[this.props.match.params.id].title
                : "NO BOARDS FOUND PLEASE CREATE ONE"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mx-auto bg-info">New task form</div>
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
