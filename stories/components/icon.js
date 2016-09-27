import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from '../../src/components/icon';

storiesOf('<Icon />', module)
  .add('github', () => (
    <Icon type="github" size="2x" />
  ));
