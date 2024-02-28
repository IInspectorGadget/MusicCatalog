import { memo } from "react";
import cx from "classnames";

import s from "./TextArea.module.scss";

const TextArea = ({ className, id, maxLength, value, isRequired, setValue, setDirty, setError, checkErrors }) => {
  const handlerBlur = () => {
    checkErrors("text", value, maxLength, isRequired, setError, setDirty);
  };
  const handlerChange = (e) => {
    const target = e.currentTarget;
    const value = target.value.trim().slice(0, maxLength);
    setValue(value);
  };

  return <textarea value={value} onBlur={handlerBlur} onChange={handlerChange} id={id} name={id} className={cx(className, s.root)} />;
};

export default memo(TextArea);
