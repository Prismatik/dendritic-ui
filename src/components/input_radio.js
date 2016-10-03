import React, { PropTypes } from 'react';

const Radio = ({ schema, name }) => {
  const radioOptions = schema.options.map((option, i) => {
    const id = `${name}_${i}`;

    return (
      <div key={i}>
        <input
          id={id}
          name={name}
          type="radio"
          value={option}
        />
        <label htmlFor={id}>{option}</label>
      </div>
    );
  });

  return (
    <div>
      {radioOptions}
    </div>
  );
};

Radio.propTypes = {
  schema: PropTypes.object,
  required: PropTypes.bool,
  ref: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  name: PropTypes.string
};

export default Radio;
