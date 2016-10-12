import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../../src/components/input';

storiesOf('Text', module)
  .add('Normal', () => (
    <Input label="some label" type="text" />
  ));
