import { Link } from "react-router";

const Character = ({
  character,
  characterComicList,
  setCharacterComicList,
  setComic,
}) => {
  const handleComicsCall = () => {
    const apiKey = import.meta.env.VITE_COMIC_VINE_API_KEY;

    const comicsUrl = `/comicvine/search/?api_key=${apiKey}&format=json&query=${character.name}&resources=volume`;

    callApi(comicsUrl, setCharacterComicList);
  };

  const callApi = async (url, setState) => {
    const result = await fetch(url);
    const data = await result.json();

    const publisherArray = ["DC Comics", "Marvel"];

    // diffrent filtering for diffrent calls
    const filteredData = data.results.filter((item) =>
      publisherArray.includes(item.publisher?.name),
    );

    setState(filteredData);
  };

  return (
    <>
      <header className="result-header character">
        <picture>
          <source
            srcSet={character.image.original_url}
            media="(min-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet={character.image.original_url}
            media="(min-width: 768px)"
          />
          <source
            srcSet={
              character.image.small_url
                ? character.image.small_url
                : character.image.original_url
            }
            type="image/webp"
          />
          <img
            src={
              character.image.small_url
                ? character.image.small_url
                : character.image.original_url
            }
            alt={`art of ${character.name}`}
          />
        </picture>
        <div className="text-wrapper">
          <h1>{character.name} </h1>
          <h2>{character.real_name} </h2>
        </div>
      </header>

      <section className="api-page-body recommendations-container">
        <div className="intro-text">
          <h4>{character.deck} </h4>
        </div>
        <div className="group-controls">
          <button onClick={handleComicsCall}>
            Load {character.name} Comics
          </button>
        </div>

        <div className="search-results">
          <div className="content-wrapper">
            {characterComicList.map((comic) => (
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
        </div>
      </section>
    </>
  );
};

export default Character;
