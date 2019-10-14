import React from "react";
import Menu from "../Menu/Menu";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

import "./BoardMenu.scss";

class BoardMenu extends React.Component {
  state = {
    favoriteBoard: false
  };

  markFavorite = () => {
    if (this.state.favoriteBoard == false) {
      this.setState({
        favoriteBoard: true
      });
    } else {
      this.setState({
        favoriteBoard: false
      });
    }
  };

  render() {
    return (
      <div className="board-menu-container">
        <h3>
          Things To Get Done
          <StarBorderOutlinedIcon
            className={this.state.favoriteBoard ? "favorite" : ""}
            onClick={this.markFavorite}
            style={{
              position: "absolute",
              marginLeft: 10,
              fontSize: 20
            }}
          />
        </h3>

        <p>
          <span>Team Awesome</span>
        </p>

        <p>
          <span>Team Visible</span>
        </p>

        <p>
          <span>Invite</span>
        </p>

        <span className="menu-toggle">
          <Menu />
        </span>
      </div>
    );
  }
}

export default BoardMenu;
