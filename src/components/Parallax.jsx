import { useLocation } from "react-router";
import { parallaxQuotes } from "../data";

const Parallax = () => {
  const pathname = useLocation().pathname;

  const quoteItem = parallaxQuotes.find((item) => item.pathname === pathname);
  if (!quoteItem) return null; // if nothing is found render nothing

  return (
    <section
      className="parallax"
      style={{ backgroundImage: `url(${quoteItem.imgLarge})` }}
    >
      <h4>
        <q>{quoteItem.quote}</q>
        <span> - {quoteItem.cred}</span>
      </h4>
    </section>
  );
};

export default Parallax;
