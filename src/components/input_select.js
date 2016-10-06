import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class Select extends Component {
  constructor() {
    super();
    this.refInput = this.refInput.bind(this);
  }

  get value() {
    return this.innerInput.value;
  }

  set value(value) {
    this.innerInput.value = value;
  }

  refInput(ref) {
    this.innerInput = ref;
  }

  render() {
    const { schema, name, required, onChange } = this.props;
    const options = _.get(schema, 'options');

    if (!options) {
      return <div>some error</div>;
    }

    const props = {
      ref: this.refInput,
      name,
      required,
      onChange
    };

    return (
      <select {...props}>
        <option key={0} value="" />
        {
          options.map((option, i) =>
            <option key={i + 1} value={option}>
              {option}
            </option>
          )
        }
      </select>
    );
  }
}

Select.propTypes = {
  schema: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func
};

export default Select;
