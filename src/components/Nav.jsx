import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = useLocation().pathname;

  const links = [
    {
      linkName: "Home",
      linkTo: "/",
    },
    {
      linkName: "Marvel",
      linkTo: "/marvel",
    },
    {
      linkName: "DC",
      linkTo: "/dc",
    },
  ];

  return (
    <>
      <nav className={navOpen ? "topnav active" : "topnav"}>
        <div className="desktop">
          <Link to="/" className="logo">
            HeroHunter.
          </Link>

          {/* desktop Nav links */}
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.linkName}>
                <Link
                  to={link.linkTo}
                  className={pathname === link.linkTo ? "active" : ""}
                >
                  {link.linkName}
                </Link>
              </li>
            ))}
          </ul>

          {/* desktop search icon */}
          <Link
            to="/search"
            className={pathname === "/search" ? "search active" : "search"}
          >
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </div>

        {/* Mobile nav bar */}
        <div className="mobile">
          {/* left search icon */}
          <Link to="/search" className="search">
            <FontAwesomeIcon icon={faSearch} />
          </Link>

          {/* logo */}
          <Link to="/" className="logo">
            HeroHunter.
          </Link>

          {/* ham menu button */}
          <button onClick={() => setNavOpen(!navOpen)}>
            <FontAwesomeIcon icon={navOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>

      {/* overlay nav */}
      <nav
        className={
          navOpen ? "mobile-nav-container active" : "mobile-nav-container"
        }
      >
        {links.map((item) => (
          <div key={item.linkName}>
            <Link to={item.linkTo} onClick={() => setNavOpen(!navOpen)}>
              {item.linkName}
            </Link>
          </div>
        ))}
      </nav>
    </>
  );
};

export default Nav;
