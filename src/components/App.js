import React, { Component } from "react";
import { connect } from "react-redux";
import BoardList from "./BoardList/BoardList";
import BoardAddButton from "./BoardAddButton/BoardAddButton";
import { DragDropContext } from "react-beautiful-dnd";

import "./App.scss";

class App extends Component {
  render() {
    const { lists } = this.props;

    return (
      <div>
        <h1>hello</h1>
        <div className="list-container">
          {lists.map(list => (
            <BoardList
              listId={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <BoardAddButton list />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
