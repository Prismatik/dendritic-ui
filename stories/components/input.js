import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../../src/components/input';

storiesOf('<Input />', module)
  .add('text', () => (
    <Input label="some label" type="text" />
  ))
  .add('radio', () => {
    const name = 'propertyName';
    const schema = {
      type: 'string',
      options: ['optionA', 'optionB', 'optionC']
    };

    return (
      <Input
        label="Radio Label:"
        type="radio"
        schema={schema}
        name={name}
      />
    );
  });
