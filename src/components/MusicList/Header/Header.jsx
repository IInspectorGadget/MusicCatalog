import { useState } from "react";

import Modal from "@components/Modal";
import Form from "@components/Form";

import s from "./Header.module.scss";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={s.root}>
      <button className={s.addButton} onClick={() => setIsVisible(true)}>
        Добавить
      </button>
      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <Form setIsVisible={setIsVisible} />
      </Modal>
    </div>
  );
};

export default Header;
