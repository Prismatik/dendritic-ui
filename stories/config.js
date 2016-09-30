import { configure } from '@kadira/storybook';

function loadStories() {
  require('./components/button');
  require('./components/input');
  require('./components/icon');
}

configure(loadStories, module);
