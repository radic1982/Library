import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import './_buttonStyle.scss';

class ButtonComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
      this.handleClick = this.handleClick.bind(this);
      
    }

    handleClick() {
        
    }
  
    render() {
        //className={`btn ${this.props.customStyle}`}
        this.props.size;
        return ( 
            <div>
                <button className='btn hvr-grow' onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    } 
  }

  ButtonComponent.PropTypes = {
      customStyle: PropTypes.string,
      handleClick: PropTypes.func
  }

  export default ButtonComponent;