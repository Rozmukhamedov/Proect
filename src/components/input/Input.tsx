import { Input } from "@mantine/core";
import { FC, ReactNode } from "react";
import "./style.css"

type CustomInputProps = {
  className?: string;
  icon?: ReactNode | string;
  variant?: string;
  placeholder?: string;
  radius?: string;
  rightSection?: string;
  disabled?: boolean;
  invalid?: boolean;
  component?: string;
  type?: string;
  form?: any;
  required?: boolean;
  name?: string;
  error?: any;
};

const CustomInput: FC<CustomInputProps> = ({
  className,
  icon,
  variant,
  placeholder,
  radius,
  rightSection,
  disabled,
  invalid,
  component,
  type,
  form,
  required,
  name,
  error,
}) => {
  return (
    <Input
      type={type}
      className={`custom__input ${className}`}
      icon={icon}
      variant={!!variant && "unstyled"}
      placeholder={placeholder}
      radius={radius}
      disabled={disabled}
      invalid={invalid}
      rightSection={rightSection}
      component={component}
      error={error}
      {...form.getInputProps(name)}
    />
  );
};

export default CustomInput;
