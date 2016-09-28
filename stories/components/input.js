import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../../src/components/input';

storiesOf('<Input />', module)
  .add('text', () => (
    <Input label="some label" type="text" />
  ));
