import { Link, useLocation } from "react-router-dom";

const Footer = () => {
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
    {
      linkName: "Search",
      linkTo: "/Search",
    },
  ];

  return (
    <footer>
      <div>
        <p>Explore characters with bios, powers, and comics appearances</p>
        <hr />
      </div>
      <div className="footer-nav">
        <h1 className="logo">HeroHunter.</h1>
        <nav>
          <ul>
            {links.map((item) => (
              <li key={item.linkName}>
                <Link to={item.linkTo}>{item.linkName}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
