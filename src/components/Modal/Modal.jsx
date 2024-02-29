import { memo } from "react";

import Container from "@components/Container";

import s from "./Modal.module.scss";

const Modal = memo(({ closeModal, children }) => {
  return (
    <div className={s.root} onClick={() => closeModal(false)}>
      <Container className={s.container}>
        <div className={s.wrapper} onClick={(e) => e.stopPropagation()}>
          <div className={s.close} onClick={() => closeModal(false)} />
          {children}
        </div>
      </Container>
    </div>
  );
});

Modal.displayName = "Modal";

export default Modal;
