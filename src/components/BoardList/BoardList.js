import React from "react";
import BoardCard from "../BoardCard/BoardCard";
import BoardAddButton from "../BoardAddButton/BoardAddButton";

import "./BoardList.scss";

const BoardList = ({ title, cards, listId }) => {
  return (
    <div className="container">
      <h4>{title}</h4>
      {cards.map(card => (
        <BoardCard key={card.id} content={card.content} />
      ))}
      <BoardAddButton listId={listId} />
    </div>
  );
};

export default BoardList;
