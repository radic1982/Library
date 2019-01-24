import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./_textInputStyle.scss"

class TextInput extends Component {
    constructor() {
      super();
  
      this.state = {
        textValue: ""
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({ textValue: event.target.value });
    }

    render() {
        const  {textInput}  = this.state.textValue;
        return (
          <form action="">
            <div className="input-field">
              <input type="text" id="name" value={this.state.textValue} onChange={this.handleChange} required />
              <label for="name">{this.props.label}</label>
            </div>
          </form>
        );
      }
    }
    TextInput.propTypes = {
      label: PropTypes.string.isRequired,
      text: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.string,
      textValue: PropTypes.string,
      handleChange: PropTypes.func
    };


    
    export default TextInput;