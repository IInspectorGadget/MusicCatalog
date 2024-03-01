import { useCallback, useState } from "react";

import Modal from "@components/Modal";
import Form from "@components/Form";

import s from "./Header.module.scss";

const Header = ({ filter, setFilter }) => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  const handlerClick = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const handlerChange = useCallback(
    (e) => {
      setFilter(e.currentTarget.value);
    },
    [setFilter],
  );

  return (
    <div className={s.root}>
      <div className={s.filter}>
        <input className={s.search} value={filter} placeholder='Поиск' onChange={handlerChange} />
      </div>
      <button className={s.addButton} onClick={handlerClick}>
        Добавить
      </button>
      {isVisible && (
        <Modal closeModal={closeModal}>
          <Form closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Header;
