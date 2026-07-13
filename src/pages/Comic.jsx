const Comic = ({ comic }) => {
  console.log(comic);

  return (
    <>
      <header className="result-header comic">
        <picture>
          <source
            srcSet={comic.image.original_url}
            media="(min-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet={comic.image.original_url}
            media="(min-width: 768px)"
          />
          <source
            srcSet={
              comic.image.small_url
                ? comic.image.small_url
                : comic.image.original_url
            }
            type="image/webp"
          />
          <img
            src={
              comic.image.small_url
                ? comic.image.small_url
                : comic.image.original_url
            }
            alt={`art of ${comic.name}`}
          />
        </picture>
        <div className="text-wrapper">
          <h1>
            {comic.name} {comic.start_year}
          </h1>
        </div>
      </header>

      <section className="api-page-body recommendations-container">
        <h2>Comic info</h2>
        <p>
          {comic.deck || comic.deck === " "
            ? comic.deck
            : "No description available for this comic"}
        </p>
      </section>
    </>
  );
};

export default Comic;
