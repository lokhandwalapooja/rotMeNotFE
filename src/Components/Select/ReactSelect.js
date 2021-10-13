import React, { useState } from "react";
import Select from "react-select";

const ReactSelect = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.value);

  const {
    className,
    options,
    placeholder,
    isMulti,
    readOnly,
    onSelectChange,
    name,
  } = props;

  const setValue = (name, value) => {
    onSelectChange(name, value);
    setSelectedOption(value);
  };

  return (
    <Select
      value={selectedOption}
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
