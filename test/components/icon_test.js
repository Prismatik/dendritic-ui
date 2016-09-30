import { shallow } from 'enzyme';
import React from 'react';
import Icon from '../../src/components/icon';

describe('<Icon />', () => {
  it('must render the correct icon', () => {
    const el = <Icon type="github" />;
    const rendered = (
      <i className={'fa fa-github'} />
    );
    shallow(el).get(0).must.be.jsx(rendered);
  });

  it('must render supplied type as class', () => {
    const el = <Icon type="heart" />;
    const rendered = (
      <i className={'fa fa-heart'} />
    );
    shallow(el).get(0).must.be.jsx(rendered);
  });

  it('must return a bug if the supplied type does not exist', () => {
    const el = <Icon type="zdfgzfdg" />;
    const rendered = (
      <i className={'fa fa-bug'} />
    );
    shallow(el).get(0).must.be.jsx(rendered);
  });
});
