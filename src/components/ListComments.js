import React, { Component } from "react";
import { connect } from "react-redux";

class ListComments extends Component {
  render() {
    return (
      <div>
        {this.props.boards[this.props.selectedBoardID].tasks[
          this.props.taskIdToComment
        ].comments.map((item, index) => {
          return (
            <div key={index}>
              <p className="text-secondary">{item.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(ListComments);
