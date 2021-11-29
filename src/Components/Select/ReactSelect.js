import React, { useEffect, useState } from "react";
import Select from "react-select";

const ReactSelect = (props) => {
  
  const {
    className,
    options,
    placeholder,
    isMulti,
    readOnly,
    name,
    value,
    setFieldValue
  } = props;

  const setValue = (name, value) => {
    if(setFieldValue) {
      setFieldValue(name, value);
    }
  };
  
  return (
    <Select
      value={value}
      isMulti={isMulti}
      onChange={(selectedOption) => setValue(name, selectedOption)}
      options={options}
      className={className}
      placeholder={placeholder}
      isDisabled={readOnly}
    />
  );
};

export default ReactSelect;
