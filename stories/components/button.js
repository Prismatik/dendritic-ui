import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../../src/components/button';

storiesOf('<Button />', module)
  .add('primary', () => (
    <Button>Primary</Button>
  ))
  .add('secondary', () => (
    <Button type="secondary">Secondary</Button>
  ))
  .add('submit', () => (
    <Button submit>Submit</Button>
  ))
  .add('busy', () => (
    <Button busy>Busy...</Button>
  ));
