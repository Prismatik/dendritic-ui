import React, { PropTypes } from 'react';
import cssModules from '../lib/react_css_modules';
import styles from '../styles/button.css';
import Radio from './input_radio';

const Text = props =>
  <div>{props.type}</div>;

const Password = props =>
  <div>{props.type}</div>;

const Checkbox = props =>
  <div>{props.type}</div>;

const TextArea = props =>
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
  type: PropTypes.oneOf(['text', 'password', 'checkbox', 'radio', 'textarea', 'select']),
  label: PropTypes.string,
  schema: PropTypes.object,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  error: PropTypes.string,
  name: PropTypes.string
};

Text.propTypes = propTypes;
Password.propTypes = propTypes;
Checkbox.propTypes = propTypes;
TextArea.propTypes = propTypes;
Select.propTypes = propTypes;
Input.propTypes = propTypes;

export default cssModules(Input, styles);
