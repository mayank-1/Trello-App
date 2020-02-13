import React, { Component } from "react";
import { connect } from "react-redux";
import Boards from "./components/Boards";

class App extends Component {
  state = {
    title: ""
  };

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <nav className="navbar shadow-sm navbar-light bg-light">
            <span className="navbar-brand mb-0 h1 text-info">
              <i className="fab fa-trello"></i> Trello
            </span>
            <button
              className="btn btn-outline-info my-2 my-sm-0"
              type="button"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fas fa-plus"></i> BOARD
            </button>
          </nav>
          <div
            className="modal fade create-new-board"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Create New Board
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      this.props.dispatch({
                        type: "CREATE_NEW_BOARD",
                        payload: this.state.title
                      });
                    }}
                  >
                    <div className="form-group">
                      <label htmlFor="boardTitle">Title</label>
                      <input
                        id="boardTitle"
                        className="form-control"
                        onChange={event =>
                          this.setState({ title: event.target.value })
                        }
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn form-control btn-primary"
                    >
                      CREATE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="allboards p-5">
          <Boards />
        </div>
      </div>
    );
  }
}

export default connect()(App);
