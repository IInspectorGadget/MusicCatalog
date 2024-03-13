import { memo, useCallback } from "react";
import cx from "classnames";

import { useGetItemByIdQuery } from "@src/redux/listApi";

import s from "./DetailView.module.scss";
import DetailItem from "./DetailItem";
import { useParams } from "react-router-dom";

const DetailView = memo(({ className, id: propId }) => {
  const { id: paramId } = useParams();
  const id = paramId || propId;
  const { data: el, isLoading } = useGetItemByIdQuery(id);

  const getDate = useCallback((date) => {
    const newDate = new Date(date);
    const year = `${newDate.getFullYear()}`.padStart(4, "0");
    const day = `${newDate.getDate()}`.padStart(2, "0");
    const month = `${newDate.getDate()}`.padStart(2, "0");

    return `${day}-${month}-${year}`;
  }, []);

  return (
    <div className={cx(s.root, className)}>
      {!isLoading && (
        <>
          <DetailItem title='Автор' text={el.author} />
          <DetailItem title='Название произведения' text={el.title} />
          <DetailItem title='Жанры' text={el.tags.join(", ")} />
          <DetailItem title='Дата выхода' text={getDate(el.date)} />
          <DetailItem title='Текс' text={el.text} isBigText />
        </>
      )}
    </div>
  );
});

DetailView.displayName = "DetailView";

export default DetailView;
