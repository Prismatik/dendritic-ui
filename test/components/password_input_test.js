import { shallow } from 'enzyme';
import React from 'react';
import Password from '../../src/components/input_password';

describe('<Text />', () => {
  it('must render a password input', () => {
    const el = (<Password
      type="password"
      label="password"
      name="password"
      placeholder="password"
      required
      id="password"
    />);

    const rendered = (
      <input
        type="password"
        name="password"
        placeholder="password"
        required
        id="password"
        name="password"
        placeholder="password"
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
