import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../../src/components/input';

storiesOf('<Input />', module)
  .add('text', () => (
    <Input label="some label" type="text" name="text" />
  ))
  .add('TextArea', () => (
    <Input
      label="TextArea Label:"
      type="textarea"
      name="propertyName"
      value="some value goes here"
      placeholder="Enter Text Here"
    />
  ))
  .add('Radio', () => {
    const name = 'age';
    const schema = {
      type: 'string',
      options: ['Under 18', '18-25', '26-30', '30+']
    };

    return (
      <Input
        label="Age:"
        type="radio"
        schema={schema}
        name={name}
      />
    );
  })
  .add('Radio (without schema options)', () => {
    const name = 'age';
    const schema = {
      type: 'string'
    };

    return (
      <Input
        label="Age:"
        type="radio"
        name={name}
        schema={schema}
      />
    );
  });
