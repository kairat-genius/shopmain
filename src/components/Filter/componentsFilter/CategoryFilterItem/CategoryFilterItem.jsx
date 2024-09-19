import React from "react";

const CategoryFilterItem = ({ label, checked, disabled, onChange, FilterClass }) => {
  const handleChange = () => {
    if (!disabled) {
      onChange(label);
    }
  };

  return (
    <li className={FilterClass}>
      <label
        htmlFor={`Filter-filter.v.availability-${label}`}
        className={`facets__label facet-checkbox ${disabled ? "disabled" : ""}`}
        onClick={handleChange}
      >
        <input
          type="checkbox"
          name="filter.v.availability"
          value={label}
          id={`Filter-filter.v.availability-${label}`}
          checked={checked}
          disabled={disabled}
          readOnly
        />
        <svg
          width="1.6rem"
          height="1.6rem"
          viewBox="0 0 16 16"
          aria-hidden="true"
          focusable="false"
        >
          <rect
            width="16"
            height="16"
            stroke="currentColor"
            fill="none"
            strokeWidth="1"
          ></rect>
        </svg>
        {checked && (
          <svg
            aria-hidden="true"
            className="icon icon-checkmark"
            width="1.1rem"
            height="0.7rem"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3.5L2.83333 4.75L4.16667 6L9.5 1"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        )}
        <span className="facet-checkbox__text" aria-hidden="true">
          <span className="facet-checkbox__text-label">{label}</span>
        </span>
      </label>
    </li>
  );
};

export default CategoryFilterItem;
