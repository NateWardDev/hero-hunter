import { useEffect, useState } from "react";
// page imports
import Home from "./pages/Home";
import Dc from "./pages/Dc";
import Marvel from "./pages/Marvel";
import SearchItems from "./pages/SearchItems";
import Search from "./components/Search";
import Comic from "./pages/Comic";
import Character from "./pages/Character";

// components that wont leave imports
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Parallax from "./components/Parallax";

import { useLocation, Route, Routes } from "react-router-dom";

function App() {
  const localStorageState = (localStorageName) => {
    const saved = localStorage.getItem(localStorageName);

    if (!saved || saved === undefined) {
      return [];
    } else {
      return JSON.parse(saved);
    }
  };

  // for search page comic results
  const [comicSearch, setComicSearch] = useState(() =>
    localStorageState("COMICS_SEARCH"),
  );
  // for search page charcters results
  const [characterSearch, setCharacterSearch] = useState(() =>
    localStorageState("CHARACTERS_SEARCH"),
  );

  // for comic/charcter solo page when clicking on that card
  const [comic, setComic] = useState(() => localStorageState("SOLO_COMIC"));
  const [character, setCharacter] = useState(() =>
    localStorageState("SOLO_CHARACTER"),
  );

  // for solo character page to view solo characters comics
  const [characterComicList, setCharacterComicList] = useState(() =>
    localStorageState("CHARACTER_COMIC_LIST"),
  );

  // save on change
  useEffect(() => {
    localStorage.setItem("COMICS_SEARCH", JSON.stringify(comicSearch));
    localStorage.setItem("CHARACTERS_SEARCH", JSON.stringify(characterSearch));
    localStorage.setItem("SOLO_CHARACTER", JSON.stringify(character));
    localStorage.setItem("SOLO_COMIC", JSON.stringify(comic));
    localStorage.setItem(
      "CHARACTER_COMIC_LIST",
      JSON.stringify(characterComicList),
    );
  }, [comicSearch, characterSearch, comic, character, characterComicList]);

  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />}></Route>
        <Route
          path="/marvel"
          exact
          element={<Marvel setComic={setComic} setCharacter={setCharacter} />}
        ></Route>
        <Route
          path="/dc"
          exact
          element={<Dc setComic={setComic} setCharacter={setCharacter} />}
        ></Route>
        <Route
          path="/search"
          exact
          element={
            <Search
              comicSearch={comicSearch}
              setComicSearch={setComicSearch}
              characterSearch={characterSearch}
              setCharacterSearch={setCharacterSearch}
              setComic={setComic}
              setCharacter={setCharacter}
            />
          }
        ></Route>
        <Route
          path="/comic/:id"
          exact
          element={<Comic comic={comic} />}
        ></Route>
        <Route
          path="/character/:id"
          exact
          element={
            <Character
              character={character}
              characterComicList={characterComicList}
              setCharacterComicList={setCharacterComicList}
              setComic={setComic}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
};

export default App;
