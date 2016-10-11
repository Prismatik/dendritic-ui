import { shallow } from 'enzyme';
import React from 'react';
import Input from '../../src/components/input';
import Radio from '../../src/components/input_radio';
import TextArea from '../../src/components/input_text_area';
import Text from '../../src/components/input_text';

describe('<Input />', () => {
  describe('type="radio"', () => {
    it('must render correct component', () => {
      const schema = {
        type: 'string',
        options: ['male', 'female']
      };

      const el = (
        <Input
          type="radio"
          name="gender"
          schema={schema}
          label="cat"
        />
      );

      shallow(el).find(Radio).must.have.length(1);
    });

    it('must expose getter/setter for value', () => {
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

  describe('type="textarea"', () => {
    it('must render correct component', () => {
      const el = (
        <Input
          type="textarea"
          name="comment"
          label="Comment:"
        />
      );

      shallow(el).find(TextArea).must.have.length(1);
    });

    it('must expose getter/setter for value', () => {
      const el = (
        <Input
          type="textarea"
          name="comment"
          label="Comment:"
        />
      );
      const wrapper = shallow(el);
      wrapper.instance().value = 'this is a comment';
      wrapper.instance().value.must.equal('this is a comment');
    });
  });

  describe('type="text"', () => {
    it('must render correct component', () => {
      const el = (
        <Input
          type="text"
          id="cat"
          name="cat"
          placeholder="cat"
          label="cat"
          required
        />
      );

      shallow(el).find(Text).must.have.length(1);
    });

    it('must expose getter/setter for value', () => {
      const el = (
        <Input
          type="text"
          name="cat"
          placeholder="cat"
          label="cat"
        />
      );
      const wrapper = shallow(el);
      wrapper.instance().value = 'meow';
      wrapper.instance().value.must.equal('meow');
    });
  });
});
