import { shallow } from 'enzyme';
import React from 'react';
import { noop } from 'lodash';
import Checkbox from '../../src/components/input_checkbox';

describe('<Checkbox />', () => {
  it('must render using options from schema', () => {
    const schema = {
      type: 'string',
      options: ['cat', 'meow']
    };

    const el = (
      <Checkbox
        label="cat"
        type="checkbox"
        name="animal"
        schema={schema}
        required
      />
    );

    const rendered = (
      <div>
        <div>
          <input
            id="animal_0"
            type="checkbox"
            name="animal"
            value="cat"
            required
            ref={noop}
          />
          <label htmlFor="animal_0">cat</label>
        </div>
        <div>
          <input
            id="animal_1"
            type="checkbox"
            name="animal"
            value="meow"
            required
            ref={noop}
          />
          <label htmlFor="animal_1">meow</label>
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
      <Checkbox
        type="checkbox"
        label="animal"
        name="animal"
        schema={schema}
        required
      />
    );

    const rendered = <div>[No options provided to input]</div>;

    shallow(el).get(0).must.be.jsx(rendered);
  });
});
