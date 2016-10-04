import React, { Component, PropTypes } from 'react';

class TextArea extends Component {
  constructor() {
    super();
    this.refInnerInput = this.refInnerInput.bind(this);
  }

  componentDidMount() {
    this.innerInput.value = this.props.value;
  }

  get value() {
    return this.innerInput.value;
  }

  set value(value) {
    this.innerInput.value = value;
  }

  refInnerInput(ref) {
    this.innerInput = ref;
  }

  render() {
    const { name, required } = this.props;
    const props = {
      id: name,
      ref: this.refInnerInput,
      required
    };

    return (
      <textarea
        {...props}
      />
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string
};

export default TextArea;
