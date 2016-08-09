import classnames from 'classnames';
import { noop } from 'lodash';
import React, { PropTypes } from 'react';
import cssModules from '../lib/react_css_modules';
import styles from '../styles/button.css';

const Button = ({ type, submit, busy, handleOnClick, children }) =>
  <button
    type={submit ? 'submit' : 'button'}
    onClick={busy ? noop : handleOnClick}
    styleName={classnames([type, { busy }])}
  >
    {children}
  </button>;

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  submit: PropTypes.bool,
  busy: PropTypes.bool,
  handleOnClick: PropTypes.func,
  children: PropTypes.any
};

Button.defaultProps = {
  type: 'primary',
  submit: false,
  busy: false,
  handleOnClick: noop
};

export default cssModules(Button, styles);
