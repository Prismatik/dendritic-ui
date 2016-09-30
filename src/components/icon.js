import React, { PropTypes } from 'react';
import styles from 'font-awesome/css/font-awesome.css';
import cssModules from '../lib/react_css_modules';

const validIcon = (type) => {
  if (!styles[`fa-${type}`]) {
    return 'bug';
  }
  return type;
};

const Icon = ({ type }) =>
  <i styleName={`fa fa-${validIcon(type)}`} />;


Icon.propTypes = {
  type: PropTypes.string.isRequired
};

export default cssModules(Icon, styles, { allowMultiple: true });
