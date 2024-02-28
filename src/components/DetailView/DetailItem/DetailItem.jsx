import { memo } from "react";
import cx from "classnames";

import s from "./DetailItem.module.scss";

const DetailItem = memo(({ title, text, isBigText = false }) => {
  return (
    <div className={s.root}>
      <p className={s.title}>{title}</p>
      <p className={cx(s.text, { [s.textBig]: isBigText })}>{text}</p>
    </div>
  );
});

DetailItem.displayName = "DetailItem";

export default DetailItem;
