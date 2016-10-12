import React, { Component, PropTypes } from 'react';
import cssModules from '../lib/react_css_modules';
import styles from '../styles/input_text.css';

class Password extends Component {
  get value() {
    return this.innerInput.value;
  }

  set value(value) {
    this.innerInput.value = value;
  }

  render() {
    const {
      disabled,
      id,
      maxLength,
      max,
      min,
      name,
      pattern,
      placeholder,
      readOnly,
      required,
      size,
      step,
      value
    } = this.props;

    return (
      <input
        type="password"
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        max={max}
        min={min}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        size={size}
        step={step}
        value={value}
        ref={el => { this.innerInput = el; }}
      />
    );
  }
}

Password.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  maxLength: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  schema: PropTypes.object,
  size: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.any
};

export default cssModules(Password, styles);
