import React, { Component, PropTypes } from 'react';

class Radio extends Component {
  constructor() {
    super();
    this.inputRefs = [];
    this.refInput = this.refInput.bind(this);
  }

  get value() {
    for (let i = 0; i < this.inputRefs.length; i++) {
      const ref = this.inputRefs[i];

      if (ref.checked) {
        return ref.value;
      }
    }

    return undefined;
  }

  set value(value) {
    for (let i = 0; i < this.inputRefs.length; i++) {
      const ref = this.inputRefs[i];

      if (ref.value === value) {
        ref.checked = true;
        break;
      }
    }
  }

  refInput(ref) {
    this.inputRefs.push(ref);
  }

  render() {
    const { type, schema, name, required } = this.props;
    const { options } = schema;

    if (!options) {
      return <div>[No options provided to input]</div>;
    }

    return (
      <div>
        {
          options.map((option, i) => {
            // Used to associate radio buttons with adjacent labels
            const id = `${name}_${i}`;

            const props = {
              id,
              name,
              type,
              value: option,
              ref: this.refInput,
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
  schema: PropTypes.object.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Radio;
