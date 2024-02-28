import { forwardRef, memo } from "react";
import cx from "classnames";

import s from "./Input.module.scss";

const Input = forwardRef(
  (
    { className, type = "text", placeholder, name, id, maxLength, isRequired = true, value, setValue, setDirty, setError, checkErrors },
    ref,
  ) => {
    const handlerBlur = () => {
      setValue((prev) => prev.trim());
      checkErrors(type, value.trim(), maxLength, isRequired, setError, setDirty);
    };

    const handlerChange = (e) => {
      const target = e.currentTarget;
      const value = target.value.slice(0, maxLength);
      setValue(value);
    };

    return (
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        onChange={handlerChange}
        onBlur={handlerBlur}
        value={value}
        autoComplete='on'
        className={cx(className, s.root, { [s.date]: type === "date" })}
        placeholder={placeholder}
      />
    );
  },
);

Input.displayName = "Input";

export default memo(Input);
