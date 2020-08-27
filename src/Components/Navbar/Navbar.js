import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import logo from "../../images/logo.png";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="header">
        <Link to="/">
          <img src={logo} alt="Logo" className="header__img" />
        </Link>
        <div className="header_search">
          <input type="text" className="header__searchinput" />
          <SearchIcon className="header_searchicon" />
        </div>
        <div className="header__nav">
          <Link to="/login" className="header_link">
            <div className="header__option">
              <span className="header_optionLinkOne">Hello Amr</span>
              <span className="header_optionLinkTwo">Sign In</span>
            </div>
          </Link>

          <Link to="/login" className="header_link">
            <div className="header__option">
              <span className="header_optionLinkOne">Return</span>
              <span className="header_optionLinkTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/login" className="header_link">
            <div className="header__option">
              <span className="header_optionLinkOne">Your</span>
              <span className="header_optionLinkTwo">Prime</span>
            </div>
          </Link>

          <Link to="/cart" className="header_link">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionLinkTwo header__basketCount">
                0
              </span>
            </div>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
