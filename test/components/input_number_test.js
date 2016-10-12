import React from 'react';
import { shallow } from 'enzyme';
import Number from '../../src/components/input_number';

describe('<Number />', () => {
  it('must render with correct props', () => {
    const name = 'age';
    const placeholder = 'Enter a number';
    const onChange = () => {};
    const value = 12;

    const el = (
      <Number
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );

    const rendered = (
      <input
        id={name}
        type="number"
        placeholder={placeholder}
        onChange={onChange}
        ref={() => {}}
        value={value}
      />
    );

    shallow(el).get(0).must.be.jsx(rendered);
  });
});
