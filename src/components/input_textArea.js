import React, { Component, PropTypes } from 'react';

class TextArea extends Component {
  constructor() {
    super();
    this.refInnerInput = this.refInnerInput.bind(this);
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
    const { name, required, placeholder, value } = this.props;
    const props = {
      id: name,
      name,
      ref: this.refInnerInput,
      required,
      placeholder,
      defaultValue: value
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
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextArea;
