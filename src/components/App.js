import React, { Component } from "react";
import BoardList from "./BoardList/BoardList";
import { connect } from "react-redux";

import "./App.scss";

class App extends Component {
  render() {
    const { lists } = this.props;

    return (
      <div>
        <h1>hello</h1>
        <div className="list-container">
          {lists.map(list => (
            <BoardList title={list.title} cards={list.cards} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
