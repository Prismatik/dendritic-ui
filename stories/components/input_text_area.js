import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../../src/components/input';

storiesOf('TextArea', module)
  .add('Normal', () => (
    <Input
      label="TextArea Label:"
      type="textarea"
      name="propertyName"
      value="some value goes here"
      placeholder="Enter Text Here"
    />
  ));
