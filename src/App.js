import React, { Component } from "react";
import { connect } from "react-redux";
import Boards from "./components/Boards";

// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardDetails from "./components/BoardDetails";

class App extends Component {
  state = {
    title: "",
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                              onSubmit={(e) => {
                                e.preventDefault();
                                this.props.dispatch({
                                  type: "CREATE_NEW_BOARD",
                                  payload: this.state.title,
                                });
                                this.setState({
                                  title: "",
                                });
                              }}
                            >
                              <div className="form-group">
                                <label htmlFor="boardTitle">Title</label>
                                <input
                                  id="boardTitle"
                                  className="form-control"
                                  value={this.state.title}
                                  onChange={(event) =>
                                    this.setState({ title: event.target.value })
                                  }
                                  placeholder="Enter Board Title"
                                  required
                                />
                              </div>
                              <button
                                type="submit"
                                className="btn form-control btn-info"
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
                </>
              }
            />
            <Route path="/board/:id" element={<BoardDetails />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
