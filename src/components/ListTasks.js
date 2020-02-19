import React, { Component } from "react";
import { connect } from "react-redux";
import ListComments from "./ListComments";

class ListTasks extends Component {
  state = {
    commentTitle: []
  };

  handleCommentChange = (e, index) => {
    let comments = [...this.state.commentTitle];
    comments[index] = e.target.value;
    this.setState({ commentTitle: comments });
  };
  render() {
    return (
      <div>
        {this.props.boards.length > 0 ? (
          this.props.boards[this.props.selectedBoardID].tasks.map(
            (item, index) => {
              return (
                <div key={index} className="card shadow mt-2 border-primary">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="card-title">{item.taskName}</h5>
                      </div>
                      <div className="col-md-4 ml-auto">
                        DROPDOWN FOR TASK STATUS
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 text-info">
                        <i className="fas fa-comments "></i>{" "}
                        {
                          this.props.boards[this.props.selectedBoardID].tasks[
                            index
                          ].comments.length
                        }
                      </div>
                    </div>
                    <div className="card-text comment-form mt-1">
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          this.props.dispatch({
                            type: "ADD_COMMENT_FOR_TASK",
                            payload: {
                              title: this.state.commentTitle,
                              taskId: index
                            }
                          });

                          let comments = [...this.state.commentTitle];
                          comments[index] = "";
                          this.setState({
                            commentTitle: comments
                          });
                        }}
                      >
                        <input
                          className="form-control"
                          placeholder="Type your comment"
                          type="text"
                          value={this.state.commentTitle[index]}
                          onChange={
                            e => {
                              this.handleCommentChange(e, index);
                            }
                            //this.setState({ commentTitle: e.target.value })
                          }
                          required
                        />
                        <input
                          type="submit"
                          className="btn btn-danger"
                          style={{ visibility: "hidden" }}
                          value="ADD COMMENT"
                        />
                      </form>
                    </div>
                    <div className="list-comments">
                      <ListComments taskIdToComment={index} />
                    </div>
                  </div>
                </div>
              );
            }
          )
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
  return state;
};

export default connect(mapStateToProps)(ListTasks);
