import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../../src/components/input';

storiesOf('Number', module)
  .add('Normal', () => (
    <Input type="number" label="What's my age again?:" name="age" />
  ));
