import { useSelector } from "react-redux";
import { useCallback, useState } from "react";

import Modal from "@components/Modal";
import Container from "@components/Container";
import DetailView from "@components/DetailView";

import s from "./Main.module.scss";

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [id, setId] = useState(null);
  const list = useSelector((state) => state.list.value);

  const closeModal = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  const handlerClick = useCallback(
    (e) => {
      const newId = e.currentTarget.id;
      setIsVisible(true);
      setId(Number(newId));
    },
    [setIsVisible, setId],
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
              <button className={s.button} id={item.id} onClick={handlerClick}>
                Быстрый просмотр
              </button>
            </li>
          ))}
        </ul>
      </Container>
      {id && isVisible && (
        <Modal isVisible={isVisible} closeModal={closeModal}>
          <DetailView item={list.find((item) => item.id === id)} />
        </Modal>
      )}
    </main>
  );
};

export default Main;
