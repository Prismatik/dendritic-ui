const buildJointSchema = (props) => {
  const newSchema = Object.assign({ type: 'object' }, props.schema);

  if (typeof props.min === 'number') {
    newSchema.min = props.min;
  }

  if (typeof props.max === 'number') {
    newSchema.max = props.max;
  }

  if (typeof props.required === 'boolean') {
    newSchema.required = props.required;
  }

  if (typeof props.pattern === 'string') {
    newSchema.pattern = props.pattern;
  }

  return newSchema;
};

export default buildJointSchema;
