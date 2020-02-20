import React, { Component } from "react";
import { connect } from "react-redux";

class MenuFilter extends Component {
  state = {
    filterBtnValue: "Filter Todo"
  };
  filter(event) {
    //this.props.filterBy(event);
    //this.setState({ filterBtnValue: event });
    this.props.dispatch({
      type: "SET_TASKS_FILTER",
      payload: event
    });
  }
  render() {
    return (
      <div className="btn-group dropdown shadow-sm">
        <button
          type="button"
          className="btn btn-light border dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.props.currentFilter}
        </button>
        <div className="dropdown-menu">
          <button
            className="dropdown-item"
            onClick={() => this.filter("PENDING")}
          >
            PENDING
          </button>
          <button
            className="dropdown-item"
            onClick={() => this.filter("IN-PROGRESS")}
          >
            IN-PROGRESS
          </button>
          <button className="dropdown-item" onClick={() => this.filter("DONE")}>
            DONE
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(MenuFilter);
