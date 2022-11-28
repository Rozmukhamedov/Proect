import React, { FC, useState } from "react";
import "./style.css";
import { ReactComponent as DownIcon } from "assets/img/CaretDown.svg";

type SelectProps = {
  data: any;
  value: any;
  onChange: any;
};

const Select: FC<SelectProps> = ({ data, value, onChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="select">
      <div className="select__title" onClick={() => setOpen(!open)}>
        <img src={value.icon} alt={value.value} /> <p>{value.value}</p>{" "}
        <DownIcon />
      </div>
      {open ? (
        <div className="select__items">
          {data?.map((val: any, index: number) => (
            <div key={index} className="select__item" onClick={() => {setOpen(!open); onChange(val)}}>
              <img src={val.icon} alt={value.value} /> <p>{val.value}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Select;
