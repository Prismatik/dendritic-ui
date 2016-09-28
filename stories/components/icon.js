import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from '../../src/components/icon';
import Button from '../../src/components/button';

storiesOf('<Icon />', module)
  .add('github', () => (
    <Icon type="github" />
  ))
  .add('h2 github', () => (
    <h2><Icon type="github" /></h2>
  ))
  .add('button github', () => (
    <button><Icon type="github" /></button>
  ));
