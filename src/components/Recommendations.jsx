import { useState } from "react";
import { useLocation, Link } from "react-router";
import { recomendationArray } from "../data";

const Recommendations = ({ setComic, setCharacter }) => {
  const [activeGroup, setActiveGroup] = useState(1);
  const pathname = useLocation().pathname;
  const pageArray = recomendationArray.find((item) => item.path === pathname);
  if (!pageArray) return null; // if nothing is found render nothing

  return (
    <section className="recommendations-container">
      <div className="intro-text">
        <h4>{pageArray.introText}</h4>
      </div>

      {/* Content Change Buttons */}
      <div className="group-controls">
        {pageArray.groupNames.map((names) => (
          <button
            onClick={() => setActiveGroup(names.index)}
            key={names.index}
            className={`${activeGroup === names.index ? "active" : ""} ${pathname === "/marvel" ? "marvel-red" : ""} ${pathname === "/dc" ? "dc-blue" : ""}`}
          >
            {names.name}
            <img src={names.logo} alt={`${names.name} logo`} />
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="groups">
        {pageArray.groups.map((group) => (
          <div
            className={`group-container ${
              activeGroup === group.index ? "active" : "hidden"
            }`}
            key={group.name}
          >
            {/* character headshots */}
            <div className="content-wrapper">
              <div className="head-text">
                <h3>Featured Characters</h3>
              </div>
              <div className="cards">
                {group.characters.map((character) => (
                  <Link
                    to={`/character/${character.id}`}
                    className={`card character ${pathname === "/marvel" ? "marvel-red" : ""}`}
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
            </div>

            {/* comic images */}
            <div className="content-wrapper">
              <div className="head-text">
                <h3>Featured Comics</h3>
              </div>
              <div className="cards">
                {group.comics.map((comic) => (
                  <Link
                    to={`/comic/${comic.id}`}
                    className={`card comic ${pathname === "/marvel" ? "marvel-red" : ""}`}
                    key={comic.id}
                    onClick={() => setComic(comic)}
                  >
                    <div className="img-wrapper">
                      <img
                        src={comic.image.original_url}
                        alt={`image of ${comic.name}`}
                      />
                    </div>
                    <p>
                      {comic.name} {comic.start_year}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
