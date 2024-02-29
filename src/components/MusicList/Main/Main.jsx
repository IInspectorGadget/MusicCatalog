import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
import cx from "classnames";

import Modal from "@components/Modal";
import Container from "@components/Container";
import DetailView from "@components/DetailView";
import Form from "@components/Form";

import s from "./Main.module.scss";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const list = useSelector((state) => state.list.value);

  const closeModal = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  const handlerClickShowButton = useCallback(
    (e) => {
      const newId = e.currentTarget.id;
      setIsVisible(true);
      setIsEdit(false);
      setId(Number(newId));
    },
    [setIsVisible, setId],
  );

  const handlerClickEditButton = useCallback(
    (e) => {
      const newId = e.currentTarget.id;
      setIsVisible(true);
      setIsEdit(true);
      setId(Number(newId));
    },
    [setIsEdit, setId],
  );

  return (
    <main className={s.root}>
      <Container>
        <ul className={s.list}>
          {list.map((item) => (
            <li key={item.id} className={s.item}>
              <div className={s.info}>
                <p className={s.title}>{item.title}</p>
                <p className={s.author}>{item.author}</p>
              </div>
              <div className={s.buttons}>
                <button className={cx(s.button, s.buttonEdit)} id={item.id} onClick={handlerClickEditButton}>
                  Редактировать
                </button>
                <button className={cx(s.button, s.buttonShow)} id={item.id} onClick={handlerClickShowButton}>
                  Быстрый просмотр
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
      {id && isVisible && (
        <Modal isVisible={isVisible} closeModal={closeModal}>
          {isEdit ? (
            <Form closeModal={closeModal} isEdit item={list.find((item) => item.id === id)} />
          ) : (
            <DetailView item={list.find((item) => item.id === id)} />
          )}
        </Modal>
      )}
    </main>
  );
};

export default Main;
