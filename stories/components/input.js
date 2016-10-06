import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../../src/components/input';

storiesOf('<Input />', module)
  .add('text', () => (
    <Input label="some label" type="text" />
  ))
  .add('Select', () => {
    const schema = {
      type: 'string',
      options: ['Australia', 'New Zealand', 'France', 'Italy', 'Spain']
    };

    return (
      <Input
        type="select"
        label="Country:"
        required
        schema={schema}
        name="country"
      />
    );
  })
  .add('Select (without schema options)', () => {
    const schema = {
      type: 'string'
    };

    return (
      <Input
        type="select"
        label="Country:"
        required
        schema={schema}
        name="country"
      />
    );
  });
