import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { headers } from "../data";

const Header = () => {
  const pathname = useLocation().pathname;
  const [activeSlide, setActiveSlide] = useState(1);

  // this resets the active slide to 1 when the page changes
  useEffect(() => {
    setActiveSlide(1);
  }, [pathname]);

  // find Header for current pathname/page
  const headerItem = headers.find((item) => item.path === pathname);
  if (!headerItem) return null; // if nothing is found render nothing

  return (
    <header className={headerItem.className}>
      {/* home and search pages */}
      {pathname === "/" && (
        <HomeHeader
          headerItem={headerItem}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      )}

      {/* for DC and Marvel Pages */}
      {!(pathname === "/" || pathname === "/search") && (
        <SideHeaders
          headerItem={headerItem}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      )}

      {/* for search page */}
      {pathname === "/search" && <SearchHeader headerItem={headerItem} />}
    </header>
  );
};

// home and search
const HomeHeader = ({ headerItem, activeSlide, setActiveSlide }) => {
  return (
    <>
      <div className="text-wrapper">
        <h1>{headerItem.mainTitle}</h1>
        <p>{headerItem.text} </p>
      </div>
      <div className="carousel-container">
        {headerItem.carousel.map((item) => (
          <div
            className={`carousel-item ${
              activeSlide === item.index ? "active" : ""
            }`}
            key={item.index}
          >
            <picture>
              <source
                srcSet={item.largeImage}
                media="(min-width: 768px)"
                type="image/webp"
              />
              <source srcSet={item.largeImage} media="(min-width: 768px)" />
              <source srcSet={item.SmallImage} type="image/webp" />
              <img src={item.smallImage} alt={item.imageAlt} />
            </picture>
          </div>
        ))}
        {/* buttons */}
        <CarouselControls
          headerItem={headerItem}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </div>
    </>
  );
};

// Marvel & dc but homepages
const SideHeaders = ({ headerItem, activeSlide, setActiveSlide }) => {
  return (
    <div className="carousel-container">
      {headerItem.carousel.map((item) => (
        <div
          className={`carousel-item ${
            activeSlide === item.index ? "active" : ""
          }`}
          key={item.index}
        >
          <div className="text-wrapper">
            <div>
              <h1>{item.title}</h1>
            </div>
            <div>
              <p>{item.text} </p>
            </div>
          </div>
          <picture>
            <source
              srcSet={item.largeImage}
              media="(min-width: 768px)"
              type="image/webp"
            />
            <source srcSet={item.largeImage} media="(min-width: 768px)" />
            <source srcSet={item.SmallImage} type="image/webp" />
            <img src={item.smallImage} alt={item.imageAlt} />
          </picture>
        </div>
      ))}
      {/* buttons */}
      <CarouselControls
        headerItem={headerItem}
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
    </div>
  );
};

const SearchHeader = ({ headerItem }) => {
  return (
    <>
      <div className="text-wrapper">
        <h1>{headerItem.mainTitle}</h1>
        <p>{headerItem.text}</p>
      </div>
      <picture>
        <source
          srcSet={headerItem.largeImage}
          media="(min-width: 768px)"
          type="image/webp"
        />
        <source srcSet={headerItem.largeImage} media="(min-width: 768px)" />
        <source srcSet={headerItem.SmallImage} type="image/webp" />
        <img src={headerItem.smallImage} alt={headerItem.imageAlt} />
      </picture>
    </>
  );
};

// buttons
const CarouselControls = ({ setActiveSlide, headerItem, activeSlide }) => {
  const pathname = useLocation().pathname;

  return (
    <div className="carousel-controls">
      {headerItem.carousel.map((item) => (
        <button
          key={item.index}
          onClick={() => setActiveSlide(item.index)}
          className={`${activeSlide === item.index ? "active" : ""} ${pathname === "/marvel" ? "marvel-red" : ""} ${pathname === "/dc" ? "dc-blue" : ""}`}
        >
          {item.index}
        </button>
      ))}
    </div>
  );
};

export default Header;
