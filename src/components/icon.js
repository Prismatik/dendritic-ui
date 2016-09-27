import React, { PropTypes } from 'react';
import styles from 'font-awesome/css/font-awesome.css';
import cssModules from '../lib/react_css_modules';

const Icon = ({ type }) =>
  <i styleName={`fa fa-${type}`} />;


Icon.propTypes = {
  type: PropTypes.string.isRequired
};

export default cssModules(Icon, styles, { allowMultiple: true });
