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

  const handlerClick = useCallback((e) => {
    const newId = e.currentTarget.id;
    setIsVisible(true);
    setId(Number(newId));
  }, []);

  return (
    <main className={s.root}>
      <Container>
        <ul className={s.list}>
          {list.map((item) => (
            <li key={item.id} id={item.id} className={s.item}>
              <div className={s.info}>
                <p className={s.title}>{item.title}</p>
                <p className={s.author}>{item.author}</p>
              </div>
              <button className={s.button} onClick={handlerClick}>
                Быстрый просмотр
              </button>
            </li>
          ))}
        </ul>
      </Container>
      {id && (
        <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
          <DetailView item={list.find((item) => item.id === id)} setIsVisible={setIsVisible} />
        </Modal>
      )}
    </main>
  );
};

export default Main;
