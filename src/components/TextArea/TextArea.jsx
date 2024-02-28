import { memo, useCallback } from "react";
import cx from "classnames";

import s from "./TextArea.module.scss";

const TextArea = memo(({ className, id, maxLength, value, isRequired, setValue, setDirty, setError, checkErrors }) => {
  const handlerBlur = useCallback(() => {
    checkErrors("text", value, maxLength, isRequired, setError, setDirty);
  }, [checkErrors, isRequired, maxLength, setDirty, setError, value]);

  const handlerChange = useCallback(
    (e) => {
      const target = e.currentTarget;
      const value = target.value.trim().slice(0, maxLength);
      setValue(value);
    },
    [maxLength, setValue],
  );

  return <textarea value={value} onBlur={handlerBlur} onChange={handlerChange} id={id} name={id} className={cx(className, s.root)} />;
});

TextArea.displayName = "TextArea";

export default TextArea;
