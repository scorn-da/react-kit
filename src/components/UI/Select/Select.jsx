import React from 'react';

const Select = ({options, defaultValue, value, onChange}) => {
  return (
      <select
        value={value}
        onChange={evt => onChange(evt.target.value)}
      >
        <option disabled>{defaultValue}</option>
        {options.map((option) =>
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
        )}
      </select>
  );
};

export default Select;