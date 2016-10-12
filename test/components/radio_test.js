import { shallow } from 'enzyme';
import React from 'react';
import { spy } from 'sinon';
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
            ref={() => {}}
            onChange={() => {}}
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
            ref={() => {}}
            onChange={() => {}}
          />
          <label htmlFor="gender_1">female</label>
        </div>
      </div>
    );

    shallow(el).get(0).must.be.jsx(rendered);
  });

  it('must render an error message if no schema options are provided', () => {
    const schema = {
      type: 'string'
    };

    const el = (
      <Radio
        type="radio"
        name="gender"
        schema={schema}
        required
      />
    );

    const rendered = <div>[No options provided to input]</div>;

    shallow(el).get(0).must.be.jsx(rendered);
  });

  it('must call the onChange handler for each option', () => {
    const onChange = spy();
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
        onChange={onChange}
      />
    );

    const inputs = shallow(el).find('input');
    inputs.forEach(input => {
      input.simulate('change');
    });

    onChange.calledTwice.must.be.true();
  });
});
