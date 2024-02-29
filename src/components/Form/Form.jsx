import { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { addItem, deleteItem, changeItem } from "@src/redux/listSlice";

import FormItem from "./FormItem";
import Input from "@components/Input";
import Tags from "@components/Tags";
import TextArea from "@components/TextArea";
import Error from "@components/Error";
import Button from "@components/Button";

import s from "./Form.module.scss";

const Form = memo(({ closeModal, isEdit = false, item }) => {
  const dispatch = useDispatch();

  const [author, setAuthor] = useState(isEdit ? item.author : "");
  const [title, setTitle] = useState(isEdit ? item.title : "");
  const [tags, setTags] = useState(isEdit ? item.tags : []);
  const [date, setDate] = useState(isEdit ? item.date : "");
  const [text, setText] = useState(isEdit ? item.text : "");

  const [authorDirty, setAuthorDirty] = useState(!isEdit);
  const [titleDirty, setTitleDirty] = useState(!isEdit);
  const [tagsDirty, setTagsDirty] = useState(!isEdit);
  const [dateDirty, setDateDirty] = useState(!isEdit);
  const [textDirty, setTextDirty] = useState(!isEdit);

  const [authorError, setAuthorError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [tagsError, setTagsError] = useState("");
  const [dateError, setDateError] = useState("");
  const [textError, setTextError] = useState("");

  const handlerKeyDown = useCallback((e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }, []);

  const dateValidator = useCallback((value) => /^\d{4}-\d{2}-\d{2}$/.test(value.trim()), []);

  const checkInput = useCallback(
    (type, value, maxLength, isRequired, setError, setDirty) => {
      if (!value.length && isRequired && type !== "date") {
        setError("Поле не может быть пустым");
        setDirty(true);
      } else if (value.length >= maxLength && type !== "date") {
        setError("Превышен лимит символов");
        setDirty(true);
      } else if (type === "date" && !dateValidator(value)) {
        setError("Не правильный формат даты");
        setDirty(true);
      } else {
        setDirty(false);
      }
    },
    [dateValidator],
  );

  const checkTags = useCallback((length, max, isRequired, setError, setDirty) => {
    if (isRequired && !length) {
      setError("Должен быть хотя бы один жанр");
      setDirty(true);
    } else if (length > max) {
      setError(`Кол-во жанров не должно превышать ${max}`);
      setDirty(true);
    } else {
      setError("");
      setDirty(false);
    }
  }, []);

  const checkErrors = useCallback(() => {
    checkInput("text", author, 50, true, setAuthorError, setAuthorDirty);
    checkInput("text", title, 50, true, setTitleError, setTitleDirty);
    checkInput("date", date, null, true, setDateError, setDateDirty);
    checkTags(tags.length, 5, true, setTagsError, setTagsDirty);
    checkInput("text", text, 2000, true, setTextError, setTextDirty);
  }, [author, checkInput, checkTags, date, tags, text, title]);

  const handlerReset = useCallback(() => {
    setAuthorDirty(true);
    setTitleDirty(true);
    setTagsDirty(true);
    setDateDirty(true);
    setTextDirty(true);
    setAuthorError("");
    setTitleError("");
    setTagsError("");
    setDateError("");
    setTextError("");
    setAuthor("");
    setTitle("");
    setDate("");
    setTags([]);
    setText("");
  }, []);

  const handlerDelete = useCallback(() => {
    closeModal();
    dispatch(deleteItem(item));
  }, [item, closeModal, dispatch]);

  const handlerSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (authorDirty || titleDirty || tagsDirty || dateDirty || textDirty) {
        checkErrors();
      } else {
        const newItem = {
          id: item?.id || Math.random(),
          author,
          title,
          tags,
          date,
          text,
        };
        if (isEdit) {
          dispatch(changeItem(newItem));
        } else {
          dispatch(addItem(newItem));
        }
        closeModal(false);
        handlerReset();
      }
    },
    [
      isEdit,
      author,
      authorDirty,
      checkErrors,
      date,
      dateDirty,
      dispatch,
      closeModal,
      tags,
      tagsDirty,
      text,
      textDirty,
      title,
      titleDirty,
      handlerReset,
      item,
    ],
  );

  return (
    <form className={s.root} onKeyDown={handlerKeyDown} onSubmit={handlerSubmit}>
      <FormItem title='Автор'>
        <Input
          checkErrors={checkInput}
          className={s.input}
          id='artist'
          name='artist'
          value={author}
          setValue={setAuthor}
          setDirty={setAuthorDirty}
          setError={setAuthorError}
          maxLength={50}
        />
        <Error dirty={authorDirty} error={authorError} />
      </FormItem>
      <FormItem title='Название произведения'>
        <Input
          checkErrors={checkInput}
          className={s.input}
          id='title'
          name='title'
          value={title}
          setValue={setTitle}
          setDirty={setTitleDirty}
          setError={setTitleError}
          maxLength={50}
        />
        <Error dirty={titleDirty} error={titleError} />
      </FormItem>
      <FormItem title='Жанры'>
        <Tags
          checkErrors={checkTags}
          classInput={s.input}
          value={tags}
          setValue={setTags}
          max={5}
          setDirty={setTagsDirty}
          setError={setTagsError}
        />
        <Error dirty={tagsDirty} error={tagsError} />
      </FormItem>
      <FormItem title='Дата выхода'>
        <Input
          checkErrors={checkInput}
          className={s.input}
          type='date'
          id='date'
          name='date'
          value={date}
          setValue={setDate}
          setDirty={setDateDirty}
          setError={setDateError}
        />
        <Error dirty={dateDirty} error={dateError} />
      </FormItem>
      <FormItem title='Текст'>
        <TextArea
          checkErrors={checkInput}
          className={s.input}
          id='text'
          name='text'
          maxLength={3000}
          isRequired
          value={text}
          setValue={setText}
          setDirty={setTextDirty}
          setError={setTextError}
        />
        <Error dirty={textDirty} error={textError} />
      </FormItem>
      <div className={s.buttons}>
        <Button value={isEdit ? "Сохранить" : "Создать"} type='submit' />
        {isEdit ? <Button type='reset' value={"Удалить"} onClick={handlerDelete} /> : <Button type='reset' onClick={handlerReset} />}
      </div>
    </form>
  );
});

Form.displayName = "Form";

export default Form;
