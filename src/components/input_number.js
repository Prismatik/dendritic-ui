import React, { Component, PropTypes } from 'react';

class Number extends Component {
  get value() {
    return parseInt(this.innerInput.value, 10);
  }

  set value(value) {
    this.innerInput.value = value;
  }

  render() {
    const { name } = this.props;
    return <input id={name} type="number" />;
  }
}

Number.propTypes = {
  name: PropTypes.string
};

export default Number;
