import React, { Component, PropTypes } from 'react';

class Radio extends Component {
  get value() {
    return this.innerInput.value;
  }

  set value(value) {
    this.innerInput = value;
  }

  refInnerInput(ref) {
    this.innerInput = ref;
  }

  render() {
    const { type, schema, name, required } = this.props;

    return (
      <div>
        {
          schema.options.map((option, i) => {
            // Used to associate radio buttons with adjacent labels
            const id = `${name}_${i}`;

            const props = {
              id,
              name,
              type,
              value: option,
              ref: this.refInnerInput,
              required
            };

            return (
              <div key={i}>
                <input {...props} />
                <label htmlFor={id}>{option}</label>
              </div>
            );
          })
        }
      </div>
    );
  }
}

Radio.propTypes = {
  schema: PropTypes.object,
  required: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string
};

export default Radio;
