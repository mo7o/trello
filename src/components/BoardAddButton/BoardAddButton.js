import React from "react";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Textarea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList, addCard } from "../../actions";

import "./BoardAddButton.scss";

class BoardAddButton extends React.Component {
  state = {
    formHidden: true
  };

  showForm = () => {
    this.setState({
      formHidden: false
    });
  };

  hideForm = () => {
    this.setState({
      formHidden: true
    });
  };

  handleInputChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { content } = this.state;

    if (content) {
      this.setState({
        content: ""
      });

      dispatch(addList(content));
    }

    return;
  };

  handleAddCard = () => {
    const { dispatch, listId } = this.props;
    const { content } = this.state;

    if (content) {
      this.setState({
        content: ""
      });
      dispatch(addCard(listId, content));
    }
  };

  renderAddButton = () => {
    const { list } = this.props;
    const buttonType = list ? "Add another list" : "Add another card";

    return (
      <div
        onClick={this.showForm}
        className={
          "add-button " + (list ? "add-list-button" : "add-card-button")
        }
      >
        <Icon>add</Icon>
        <p>{buttonType}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";
    const buttonText = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card className="add-form-container">
          <Textarea
            className="text-area"
            placeholder={placeholder}
            autoFocus
            onBlur={this.hideForm}
            value={this.state.content}
            onChange={this.handleInputChange}
          />
        </Card>
        <div className="form-button-container">
          <Button
            className="form-button"
            variant="contained"
            onMouseDown={list ? this.handleAddList : this.handleAddCard} //used instead of onclick, because it will run before onBlur props and using onclick will not add list bcos of that
          >
            {buttonText}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formHidden ? this.renderAddButton() : this.renderForm();
  }
}

export default connect()(BoardAddButton);
