import { shallow } from 'enzyme';
import React from 'react';
import Input from '../../src/components/input';
import Radio from '../../src/components/input_radio';

describe('<Input />', () => {
  it('renders a radio component', () => {
    const schema = {
      type: 'string',
      options: ['male', 'female']
    };

    const el = (
      <Input
        type="radio"
        name="gender"
        schema={schema}
        required
        label="cat"
      />
    );

    shallow(el).find(Radio).must.have.length(1);
  });

  it('returns correct value from radio button', () => {
    const schema = {
      type: 'string',
      options: ['male', 'female']
    };

    const el = (
      <Input
        type="radio"
        name="gender"
        schema={schema}
        required
        label="cat"
      />
    );
    const wrapper = shallow(el);
    wrapper.instance().value = 'male';
    wrapper.instance().value.must.equal('male');
  });
});
