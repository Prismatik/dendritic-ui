import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../../src/components/input';

storiesOf('Password', module)
  .add('Normal', () => (
    <Input label="password" type="password" />
  ));
