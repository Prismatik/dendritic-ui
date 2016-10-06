import React, { Component, PropTypes } from 'react';

class TextArea extends Component {
  get value() {
    return this.innerInput.value;
  }

  set value(value) {
    this.innerInput.value = value;
  }

  render() {
    const { name, required, placeholder, value } = this.props;

    return (
      <textarea
        id={name}
        name={name}
        ref={ref => { this.innerInput = ref; }}
        required={required}
        placeholder={placeholder}
        defaultValue={value}
      />
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextArea;
