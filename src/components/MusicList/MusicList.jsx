import Container from "@components/Container";

import Header from "./Header";
import Main from "./Main";

import s from "./MusicList.module.scss";

const MusicList = () => {
  return (
    <section className={s.root}>
      <Container className={s.container}>
        <Header />
        <Main />
      </Container>
    </section>
  );
};

export default MusicList;
