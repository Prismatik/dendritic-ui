import { shallow } from 'enzyme';
import React from 'react';
import Text from '../../src/components/input_text';

describe('<Text />', () => {
  it('must render a text input', () => {
    const el = (<Text
      type="text"
      label="cat"
      name="cat"
      placeholder="cat"
      required
      id="cat"
    />);

    const rendered = (
      <input
        type="text"
        name="cat"
        placeholder="cat"
        required
        id="cat"
        name="cat"
        placeholder="cat"
        required
        disabled={undefined}
        max={undefined}
        maxLength={undefined}
        min={undefined}
        readOnly={undefined}
        size={undefined}
        step={undefined}
        value={undefined}
        pattern={undefined}
        ref={function noRefCheck() {}}
      />
    );
    shallow(el).get(0).must.be.jsx(rendered);
  });
});
