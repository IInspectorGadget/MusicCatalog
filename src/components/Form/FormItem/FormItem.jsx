import { memo } from "react";

import s from "./FormItem.module.scss";

const FormItem = memo(({ children, title }) => {
  return (
    <div className={s.root}>
      {Boolean(title) && <span className={s.label}>{title}</span>}
      {children}
    </div>
  );
});

FormItem.displayName = "FormItem";

export default FormItem;
