// Add JSX assertions for must.
require('must-jsx')(require('must'));

// Allow css modules to render with the raw intended class name.
require('css-modules-require-hook')({
  generateScopedName: '[local]'
});

// Initialize JSDOM.
const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = global.document.defaultView;
Object.keys(global.document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = global.document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
