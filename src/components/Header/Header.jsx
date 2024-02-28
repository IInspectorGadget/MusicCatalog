import Container from "@components/Container";

import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.root}>
      <Container className={s.container}>
        <h1 className={s.title}>Music Catalog</h1>
      </Container>
    </header>
  );
};

export default Header;
