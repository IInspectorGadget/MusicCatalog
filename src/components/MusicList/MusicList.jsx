import Container from "@components/Container";

import Header from "./Header";
import Main from "./Main";

import useLocalStorage from "@src/hooks/useLocalStorage";

import s from "./MusicList.module.scss";

const MusicList = () => {
  const [filter, setFilter] = useLocalStorage("MusicFilter", "");

  return (
    <section className={s.root}>
      <Container className={s.container}>
        <Header setFilter={setFilter} filter={filter} />
        <Main filter={filter} />
      </Container>
    </section>
  );
};

export default MusicList;
