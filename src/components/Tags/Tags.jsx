import { useCallback } from "react";
import cx from "classnames";

import s from "./Tags.module.scss";

const Tags = ({ classInput, value: tags, setValue: setTags, setDirty, setError, isRequired = true, max, checkErrors: checkTags }) => {
  const checkError = useCallback(
    (length) => {
      checkTags(length, max, isRequired, setError, setDirty);
    },
    [checkTags, setDirty, setError, isRequired, max],
  );

  const handlerBlur = useCallback(() => {
    checkError(tags.length);
  }, [tags, checkError]);

  const addTag = useCallback(
    (e) => {
      const target = e.currentTarget;
      const value = target.value.trim();
      if (e.key === "Enter" && value) {
        setTags((prev) => {
          if (prev.filter((tag) => tag === value).length) {
            return prev;
          }
          const newTags = [...prev, value];
          checkError(newTags.length);
          return newTags;
        });
        target.value = "";
      }
    },
    [setTags, checkError],
  );

  const deleteTag = useCallback(
    (deleteTag) => {
      setTags((prev) => {
        const newTags = prev.filter((tag) => tag !== deleteTag);
        checkError(newTags.length);
        return newTags;
      });
    },
    [setTags, checkError],
  );

  return (
    <div className={cx(s.root)}>
      <input onBlur={handlerBlur} className={classInput} type='text' placeholder='Нажмите enter для добавления' onKeyUp={addTag} />
      <ul className={s.list}>
        {tags.length ? (
          tags.map((tag, idx) => (
            <li className={s.item} key={idx}>
              <span className={s.tag}>{tag}</span>
              <span className={s.close} onClick={() => deleteTag(tag)}></span>
            </li>
          ))
        ) : (
          <li className={s.item}>
            <span className={s.tag}>{"Здесь будут ваши жанры"}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Tags;
