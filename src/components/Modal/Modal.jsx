import cx from "classnames";

import Container from "@components/Container";

import s from "./Modal.module.scss";

const Modal = ({ isVisible, setIsVisible, children }) => {
  return (
    <div className={cx(s.root, { [s.rootActive]: isVisible })} onClick={() => setIsVisible(false)}>
      <Container className={s.container}>
        <div className={s.wrapper} onClick={(e) => e.stopPropagation()}>
          <div className={s.close} onClick={() => setIsVisible(false)}></div>
          {children}
        </div>
      </Container>
    </div>
  );
};

export default Modal;
