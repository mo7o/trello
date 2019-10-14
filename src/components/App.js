import React, { Component } from "react";
import { connect } from "react-redux";
import BoardList from "./BoardList/BoardList";
import BoardAddButton from "./BoardAddButton/BoardAddButton";
import BoardMenu from "./BoardMenu/BoardMenu";
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
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;

    return (
      <div>
        <BoardMenu />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
