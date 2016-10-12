import { configure } from '@kadira/storybook';

function loadStories() {
  require('./components/button');
  // require('./components/input');
  require('./components/icon');
  require('./components/input_radio');
  require('./components/input_text_area');
  require('./components/input_text');
  require('./components/input_number');
  require('./components/input_password');
}

configure(loadStories, module);
