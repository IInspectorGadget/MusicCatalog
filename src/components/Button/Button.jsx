import { memo } from "react";
import cx from "classnames";

import s from "./Button.module.scss";

const Button = ({ className, value, type, onClick, isDisabled = false }) => {
  return <input disabled={isDisabled} onClick={onClick} value={value} type={type} className={cx(className, s.root)} />;
};

export default memo(Button);
