import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./_checkBoxStyle.scss" 

class CheckBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isChecked: props.isChecked,
      };

      this.handleChange = this.handleChange.bind(this);
    }
    handleChange  ()  {
        
       this.setState({
        isChecked: !this.state.isChecked,
      }); 
    }
    render() {
      return (
          <form>
            <label className="checkBox">{this.props.label}
            <input type="checkbox"
                checked={this.state.isChecked}
                onChange={this.handleChange}
            />
            <span className="checkmark"></span>
            </label>
          </form>
      );
    }
  }

  CheckBox.defaultProps = {
    isChecked: true
  };

  CheckBox.propTypes = {
    checked: PropTypes.bool,
    handleChange: PropTypes.func,
    label: PropTypes.string.isRequired,
    type: PropTypes.string
  };

  export default CheckBox;
  