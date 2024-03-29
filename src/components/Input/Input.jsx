import { memo, useCallback } from "react";
import cx from "classnames";

import s from "./Input.module.scss";

const Input = memo(
  ({ className, type = "text", placeholder, name, id, maxLength, isRequired = true, value, setValue, setDirty, setError, checkErrors }) => {
    const handlerBlur = useCallback(() => {
      setValue((prev) => prev.trim());
      checkErrors(type, value.trim(), maxLength, isRequired, setError, setDirty);
    }, [checkErrors, isRequired, maxLength, setDirty, setError, setValue, type, value]);

    const handlerChange = useCallback(
      (e) => {
        const target = e.currentTarget;
        const value = target.value.slice(0, maxLength);
        setValue(value);
      },
      [maxLength, setValue],
    );

    return (
      <input
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

export default Input;
