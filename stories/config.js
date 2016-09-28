import { configure } from '@kadira/storybook';

function loadStories() {
  require('./components/button');
  require('./components/Input');
}

configure(loadStories, module);
