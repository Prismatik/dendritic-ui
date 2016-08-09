import reactCSSModules from 'react-css-modules';

const defaultOpts = {
  allowMultiple: true,
  errorWhenNotFound: process.env.NODE_ENV !== 'production'
};

const cssModules = (component, styles, opts = {}) =>
  reactCSSModules(component, styles, Object.assign({}, defaultOpts, opts));

export default cssModules;
