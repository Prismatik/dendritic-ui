import { shallow } from 'enzyme';
import React from 'react';
import TextArea from '../../src/components/input_text_area';

describe('<TextArea />', () => {
  it('must render with correct props', () => {
    const el = (
      <TextArea
        name="comment"
        required
        placeholder="Enter Comment Here"
        value="This is a comment."
      />
    );

    const rendered = (
      <textarea
        id="comment"
        name="comment"
        required
        placeholder="Enter Comment Here"
        defaultValue="This is a comment."
        ref={() => {}}
      />
    );

    shallow(el).get(0).must.be.jsx(rendered);
  });
});
