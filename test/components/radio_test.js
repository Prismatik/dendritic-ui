import { shallow } from 'enzyme';
import React from 'react';
import { noop } from 'lodash';
import Radio from '../../src/components/input_radio';

describe('<Radio />', () => {
  it('must render using options from schema', () => {
    const schema = {
      type: 'string',
      options: ['male', 'female']
    };

    const el = (
      <Radio
        type="radio"
        name="gender"
        schema={schema}
        required
      />
    );

    const rendered = (
      <div>
        <div>
          <input
            id="gender_0"
            type="radio"
            name="gender"
            value="male"
            required
            ref={noop}
          />
          <label htmlFor="gender_0">male</label>
        </div>
        <div>
          <input
            id="gender_1"
            type="radio"
            name="gender"
            value="female"
            required
            ref={noop}
          />
          <label htmlFor="gender_1">female</label>
        </div>
      </div>
    );

    shallow(el).get(0).must.be.jsx(rendered);
  });

  it('must render an error message if no schema is passed', () => {
  });

  it('must expose a getter method', () => {
  });

  it('must expose a setter method', () => {
  });
});
