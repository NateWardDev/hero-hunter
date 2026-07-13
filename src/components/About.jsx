import aboutImg from "/images/about.webp";

const About = () => {
  return (
    <section className="about">
      <div className="text">
        <h2>About</h2>
        <p>
          Welcome to Hero Hunter, your gateway to the worlds of Marvel, DC, and
          the entire comic book universe. This site uses the ComicVine API to
          bring together characters, teams, and comics from across multiple
          publishers, giving every fan a place to explore their favorite heroes
          and discover new ones. The API documentation can be found at{" "}
          <a href="https://comicvine.gamespot.com/api/" target="_blank">
            https://comicvine.gamespot.com/api/
          </a>
        </p>
        <p>
          Hero Hunter was built to make searching for comic characters simple,
          fast, and enjoyable. With the ComicVine database behind it, you can
          look up detailed profiles, browse appearances, and dive deeper into
          the stories that shaped the most iconic figures in comic book history.
          Whether you're into Marvel legends, DC icons, or characters from
          smaller publishers, Hero Hunter helps you track them all in one place.
        </p>
      </div>
      <div className="img-wrapper">
        <img
          src={aboutImg}
          alt="Deadpool reading a history of wolverine book"
        />
      </div>
    </section>
  );
};

export default About;
