import React from "react";

const InputField = ({
  name,
  id,
  type,
  placeholder,
  label,
  autoComplete,
  ariaRequired,
  value,
  onChange
}) => {
  return (
    <div className="field">
      <input
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        aria-required={ariaRequired}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default InputField;
