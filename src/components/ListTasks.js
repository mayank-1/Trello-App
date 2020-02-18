import React, { Component } from "react";
import { connect } from "react-redux";

class ListTasks extends Component {
  render() {
    console.log("PROPS HERE: ", this.props);
    return <div>Will List the tasks here</div>;
  }
}

const mapStateToProps = state => {
  console.log("STATE IN LIST TASKS: ", state);
  return state;
};

export default connect(mapStateToProps)(ListTasks);
