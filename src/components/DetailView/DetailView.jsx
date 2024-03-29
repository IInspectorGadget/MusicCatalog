import { memo, useCallback } from "react";
import cx from "classnames";

import s from "./DetailView.module.scss";
import DetailItem from "./DetailItem";

const DetailView = memo(({ item }) => {
  const getDate = useCallback((date) => {
    const newDate = new Date(date);
    const year = `${newDate.getFullYear()}`.padStart(4, "0");
    const day = `${newDate.getDate()}`.padStart(2, "0");
    const month = `${newDate.getDate()}`.padStart(2, "0");

    return `${day}-${month}-${year}`;
  }, []);

  return (
    <div className={cx(s.root)}>
      <DetailItem title='Автор' text={item.author} />
      <DetailItem title='Название произведения' text={item.title} />
      <DetailItem title='Жанры' text={item.tags.join(", ")} />
      <DetailItem title='Дата выхода' text={getDate(item.date)} />
      <DetailItem title='Текс' text={item.text} isBigText />
    </div>
  );
});

DetailView.displayName = "DetailView";

export default DetailView;
