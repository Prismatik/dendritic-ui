import { configure } from '@kadira/storybook';

function loadStories() {
  require('./components/button');
  require('./components/input');
}

configure(loadStories, module);
