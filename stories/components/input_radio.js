import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../../src/components/input';

storiesOf('Radio', module)
  .add('Normal', () => {
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
  .add('Without Schema Options', () => {
    const name = 'propertyName';
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
