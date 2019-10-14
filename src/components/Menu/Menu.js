import React from "react";

import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import "./Menu.scss";

class Menu extends React.Component {
  state = {
    menuHidden: true
  };

  showMenu = () => {
    this.setState({
      menuHidden: false
    });
  };

  hideMenu = () => {
    this.setState({
      menuHidden: true
    });
  };

  renderMenu() {
    return (
      <div className="menu-container">
        <span onClick={this.hideMenu}>&#10005;</span>
        <div className="menu-header">
          <p>Menu</p>
        </div>
        <div className="members">
          <div className="img-container">
            <img src="https://randomuser.me/api/portraits/men/71.jpg" alt="" />
            <img
              src="https://randomuser.me/api/portraits/women/82.jpg"
              alt=""
            />
            <img src="https://randomuser.me/api/portraits/women/6.jpg" alt="" />
            <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="" />
          </div>

          <div className="member-invite sub-head">
            <PersonAddOutlinedIcon className="menu-icons" />
            <p>Invite...</p>
          </div>
        </div>

        <div className="change-background sub-head">
          <ColorLensOutlinedIcon className="menu-icons" />
          <p>Change Background</p>
        </div>

        <div className="filter-card sub-head">
          <FilterListOutlinedIcon className="menu-icons" />
          <p>Filter Cards</p>
        </div>
      </div>
    );
  }

  render() {
    return this.state.menuHidden ? (
      <p onClick={this.showMenu} className="show-menu-icon">
        &#8226;&#8226;&#8226; &nbsp; Show Menu
      </p>
    ) : (
      this.renderMenu()
    );
  }
}

export default Menu;
