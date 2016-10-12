import React, { Component, PropTypes } from 'react';
import cssModules from '../lib/react_css_modules';
import styles from '../styles/input_checkbox.css';

class Checkbox extends Component {
  constructor() {
    super();
    this.inputRefs = [];
    this.refInput = this.refInput.bind(this);
  }

  get value() {
    this.inputRefs.forEach(ref => {
      if (ref.checked) {
        return ref.value;
      }
      return undefined;
    });
  }

  set value(value) {
    this.inputRefs.forEach(ref => {
      if (ref.value === value) {
        ref.checked = true;
      }
    });
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

Checkbox.propTypes = {
  schema: PropTypes.object.isRequired,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default cssModules(Checkbox, styles);
