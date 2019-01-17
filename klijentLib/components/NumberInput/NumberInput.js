import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./_numberInputStyle.scss"

class NumberInput extends Component {
    constructor() {
      super();
  
      this.state = {
        numValue: ""
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({ numValue: event.target.value });
    }

    render() {
        const { num } = this.state;
        return (
          <form action="">
            <div className="input-field">
              <input type="number" id="name" min="0" max="99" value={this.state.numValue} onChange={this.handleChange} required />
              <label htmlFor="name">Izvolite uneti broj:</label>
              
            </div>
          </form>
        );
      }
    }

    NumberInput.defaultProps = {
        numValue: 0
      };

    NumberInput.propTypes = {
      id: PropTypes.string,
      label: PropTypes.string,
      text: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.number,
      numValue: PropTypes.number,
      handleChange: PropTypes.func
    };


    
    export default NumberInput;