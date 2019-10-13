import React from "react";
import BoardCard from "../BoardCard/BoardCard";

import "./BoardList.scss";

const BoardList = ({ title, cards }) => {
  return (
    <div className="container">
      <h4>{title}</h4>
      {cards.map(card => (
        <BoardCard content={card.content} />
      ))}
    </div>
  );
};

export default BoardList;
