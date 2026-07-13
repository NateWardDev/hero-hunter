import Recommendations from "../components/Recommendations";
import Parallax from "../components/Parallax";
import About from "../components/About";

const Dc = ({ setComic, setCharacter }) => {
  return (
    <>
      <Recommendations setComic={setComic} setCharacter={setCharacter} />
      <Parallax />
      <About />
    </>
  );
};

export default Dc;
