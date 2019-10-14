import React from "react";

import FilterListOutlinedIcon from "@material-ui/icons/FilterListOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import "./Menu.scss";

class Menu extends React.Component {
  state = {
    menuHidden: true,
    showColorOptions: false
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

  showColorOptions = () => {
    this.setState({
      showColorOptions: true
    });
  };

  hideColorOptions = () => {
    this.setState({
      showColorOptions: false
    });
  };

  bgBlue = () => {
    document.body.classList.add("bg-blue");
    document.body.classList.remove("bg-green");
    document.body.classList.remove("bg-red");
    document.body.classList.remove("bg-orange");
    document.body.classList.remove("bg-pink");
    document.body.classList.remove("bg-lightblue");
  };

  bgRed = () => {
    document.body.classList.add("bg-red");
    document.body.classList.remove("bg-green");
    document.body.classList.remove("bg-blue");
    document.body.classList.remove("bg-orange");
    document.body.classList.remove("bg-pink");
    document.body.classList.remove("bg-lightblue");
  };

  bgGreen = () => {
    document.body.classList.add("bg-green");
    document.body.classList.remove("bg-blue");
    document.body.classList.remove("bg-red");
    document.body.classList.remove("bg-orange");
    document.body.classList.remove("bg-pink");
    document.body.classList.remove("bg-lightblue");
  };

  bgOrange = () => {
    document.body.classList.add("bg-orange");
    document.body.classList.remove("bg-blue");
    document.body.classList.remove("bg-red");
    document.body.classList.remove("bg-green");
    document.body.classList.remove("bg-pink");
    document.body.classList.remove("bg-lightblue");
  };

  bgPink = () => {
    document.body.classList.add("bg-pink");
    document.body.classList.remove("bg-blue");
    document.body.classList.remove("bg-red");
    document.body.classList.remove("bg-orange");
    document.body.classList.remove("bg-green");
    document.body.classList.remove("bg-lightblue");
  };

  bgLightblue = () => {
    document.body.classList.add("bg-lightblue");
    document.body.classList.remove("bg-blue");
    document.body.classList.remove("bg-red");
    document.body.classList.remove("bg-orange");
    document.body.classList.remove("bg-pink");
    document.body.classList.remove("bg-green");
  };

  renderColorOptions() {
    return (
      <div className="color-options-container">
        <span onClick={this.hideColorOptions}>&#10005;</span>
        <div className="color-options-group">
          <div onClick={this.bgBlue} className="color-option bg-blue"></div>
          <div onClick={this.bgRed} className="color-option bg-red"></div>
          <div onClick={this.bgGreen} className="color-option bg-green"></div>
          <div onClick={this.bgOrange} className="color-option bg-orange"></div>
          <div onClick={this.bgPink} className="color-option bg-pink"></div>
          <div
            onClick={this.bgLightblue}
            className="color-option bg-lightblue"
          ></div>
        </div>
      </div>
    );
  }

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

        {this.state.showColorOptions ? (
          this.renderColorOptions()
        ) : (
          <div
            onClick={this.showColorOptions}
            className="change-background sub-head"
          >
            <ColorLensOutlinedIcon className="menu-icons" />
            <p>Change Background</p>
          </div>
        )}

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
