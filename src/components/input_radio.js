import React, { Component, PropTypes } from 'react';

class Radio extends Component {
  constructor() {
    super();
    this.inputRefs = [];
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
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

  render() {
    const { type, schema = {}, name, required } = this.props;
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

            return (
              <div key={i}>
                <input
                  id={id}
                  name={name}
                  type={type}
                  value={option}
                  ref={(ref) => { this.inputRefs.push(ref); }}
                  required={required}
                  onChange={this.onChange}
                />
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
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

export default Radio;
