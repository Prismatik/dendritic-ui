import { shallow } from 'enzyme';
import { noop } from 'lodash';
import React from 'react';
import { spy } from 'sinon';
import Button from '../../src/components/button';

describe('<Button />', () => {
  describe('.render', () => {
    it('must render regular button', () => {
      const el = <Button>Push me</Button>;
      const rendered = (
        <button
          type="button"
          onClick={noop}
          className="primary"
        >
          Push me
        </button>
      );

      shallow(el).get(0).must.be.jsx(rendered);
    });

    it('must render submit button', () => {
      const el = <Button submit>Submit</Button>;
      const rendered = (
        <button
          type="submit"
          onClick={noop}
          className="primary"
        >
          Submit
        </button>
      );

      shallow(el).get(0).must.be.jsx(rendered);
    });

    it('must render supplied type as class', () => {
      const el = <Button type="secondary">Hello!</Button>;
      const rendered = (
        <button
          type="button"
          onClick={noop}
          className="secondary"
        >
          Hello!
        </button>
      );

      shallow(el).get(0).must.be.jsx(rendered);
    });

    it('must not fire a click event when busy', () => {
      const onClick = spy();
      const el = <Button onClick={onClick} busy>Hello</Button>;

      shallow(el).find('button').simulate('click');
      onClick.notCalled.must.be.true();
    });

    it('must fire a click event when clicked', () => {
      const onClick = spy();
      const el = <Button onClick={onClick}>Hello</Button>;

      shallow(el).find('button').simulate('click');
      onClick.calledOnce.must.be.true();
    });
  });
});
