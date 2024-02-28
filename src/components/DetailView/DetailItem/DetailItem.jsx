import cx from "classnames";

import s from "./DetailItem.module.scss";

const DetailItem = ({ title, text, isBigText = false }) => {
  return (
    <div className={s.root}>
      <p className={s.title}>{title}</p>
      <p className={cx(s.text, { [s.textBig]: isBigText })}>{text}</p>
    </div>
  );
};

export default DetailItem;
