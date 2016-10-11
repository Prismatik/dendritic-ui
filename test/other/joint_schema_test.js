import buildJointSchema from '../../src/lib/jointSchema';

describe('buildJointSchema(...)', () => {
  it('must clone existing schema if passed in', () => {
    const props = {
      schema: {
        type: 'string'
      }
    };

    const newSchema = buildJointSchema(props);
    newSchema.must.not.equal(props.schema);
  });

  it('must create a new schema if one is not passed in', () => {
    const props = {};
    const newSchema = buildJointSchema(props);
    newSchema.must.have.ownKeys(['type']);
  });

  it('must use prop values (min, max etc) to overwrite schema values', () => {
    const min = 5;
    const max = 10;
    const required = true;
    const pattern = '7';

    const props = {
      min,
      max,
      required,
      pattern,
      schema: {
        type: 'integer',
        min: 1,
        max: 20,
        required: false,
        pattern: '8'
      }
    };

    const newSchema = buildJointSchema(props);
    newSchema.must.have.ownProperties({
      type: 'integer',
      min,
      max,
      required,
      pattern
    });
  });
});
