import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from '../../src/components/input';

storiesOf('Checkbox', module)
.add('Normal', () => {
  const name = 'age';
  const schema = {
    type: 'string',
    options: ['Under 18', '18-25', '26-30', '30+']
  };

  return (
    <Input
      label="Age:"
      type="checkbox"
      schema={schema}
      name={name}
    />
  );
})
