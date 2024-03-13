import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useSearchParams, Link } from "react-router-dom";

import Container from "@components/Container";
import DetailView from "@components/DetailView";
import Header from "./Header";
import Main from "./Main";

import s from "./MusicList.module.scss";

const MusicList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("search") || "");

  useEffect(() => {
    if (filter) {
      setSearchParams({ search: filter });
    } else {
      setSearchParams("");
    }
  }, [filter, setSearchParams]);

  const list = useSelector((state) => state.list.value);

  return (
    <section className={s.root}>
      <Container className={s.container}>
        <Routes>
          <Route
            path='/MusicCatalog'
            element={
              <>
                <Header setFilter={setFilter} filter={filter} />
                <Main filter={filter} />
              </>
            }
          />
          <Route
            path='/MusicCatalog/items/:id'
            element={
              <>
                <Link to='/MusicCatalog' className={s.backLink}>
                  Назад
                </Link>
                <DetailView list={list} className={s.detailView} />
              </>
            }
          />
        </Routes>
      </Container>
    </section>
  );
};

export default MusicList;
