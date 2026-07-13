import { useState } from "react";
import { Link } from "react-router";
import Character from "../pages/Character";

const Search = ({
  comicSearch,
  setComicSearch,
  characterSearch,
  setCharacterSearch,
  setCharacter,
  setComic,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [searchFor, setSearchFor] = useState("Characters");

  // when searching for issues
  const apiKey = import.meta.env.VITE_COMIC_VINE_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let resources = ["character", "volume"];

    // urls
    const charactersUrl = `/comicvine/search/?api_key=${apiKey}&format=json&query=${inputValue}&resources=${resources[0]}`;
    const comicsUrl = `/comicvine/search/?api_key=${apiKey}&format=json&query=${inputValue}&resources=${resources[1]}`;

    await callApi(charactersUrl, "character", setCharacterSearch);
    await callApi(comicsUrl, "comic", setComicSearch);
  };

  const callApi = async (url, type, setState) => {
    const result = await fetch(url);
    const data = await result.json();

    const publisherArray = ["DC Comics", "Marvel"];

    // diffrent filtering for diffrent calls
    if (data && type === "comic") {
      const filteredData = data.results.filter((item) =>
        publisherArray.includes(item.publisher?.name),
      );

      setState(filteredData);
      console.log(filteredData);
    }
    if (data && type == "character") {
      const countOfIssues = 50;

      const filteredData = data.results
        .filter(
          (item) => (item.count_of_issue_appearances ?? 0) >= countOfIssues,
        )
        .filter((item) => publisherArray.includes(item.publisher?.name));

      setState(filteredData);
      console.log(filteredData);
    }
  };

  // to map over the buttons and maybe add more
  const buttons = [
    {
      buttonName: "Characters",
    },
    {
      buttonName: "Comics",
    },
  ];

  return (
    <>
      <section>
        <form method="get" onSubmit={handleSubmit}>
          <div className="submit">
            <input
              type="text"
              placeholder={`Searching for ${searchFor}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </div>

          <div className="search-values">
            <p>Searching for:</p>
            <div className="buttons-wrapper">
              {buttons.map((item) => (
                <button
                  type="button"
                  key={item.buttonName}
                  onClick={() => setSearchFor(item.buttonName)}
                  className={searchFor === item.buttonName ? "active" : ""}
                >
                  {item.buttonName}
                </button>
              ))}
            </div>
          </div>
        </form>

        {/* search results */}

        <section className="search-results">
          {searchFor === "Characters" && characterSearch && (
            <div className="content-wrapper">
              {/* character results */}
              {characterSearch.map((character) => (
                <Link
                  to={`/character/${character.id}`}
                  className={`card character ${character.publisher?.name === "Marvel" ? "marvel-red" : ""}`}
                  key={character.id}
                  onClick={() => setCharacter(character)}
                >
                  <div className="img-wrapper">
                    <img
                      src={character.image.original_url}
                      alt={`headshot of ${character.name}`}
                    />
                  </div>
                  <p>{character.name}</p>
                </Link>
              ))}
            </div>
          )}

          {searchFor === "Comics" && comicSearch && (
            <div className="content-wrapper">
              {comicSearch.map((comic) => (
                <Link
                  to={`/comic/${comic.id}`}
                  className={`card comic ${comic.publisher?.name === "Marvel" ? "marvel-red" : ""}`}
                  key={comic.id}
                  onClick={() => setComic(comic)}
                >
                  <div className="img-wrapper">
                    <img
                      src={comic.image.original_url}
                      alt={`headshot of ${comic.name}`}
                    />
                  </div>
                  <p>
                    {comic.name} {comic.start_year}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default Search;
