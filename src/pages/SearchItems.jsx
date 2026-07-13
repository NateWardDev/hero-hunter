import Search from "../components/Search";

const SearchItems = ({
  comicSearch,
  setComicSearch,
  characterSearch,
  setCharacterSearch,
}) => {
  return (
    <Search
      comicSearch={comicSearch}
      setComicSearch={setComicSearch}
      characterSearch={characterSearch}
      setCharacterSearch={setCharacterSearch}
    />
  );
};

export default SearchItems;
