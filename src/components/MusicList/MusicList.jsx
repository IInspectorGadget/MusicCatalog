import Container from "@components/Container";
import Header from "./Header";

import s from "./MusicList.module.scss";
import Main from "@components/Main";

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
