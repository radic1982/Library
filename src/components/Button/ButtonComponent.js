import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import './_buttonStyle.scss';

class ButtonComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      
    }

    handleClick() {
       this.props.handleClick(e); 
    }
  
    render() {
        //className={`btn ${this.props.customStyle}`}
        // package.json ide u scripts "prepare": "npm run build", "build": "webpack src/index.js dist/index.js",
        this.props.size;
        return ( 
            <div>
                <button className='btn hvr-grow' onClick={this.handleClick}>{this.props.label}</button>
            </div>
        )
    } 
  }

  ButtonComponent.PropTypes = {
      customStyle: PropTypes.string,
      handleClick: PropTypes.func,
      label: PropTypes.string.isRequired
  }

  export default ButtonComponent;