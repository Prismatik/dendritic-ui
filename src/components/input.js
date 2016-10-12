import React, { PropTypes } from 'react';
import cssModules from '../lib/react_css_modules';
import styles from '../styles/button.css';
import TextArea from './input_text_area';
import Radio from './input_radio';
import Text from './input_text';
import Number from './input_number';

const Password = props =>
  <div>{props.type}</div>;

const Checkbox = props =>
  <div>{props.type}</div>;

const Select = props =>
  <div>{props.type}</div>;

const Input = props => {
  let input;

  switch (props.type) {
    case 'text':
      input = <Text {...props} />;
      break;
    case 'password':
      input = <Password {...props} />;
      break;
    case 'checkbox':
      input = <Checkbox {...props} />;
      break;
    case 'radio':
      input = <Radio {...props} />;
      break;
    case 'textarea':
      input = <TextArea {...props} />;
      break;
    case 'select':
      input = <Select {...props} />;
      break;
    case 'number':
      input = <Number {...props} />;
      break;
    default:
      input = <Text {...props} />;
  }

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      {input}
    </div>
  );
};

const propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'checkbox', 'radio', 'textarea', 'select']).isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  maxLength: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  schema: PropTypes.object,
  size: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.any
};

Text.propTypes = propTypes;
Password.propTypes = propTypes;
Checkbox.propTypes = propTypes;
Select.propTypes = propTypes;
Input.propTypes = propTypes;

export default cssModules(Input, styles);
