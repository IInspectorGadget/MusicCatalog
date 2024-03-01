import { useCallback, useState } from "react";

import Modal from "@components/Modal";
import Form from "@components/Form";

import s from "./Header.module.scss";

const Header = ({ filter, setFilter }) => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  return (
    <div className={s.root}>
      <div className={s.filter}>
        <input className={s.search} value={filter} placeholder='Поиск' onChange={(e) => setFilter(e.currentTarget.value)} />
      </div>
      <button className={s.addButton} onClick={() => setIsVisible(true)}>
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
