import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./BoardCard.scss";

const BoardCard = ({ content }) => {
  return (
    <Card className="card-container">
      <CardContent>
        <Typography gutterBottom>{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default BoardCard;
