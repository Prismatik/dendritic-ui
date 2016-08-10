import { configure } from '@kadira/storybook';

function loadStories() {
  require('./components/button');
}

configure(loadStories, module);
