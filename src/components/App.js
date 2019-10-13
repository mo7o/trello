import React, { Component } from "react";
import { connect } from "react-redux";
import BoardList from "./BoardList/BoardList";
import BoardAddButton from "./BoardAddButton/BoardAddButton";
import { DragDropContext } from "react-beautiful-dnd";
import { reOrder } from "../actions";

import "./App.scss";

class App extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      reOrder(
        source.droppableId,
        source.index,
        destination.droppableId,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
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
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
