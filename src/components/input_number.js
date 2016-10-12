import React, { Component, PropTypes } from 'react';

class Number extends Component {
  get value() {
    return parseFloat(this.innerInput.value);
  }

  set value(value) {
    this.innerInput.value = value;
  }

  render() {
    const { name, value, placeholder, onChange } = this.props;

    return (
      <input
        id={name}
        onChange={onChange}
        placeholder={placeholder}
        ref={(ref) => { this.innerInput = ref; }}
        type="number"
        value={value}
      />
    );
  }
}

Number.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.number
};

export default Number;
