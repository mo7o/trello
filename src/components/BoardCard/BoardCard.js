import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Draggable } from "react-beautiful-dnd";

import "./BoardCard.scss";

const BoardCard = ({ content, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className="card-container">
            <CardContent className="card-inner">
              <Typography gutterBottom>{content}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default BoardCard;
