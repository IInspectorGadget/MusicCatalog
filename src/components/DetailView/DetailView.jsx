import { memo, useCallback, useMemo } from "react";
import cx from "classnames";

import s from "./DetailView.module.scss";
import DetailItem from "./DetailItem";
import { useParams } from "react-router-dom";

const DetailView = memo(({ className, list, item }) => {
  const { id } = useParams();

  const el = useMemo(() => (list ? list[parseInt(id) - 1] : item), [list, item, id]);

  const getDate = useCallback((date) => {
    const newDate = new Date(date);
    const year = `${newDate.getFullYear()}`.padStart(4, "0");
    const day = `${newDate.getDate()}`.padStart(2, "0");
    const month = `${newDate.getDate()}`.padStart(2, "0");

    return `${day}-${month}-${year}`;
  }, []);

  return (
    <div className={cx(s.root, className)}>
      <DetailItem title='Автор' text={el.author} />
      <DetailItem title='Название произведения' text={el.title} />
      <DetailItem title='Жанры' text={el.tags.join(", ")} />
      <DetailItem title='Дата выхода' text={getDate(el.date)} />
      <DetailItem title='Текс' text={el.text} isBigText />
    </div>
  );
});

DetailView.displayName = "DetailView";

export default DetailView;
