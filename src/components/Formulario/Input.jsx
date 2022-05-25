import React from "react";

const Input = ({ type, className, placeHolder, onChange, value, vName }) => {
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeHolder}
        name={vName}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
