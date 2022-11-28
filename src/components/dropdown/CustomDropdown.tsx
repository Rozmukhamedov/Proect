import "./style.css";
import React, { FC } from "react";
import { Select } from "@mantine/core";

type CustomDropdownProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  itemComponent?: any;
  data: any;
  searchable?: any;
  maxDropdownHeight: number;
  nothingFound: string;
  defaultValue?: any;
};

const CustomDropdown: FC<CustomDropdownProps> = ({
  className,
  label,
  placeholder,
  itemComponent,
  data,
  searchable,
  maxDropdownHeight,
  nothingFound,
  defaultValue,
}) => {
  return (
    <Select
      className={className}
      label={label}
      placeholder={placeholder}
      itemComponent={itemComponent}
      data={data}
      searchable={searchable}
      maxDropdownHeight={maxDropdownHeight}
      nothingFound={nothingFound}
      defaultValue={defaultValue}
    />
  );
};

export default CustomDropdown;
