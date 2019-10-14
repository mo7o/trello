import React from "react";
import BoardCard from "../BoardCard/BoardCard";
import BoardAddButton from "../BoardAddButton/BoardAddButton";
import { Droppable } from "react-beautiful-dnd";

import "./BoardList.scss";

const BoardList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="container"
        >
          <p className="board-list-title">{title}</p>
          {cards.map((card, index) => (
            <BoardCard
              key={card.id}
              index={index}
              content={card.content}
              id={card.id}
            />
          ))}
          <BoardAddButton listId={listId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default BoardList;
