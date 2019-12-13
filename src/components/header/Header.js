import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Header.css'

class Header extends Component {
  static defaultProps = {
    onNewRecipe() {}
  }

  static propTypes = {
    onNewRecipe: PropTypes.func
  }

  render() {
    return (
      <div className="nav-header">
        <span className="nav-title">
          <p>Recipe App</p>
        </span>
        <span className="nav-menu">
          <button 
            type='button' 
            className="nav-item" 
            onClick={this.props.onNewRecipe}
          >
            New Recipe
          </button>
          <button 
            type='button' 
            className="nav-item"
          >
            Home
          </button>
          <button 
            type='button' 
            className="nav-item"
          >
            About
          </button>
          <button 
            type='button' 
            className="nav-item"
          >
            Contact Us
          </button>
        </span>
      </div>
    );
  }
}

export default Header;
