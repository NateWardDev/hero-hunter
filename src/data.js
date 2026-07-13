// Header images
// home Page
import headHome1 from "../public/images/home_head_imgs/head_home1.webp";
import headHome2 from "../public/images/home_head_imgs/head_home2.webp";
import headHome3 from "../public/images/home_head_imgs/head_home3.webp";
import headHome4 from "../public/images/home_head_imgs/head_home4.webp";
// home mobile images
import headHomeSmall1 from "../public/images/home_head_imgs/head_home1_small.webp";
import headHomeSmall2 from "../public/images/home_head_imgs/head_home2_small.webp";
import headHomeSmall3 from "../public/images/home_head_imgs/head_home3_small.webp";
import headHomeSmall4 from "../public/images/home_head_imgs/head_home4_small.webp";

// marvel
import headMarvel1 from "../public/images/head_marvel_imgs/head_marvel1.webp";
import headMarvel2 from "../public/images/head_marvel_imgs/head_marvel2.webp";
import headMarvel3 from "../public/images/head_marvel_imgs/head_marvel3.webp";
import headMarvel4 from "../public/images/head_marvel_imgs/head_marvel4.webp";
// marvel mobile images
import headMarvelSmall1 from "../public/images/head_marvel_imgs/head_marvel1_small.webp";
import headMarvelSmall2 from "../public/images/head_marvel_imgs/head_marvel2_small.webp";
import headMarvelSmall3 from "../public/images/head_marvel_imgs/head_marvel3_small.webp";
import headMarvelSmall4 from "../public/images/head_marvel_imgs/head_marvel4_small.webp";

// dc
import headDc1 from "../public/images/head_dc_imgs/head_dc1.webp";
import headDc2 from "../public/images/head_dc_imgs/head_dc2.webp";
import headDc3 from "../public/images/head_dc_imgs/head_dc3.webp";
import headDc4 from "../public/images/head_dc_imgs/head_dc4.webp";
// dc mobile images
import headDcSmall1 from "../public/images/head_dc_imgs/head_dc1_small.webp";
import headDcSmall2 from "../public/images/head_dc_imgs/head_dc2_small.webp";
import headDcSmall3 from "../public/images/head_dc_imgs/head_dc3_small.webp";
import headDcSmall4 from "../public/images/head_dc_imgs/head_dc4_small.webp";

// search page head img
import comicsBackground from "../public/images/comics_bg.webp";
import comicsBackgroundSmall from "../public/images/comics_bg_small.webp";

export const headers = [
  // Home page
  {
    path: "/",
    mainTitle: "Hero Hunter",
    className: "home",
    text: "Hero Hunter is your ultimate comic universe explorer. Search for superheroes, villains, and comics across Marvel and DC, compare powers, discover origins, and dive deep into the worlds of your favorite characters.",
    carousel: [
      {
        largeImage: headHome1,
        smallImage: headHomeSmall1,
        imageAlt: "Image of X-Men",
        index: 1,
      },
      {
        largeImage: headHome2,
        smallImage: headHomeSmall2,
        imageAlt: "Image of Thor, Captain America, and Iron Man",
        index: 2,
      },
      {
        largeImage: headHome3,
        smallImage: headHomeSmall3,
        imageAlt: "Image of Fantastic Four",
        index: 3,
      },
      {
        largeImage: headHome4,
        smallImage: headHomeSmall4,
        imageAlt:
          "Image of Spider-Man Peter Parker, Miles Morales, and Gwen Stacy Spider-Gwen",
        index: 4,
      },
    ],
  },
  // Marvel page
  {
    path: "/marvel",
    mainTitle: "Marvel Comics",
    className: "med",
    carousel: [
      {
        largeImage: headMarvel1,
        smallImage: headMarvelSmall1,
        imageAlt: "Image of X-Men",
        title: "To me, My X-Men",
        text: "The X-Men, mutants with extraordinary abilities, fight for equality and peace in a world that fears and hates them. Led by Professor X, they defend humanity from mutant threats and prejudice, proving that heroism comes in many forms.",
        index: 1,
      },
      {
        largeImage: headMarvel2,
        smallImage: headMarvelSmall2,
        imageAlt: "Image of Thor, Captain America, and Iron Man",
        title: "Avengers Assemble",
        text: "Earth’s mightiest heroes come together to face threats too big for any one of them alone. The Avengers combine their unique powers, courage, and teamwork to protect humanity from dangerous villains and global disasters.",
        index: 2,
      },
      {
        largeImage: headMarvel3,
        smallImage: headMarvelSmall3,
        imageAlt: "Image of Fantastic Four",
        title: "It's Clobberin' Time!",
        text: "The Fantastic Four, gifted with incredible powers, take on threats from across the universe. Together, they face cosmic villains, scientific mysteries, and dangerous adventures, proving that family and teamwork are their greatest strengths.",
        index: 3,
      },
      {
        largeImage: headMarvel4,
        smallImage: headMarvelSmall4,
        imageAlt:
          "Image of Spider-Man Peter Parker, Miles Morales, and Gwen Stacy Spider-Gwen",
        title: "Friendly Neighborhood",
        text: "Peter Parker, aka Spider-Man, balances life as a student and hero while swinging through New York City. He fights to protect the innocent from crime and chaos, showing that even one person can make a difference.",
        index: 4,
      },
    ],
  },
  // DC pages
  {
    path: "/dc",
    mainTitle: "DC Comics",
    className: "med",
    carousel: [
      {
        largeImage: headDc1,
        smallImage: headDcSmall1,
        imageAlt: "Image of Batman in rainy Gotham",
        title: "Dark Knight",
        text: "Batman patrols the dark streets of Gotham, using intellect, discipline, and fear itself to protect the innocent. With no superpowers, he stands against crime and corruption, proving that determination and justice can shine even in the darkest night.",
        index: 1,
      },
      {
        largeImage: headDc2,
        smallImage: headDcSmall2,
        imageAlt: "Image of Superman lifting debris off someone",
        title: "Man of Steel",
        text: "Superman, the last son of Krypton, uses his incredible strength and compassion to save lives across the world. A symbol of hope, he defends humanity from danger while inspiring others to rise above fear, doubt, and adversity.",
        index: 2,
      },
      {
        largeImage: headDc3,
        smallImage: headDcSmall3,
        imageAlt: "Image of Wonder Woman fighting in battle",
        title: "Amazon Warrior",
        text: "Wonder Woman, warrior princess of the Amazons, brings courage and truth to every fight. With her skill, compassion, and unbreakable spirit, she stands against gods, monsters, and injustice, showing the world the power of peace through strength.",
        index: 3,
      },
      {
        largeImage: headDc4,
        smallImage: headDcSmall4,
        imageAlt: "Image of the Justice League united",
        title: "Heroes United",
        text: "The Justice League combines the strength, wisdom, and willpower of the world’s greatest heroes. Together, they confront threats far beyond any one hero alone, defending Earth with teamwork, courage, and an unwavering commitment to hope.",
        index: 4,
      },
    ],
  },
  // Search page
  {
    path: "/search",
    mainTitle: "Search",
    text: "find characters, comics, and everything in between.",
    className: "short",
    largeImage: comicsBackground,
    smallImage: comicsBackgroundSmall,
    imageAlt: "background of a bunch of comics",
  },
];

// images for parallax
// desktop
import dcParallax from "../public/images/parallax/dc.webp";
import marvelParallax from "../public/images/parallax/marvel.webp";
import homeParallax from "../public/images/parallax/home.webp";

export const parallaxQuotes = [
  {
    imgLarge: homeParallax,
    imgAlt: "Jack Kirby Artwork",
    quote:
      "Comics are built from imagination and heart, a place where big ideas and bold heroes remind us to dream beyond what seems possible.",
    cred: "Jack Kirby",
    pathname: "/",
  },
  {
    imgLarge: marvelParallax,
    imgAlt: "Silver Surfer Parable artwork by Mobius",
    quote:
      "Marvel has always been the world outside your window, extraordinary stories grounded in the lives, struggles, and hopes of real people.",
    cred: "Stan Lee",
    pathname: "/marvel",
  },
  {
    imgLarge: dcParallax,
    imgAlt: "Jim Lee Superman artwork",
    quote:
      "DC endures because its heroes mix myth with humanity, showing that even legends rise from courage, doubt, and the will to stand for something.",
    cred: "Jim Lee",
    pathname: "/dc",
  },
];

// recomendation on marvel and dc pages
// x-men
import bishop from "../public/images/marvel/characters/bishop.webp";
import cyclops from "../public/images/marvel/characters/cyclops.webp";
import gambit from "../public/images/marvel/characters/gambit.webp";
import jean from "../public/images/marvel/characters/jean.webp";
import magik from "../public/images/marvel/characters/magik.webp";
import magneto from "../public/images/marvel/characters/magneto.webp";
import nightcrawler from "../public/images/marvel/characters/nightcrawler.webp";
import rogue from "../public/images/marvel/characters/rogue.webp";
import storm from "../public/images/marvel/characters/storm.webp";
import wolverine from "../public/images/marvel/characters/wolv.webp";
// x-men comics
import comicBishop from "../public/images/marvel/comics/comic_bishop.webp";
import comicCyclops from "../public/images/marvel/comics/new_xmen.webp";
import comicGambit from "../public/images/marvel/comics/comic_gambit.webp";
import comicJean from "../public/images/marvel/comics/comic_jean.webp";
import comicMagik from "../public/images/marvel/comics/comic_magik.webp";
import comicMagneto from "../public/images/marvel/comics/comic_magento.webp";
import comicNightcrawler from "../public/images/marvel/comics/comic_nightcrawler.webp";
import comicRogue from "../public/images/marvel/comics/comic_rogue.webp";
import comicStorm from "../public/images/marvel/comics/comic_storm.webp";
import comicWolv from "../public/images/marvel/comics/comic_wolv.webp";
// fantastic four
import reed from "../public/images/marvel/characters/reed.webp";
import sue from "../public/images/marvel/characters/sue.webp";
import thing from "../public/images/marvel/characters/thing.webp";
import johnny from "../public/images/marvel/characters/johnny.webp";
import doom from "../public/images/marvel/characters/doom.webp";
// f4 comics
import fantasticComic1 from "../public/images/marvel/comics/comic_doom.webp";
import fantasticComic2 from "../public/images/marvel/comics/comic_doom2.webp";
import fantasticComic3 from "../public/images/marvel/comics/comic_fan1.webp";
import fantasticComic4 from "../public/images/marvel/comics/comic_fan2.webp";
import fantasticComic5 from "../public/images/marvel/comics/comic_fan3.webp";
// avengers
import capt from "../public/images/marvel/characters/capt.webp";
import hawkeye from "../public/images/marvel/characters/hawkeye.webp";
import hulk from "../public/images/marvel/characters/hulk.webp";
import iron from "../public/images/marvel/characters/iron.webp";
import thor from "../public/images/marvel/characters/thor.webp";
// comics
import avengersComic1 from "../public/images/marvel/comics/avengers1.webp";
import avengersComic2 from "../public/images/marvel/comics/avengers2.webp";
import avengersComic3 from "../public/images/marvel/comics/avengers3.webp";
import avengersComic4 from "../public/images/marvel/comics/avengers4.webp";
import avengersComic5 from "../public/images/marvel/comics/avengers5.webp";
// spider people
import gwen from "../public/images/marvel/characters/gwen.webp";
import miguel from "../public/images/marvel/characters/miguel.webp";
import miles from "../public/images/marvel/characters/miles.webp";
import peter from "../public/images/marvel/characters/peter.webp";
import venom from "../public/images/marvel/characters/venom.webp";
// spider comics
import spiderComic1 from "../public/images/marvel/comics/comic_spider1.webp";
import spiderComic2 from "../public/images/marvel/comics/comic_spider2.webp";
import spiderComic3 from "../public/images/marvel/comics/comic_spider3.webp";
import spiderComic4 from "../public/images/marvel/comics/comic_spider4.webp";
import spiderComic5 from "../public/images/marvel/comics/comic_spider5.webp";

// dc characters
// Gotham Knights
import batman from "../public/images/dc/characters/batman.webp";
import nightwing from "../public/images/dc/characters/nightwing.webp";
import robin from "../public/images/dc/characters/robin.webp";
import batgirl from "../public/images/dc/characters/batgirl.webp";
import redHood from "../public/images/dc/characters/red_hood.webp";
import catwoman from "../public/images/dc/characters/catwoman.webp";
import harleyQuinn from "../public/images/dc/characters/harley.webp";
import joker from "../public/images/dc/characters/joker.webp";
import riddler from "../public/images/dc/characters/riddler.webp";
import poisonIvy from "../public/images/dc/characters/poison_ivy.webp";

// Justice League
import superman from "../public/images/dc/characters/superman.webp";
import wonderWoman from "../public/images/dc/characters/wonder_woman.webp";
import flash from "../public/images/dc/characters/flash.webp";
import aquaman from "../public/images/dc/characters/aquaman.webp";
import zatanna from "../public/images/dc/characters/zatanna.webp";

// Teen Titans
import starfire from "../public/images/dc/characters/starfire.webp";
import raven from "../public/images/dc/characters/raven.webp";
import beastBoy from "../public/images/dc/characters/beast_boy.webp";
import cyborg from "../public/images/dc/characters/cyborg.webp";

// DC Universe Cosmic
import darkseid from "../public/images/dc/characters/darkseid.webp";
import orion from "../public/images/dc/characters/orion.webp";
import misterMiracle from "../public/images/dc/characters/mister_miracle.webp";
import bigBarda from "../public/images/dc/characters/big_barda.webp";
import greenLatern from "../public/images/dc/characters/latern.webp";

// dc comics
import gotham_city_sirens from "../public/images/dc/comics/gotham_city_sirens.webp";
import batmanPaulDini from "../public/images/dc/comics/batman.webp";
import birds_of_prey from "../public/images/dc/comics/birds_of_prey.webp";
import year_one from "../public/images/dc/comics/year_one.webp";
import long_halloween from "../public/images/dc/comics/long_halloween.webp";
import hush from "../public/images/dc/comics/hush.webp";
import owls from "../public/images/dc/comics/owls.webp";
import central from "../public/images/dc/comics/central.webp";
import poisin_ivy from "../public/images/dc/comics/poisin_ivy.webp";
import bm_robin from "../public/images/dc/comics/bm_robin.webp";
import origin from "../public/images/dc/comics/origin.webp";
import jla from "../public/images/dc/comics/jla.webp";
import babel from "../public/images/dc/comics/babel.webp";
import justice from "../public/images/dc/comics/justice.webp";
import justice2 from "../public/images/dc/comics/justice2.webp";
import judas from "../public/images/dc/comics/judas.webp";
import titans from "../public/images/dc/comics/titans.webp";
import titans2 from "../public/images/dc/comics/titans2.webp";
import ravenComic from "../public/images/dc/comics/raven.webp";
import beast_boy from "../public/images/dc/comics/Beast_boy.webp";
import new_gods from "../public/images/dc/comics/new_gods.webp";
import miracle from "../public/images/dc/comics/miracle.webp";
import all_star from "../public/images/dc/comics/all_star.webp";
import season from "../public/images/dc/comics/season.webp";
import woman from "../public/images/dc/comics/woman.webp";

// logo images
// marvel logos
import spider_logo from "../public/images/marvel/logos/spider_logo_white.png";
import xmen_logo from "../public/images/marvel/logos/x-men_logo_white.png";
import f4_logo from "../public/images/marvel/logos/f4_logo_white.png";
import avengers_logo from "../public/images/marvel/logos/avengers_logo_white.png";
// dc logos
import batman_logo from "../public/images/dc/logos/batman_logo_white.png";
import justice_logo from "../public/images/dc/logos/justice_logo_white.png";
import lanterns_logo from "../public/images/dc/logos/lanterns_logo_white.png";
import titans_logo from "../public/images/dc/logos/titans_logo_white.png";
import Recommendations from "./components/Recommendations";

export const recomendationArray = [
  {
    path: "/marvel",
    type: "recommendation",
    introText:
      "From mutant outcasts to cosmic explorers, the Marvel Universe is built on the power of teamwork. Choose a team to get started and dive into their most iconic characters and storylines.",
    groupNames: [
      { name: "X-Men", index: 1, logo: xmen_logo },
      { name: "Avengers", index: 2, logo: avengers_logo },
      { name: "F4", index: 3, logo: f4_logo },
      { name: "Spider-Verse", index: 4, logo: spider_logo },
    ],
    groups: [
      // xmen
      {
        name: "X-Men",
        index: 1,
        characters: [
          {
            name: "Bishop",
            real_name: "Lucas Bishop",
            deck: "Lucas Bishop is a mutant from a dystopian future who travels to the present with knowledge of a grim timeline. He initially hunts rogue mutants but eventually joins the X-Men, using his ability to absorb and redirect energy to protect his teammates. Bishop has also been tied to X-Force and the Marauders, and his future insight makes him a key figure in time-travel storylines.",
            image: { original_url: bishop },
            id: 1503,
          },
          {
            name: "Cyclops",
            real_name: "Scott Summers",
            deck: "Scott Summers, known as Cyclops, is one of the core leaders of the X-Men. His optic blasts require constant visor control, and his tactical genius makes him a field commander. A founding member of many classic X-Men lineups, Cyclops strives for mutant coexistence but has also led militant mutant factions when necessary. He’s known for his long, complex relationship with Jean Grey.",
            image: { original_url: cyclops },
            id: 1459,
          },
          {
            name: "Gambit",
            real_name: "Remy LeBeau",
            deck: "Remy LeBeau is a charming Cajun mutant with the ability to charge objects (usually playing cards) with kinetic energy, turning them into powerful explosives. Gambit’s past as a thief gives him a roguish edge, but he fights for mutantkind as an X-Man. His romantic relationship with Rogue has been a defining feature of both characters’ comic histories.",
            image: { original_url: gambit },
            id: 1499,
          },
          {
            name: "Phoenix",
            real_name: "Jean Grey",
            deck: "Jean Grey is an omega-level mutant with immense telepathic and telekinetic power. Bonded to the cosmic Phoenix Force, she has saved and nearly destroyed worlds. Jean’s duality as compassionate leader and Phoenix avatar drives many of the X-Men’s greatest sagas, and she shares deep personal history with Cyclops and Wolverine.",
            image: { original_url: jean },
            id: 3552,
          },
          {
            name: "Magik",
            real_name: "Illyana Rasputina",
            deck: "Illyana Rasputina, sister of Colossus, is a powerful sorceress and mutant. She can teleport through time and space via her Soulsword and the demonic dimension Limbo. Her mastery of magic and connection to demon realms gives her a darker, mystical edge within the mutant community.",
            image: { original_url: magik },
            id: 8303,
          },
          {
            name: "Magneto",
            real_name: "Erik Lehnsherr",
            deck: "Erik Lehnsherr is one of mutantkind’s most complex figures, wielding the ability to manipulate magnetic fields. A Holocaust survivor, Magneto’s philosophy that mutants must assert their dominance for survival has made him an enemy and occasional ally to the X-Men. His nuanced ideology has placed him at the center of major mutant conflicts.",
            image: { original_url: magneto },
            id: 1441,
          },
          {
            name: "Nightcrawler",
            real_name: "Kurt Wagner",
            deck: "Kurt Wagner is a devout, acrobatic mutant able to teleport over short distances and cling to surfaces. Despite his demonic appearance, Nightcrawler is warm-hearted and clown-like in personality, often acting as a morale booster. His faith and swashbuckling style have made him a beloved X-Man and occasional leader.",
            image: { original_url: nightcrawler },
            id: 1461,
          },
          {
            name: "Rogue",
            real_name: "Anna Marie",
            deck: "Anna Marie, aka Rogue, is a mutant whose touch absorbs powers, memories, and life force. She once fought as a reluctant villain before joining the X-Men, learning to control her power over time. Rogue’s struggle with her ability and her romance with Gambit are central to her story, making her one of the franchise’s most enduring characters.",
            image: { original_url: rogue },
            id: 1446,
          },
          {
            name: "Storm",
            real_name: "Ororo Munroe",
            deck: "Ororo Munroe is a weather-manipulating mutant and one of the most prominent leaders of the X-Men. Raised as a thief before discovering her powers, Storm’s control over wind, rain, lightning, and climate makes her a powerful combatant. She has also led the team and even ruled as queen of Wakanda through marriage to Black Panther.",
            image: { original_url: storm },
            id: 1444,
          },
          {
            name: "Wolverine",
            real_name: "James Howlett",
            deck: "James ‘Logan’ Howlett, better known as Wolverine, is a mutant with regenerative healing, enhanced senses, and retractable bone claws coated in adamantium. A rugged survivor of countless wars and shadow operations, Wolverine’s gruff exterior hides deep loyalty to his friends. He’s one of the most iconic X-Men and has starred in many solo and team stories.",
            image: { original_url: wolverine },
            id: 1440,
          },
        ],
        comics: [
          {
            name: "Bishops Crossing",
            start_year: 1991,
            image: { original_url: comicBishop },
            id: 52926,
          },
          {
            name: "New X-Men",
            start_year: 2001,
            image: { original_url: comicCyclops },
            id: 9121,
          },
          {
            name: "Gambit",
            start_year: 2012,
            image: { original_url: comicGambit },
            id: 51107,
          },
          {
            name: "The Phoenix Saga",
            start_year: 1976,
            image: { original_url: comicJean },
            id: 112607,
          },
          {
            name: "Magik",
            start_year: 2025,
            image: { original_url: comicMagik },
            id: 161957,
          },
          {
            name: "Magneto",
            start_year: 2014,
            image: { original_url: comicMagneto },
            id: 72111,
          },
          {
            name: "Nightcrawler",
            start_year: 2014,
            image: { original_url: comicNightcrawler },
            id: 72934,
          },
          {
            name: "Rogue & Gambit",
            start_year: 2023,
            image: { original_url: comicRogue },
            id: null,
          },
          {
            name: "Storm",
            start_year: 2025,
            image: { original_url: comicStorm },
            id: 160203,
          },
          {
            name: "Wolverine",
            start_year: 2004,
            image: { original_url: comicWolv },
            id: 64778,
          },
        ],
      },

      // avengers
      {
        name: "Avengers",
        index: 2,
        characters: [
          {
            name: "Captain America",
            real_name: "Steve Rogers",
            deck: "Steve Rogers is a World War II super-soldier who became the symbol of heroism after being enhanced with the Super-Soldier Serum. Frozen in ice and later revived in the modern era, Captain America leads the Avengers with strong moral conviction, tactical skill, and unwavering belief in justice.",
            image: { original_url: capt },
            id: 1442,
          },
          {
            name: "Hawkeye",
            real_name: "Clint Barton",
            deck: "Clint Barton is a master archer with near-perfect accuracy and reflexes, making him one of the most skilled non-powered Avengers. A former circus performer and S.H.I.E.L.D. agent, Hawkeye relies on trick arrows, combat skill, and sharp instincts in battle.",
            image: { original_url: hawkeye },
            id: 1475,
          },
          {
            name: "Hulk",
            real_name: "Bruce Banner",
            deck: "Bruce Banner transforms into the Hulk when exposed to anger or stress, becoming a nearly unstoppable force of rage and strength. While Banner is a brilliant scientist, the Hulk is a destructive powerhouse whose strength increases with his anger, making him both a threat and a hero.",
            image: { original_url: hulk },
            id: 2267,
          },
          {
            name: "Iron Man",
            real_name: "Tony Stark",
            deck: "Tony Stark is a genius inventor, billionaire, and engineer who builds advanced powered armor suits to become Iron Man. After a life-changing injury, he uses his technology to protect the world as an Avenger, constantly upgrading his suits and pushing innovation forward.",
            image: { original_url: iron },
            id: 1455,
          },
          {
            name: "Thor Odinson",
            real_name: "Thor Odinson",
            deck: "Thor is the Asgardian God of Thunder, wielding the enchanted hammer Mjolnir (and later Stormbreaker) to control lightning and weather. As a prince of Asgard, he defends both Earth and the Nine Realms, balancing his godly duties with his role as an Avenger.",
            image: { original_url: thor },
            id: 2268,
          },
        ],
        comics: [
          {
            name: "Avengers",
            start_year: 1998,
            image: { original_url: avengersComic1 },
            id: 7084,
          },
          {
            name: "New Avengers",
            start_year: 2004,
            image: { original_url: avengersComic2 },
            id: 11497,
          },
          {
            name: "Avengers",
            start_year: 2012,
            image: { original_url: avengersComic3 },
            id: 54428,
          },
          {
            name: "New Avengers",
            start_year: 2013,
            image: { original_url: avengersComic4 },
            id: 55330,
          },
          {
            name: "Avengers",
            start_year: 2018,
            image: { original_url: avengersComic5 },
            id: null,
          },
        ],
      },

      // fantastic four
      {
        name: "Fantastic Four",
        index: 3,
        characters: [
          {
            name: "Mr. Fantastic",
            real_name: "Reed Richards",
            deck: "Reed Richards is a scientific genius and leader of the Fantastic Four. After being exposed to cosmic rays in space, he gained the ability to stretch his body into nearly any shape. As Mr. Fantastic, he focuses on exploration, invention, and solving complex scientific threats across the multiverse.",
            image: { original_url: reed },
            id: 2151,
          },
          {
            name: "Invisible Woman",
            real_name: "Sue Storm Richards",
            deck: "Sue Storm is one of the most powerful members of the Fantastic Four, capable of generating invisible force fields and rendering herself or others invisible. Initially a supportive team member, she evolves into a strong leader and emotional anchor of the group.",
            image: { original_url: sue },
            id: 2190,
          },
          {
            name: "The Thing",
            real_name: "Ben Grimm",
            deck: "Ben Grimm is a former pilot transformed into a rocky, super-strong being after exposure to cosmic rays. Despite his monstrous appearance, The Thing is known for his heart, loyalty, and strength, often serving as the emotional backbone of the Fantastic Four.",
            image: { original_url: thing },
            id: 2114,
          },
          {
            name: "Human Torch",
            real_name: "Johnny Storm",
            deck: "Johnny Storm is a thrill-seeking member of the Fantastic Four who can engulf himself in flames, fly, and control fire. Known for his impulsive personality and charisma, the Human Torch brings energy and confidence to the team.",
            image: { original_url: johnny },
            id: 2120,
          },
          {
            name: "Doctor Doom",
            real_name: "Victor Von Doom",
            deck: "Victor Von Doom is the ruler of Latveria and one of Marvel’s most brilliant and dangerous villains. A master of science and sorcery, Doctor Doom is driven by ego, destiny, and a desire to surpass Reed Richards, often clashing with the Fantastic Four and the wider Marvel universe.",
            image: { original_url: doom },
            id: 1468,
          },
        ],
        comics: [
          {
            name: "Books of Doom",
            start_year: 2005,
            image: { original_url: fantasticComic1 },
            id: 21927,
          },
          {
            name: "One World Under Doom",
            start_year: 2025,
            image: { original_url: fantasticComic2 },
            id: 162403,
          },
          {
            name: "Secret Wars",
            start_year: 2015,
            image: { original_url: fantasticComic3 },
            id: 81833,
          },
          {
            name: "Fantastic Four #48–50",
            start_year: 1966,
            image: { original_url: fantasticComic4 },
            id: 2045,
          },
          {
            name: "Fantastic Four",
            start_year: 2009,
            image: { original_url: fantasticComic5 },
            id: 32296,
          },
        ],
      },

      // spider-verse
      {
        name: "Spider-Verse",
        index: 4,
        characters: [
          {
            name: "Ghost Spider",
            real_name: "Gwen Stacy",
            deck: "Gwen Stacy from an alternate universe becomes Ghost Spider after being bitten by a radioactive spider instead of Peter Parker. As a skilled and agile hero, she balances life as a musician and vigilante while dealing with the consequences of her origin and multiverse conflicts.",
            image: { original_url: gwen },
            id: 1480,
          },
          {
            name: "Spider-Man 2099",
            real_name: "Miguel O'Hara",
            deck: "Miguel O’Hara is a genetically enhanced scientist from the year 2099 who becomes Spider-Man after a lab experiment goes wrong. He uses enhanced strength, agility, claws, and organic webbing while navigating a dystopian future shaped by corporations and chaos.",
            image: { original_url: miguel },
            id: 40524,
          },
          {
            name: "Miles Morales",
            real_name: "Miles Morales",
            deck: "Miles Morales is a young Spider-Man from an alternate universe who inherits his powers after the death of his world’s Peter Parker. He has abilities similar to Spider-Man plus invisibility and venom blasts, making him a unique and rising hero in the multiverse.",
            image: { original_url: miles },
            id: 79420,
          },
          {
            name: "Peter Parker",
            real_name: "Peter Parker",
            deck: "Peter Parker is the original Spider-Man, a scientist and photographer who gained spider-like abilities after being bitten by a radioactive spider. Known for his sense of responsibility, Peter balances personal struggles with his duty to protect New York City.",
            image: { original_url: peter },
            id: 1443,
          },
          {
            name: "Venom",
            real_name: "Eddie Brock",
            deck: "Eddie Brock becomes Venom after bonding with an alien symbiote that grants superhuman strength, agility, and shape-shifting abilities. Initially driven by vengeance against Spider-Man, Venom evolves into an anti-hero with a complex moral code.",
            image: { original_url: venom },
            id: 1486,
          },
        ],
        comics: [
          {
            name: "Spider-Verse",
            start_year: 2014,
            image: { original_url: spiderComic1 },
            id: null,
          },
          {
            name: "King in Black",
            start_year: 2020,
            image: { original_url: spiderComic2 },
            id: null,
          },
          {
            name: "Spider-Gwen",
            start_year: 2015,
            image: { original_url: spiderComic3 },
            id: null,
          },
          {
            name: "Black Cat",
            start_year: 2019,
            image: { original_url: spiderComic4 },
            id: null,
          },
          {
            name: "Miles Morales: Spider-Man",
            start_year: 2022,
            image: { original_url: spiderComic5 },
            id: null,
          },
        ],
      },
    ],
  },
  {
    path: "/dc",
    type: "recommendation",
    introText:
      "From the Justice League to its darkest counterparts, the DC Universe is driven by the bonds between extraordinary individuals. Choose a team to explore their most essential stories and members.",
    groupNames: [
      { name: "Gotham", index: 1, logo: batman_logo },
      { name: "Justice", index: 2, logo: justice_logo },
      { name: "Titans", index: 3, logo: titans_logo },
      { name: "Cosmic", index: 4, logo: lanterns_logo },
    ],
    groups: [
      // gotham knights
      {
        name: "Gotham Knights",
        index: 1,
        characters: [
          {
            name: "Batman",
            real_name: "Bruce Wayne",
            deck: "Bruce Wayne is Gotham City's vigilante protector known as Batman. After witnessing his parents’ murder, he dedicates his life to fighting crime using peak human training, detective skills, and advanced technology. Batman operates from the shadows to strike fear into criminals.",
            image: { original_url: batman },
            id: 1699,
          },
          {
            name: "Nightwing",
            real_name: "Dick Grayson",
            deck: "Dick Grayson, the first Robin, eventually becomes Nightwing after stepping out of Batman’s shadow. A highly skilled acrobat and martial artist, he leads with optimism and independence, often acting as a bridge between Batman’s darkness and heroic idealism.",
            image: { original_url: nightwing },
            id: 1691,
          },
          {
            name: "Robin",
            real_name: "Damian Wayne",
            deck: "Damian Wayne is the son of Bruce Wayne and Talia al Ghul, trained by the League of Assassins from birth. As Robin, he struggles with his violent upbringing while learning discipline and heroism under Batman’s guidance.",
            image: { original_url: robin },
            id: 42413,
          },
          {
            name: "Batgirl",
            real_name: "Barbara Gordon",
            deck: "Barbara Gordon is a brilliant hacker, detective, and fighter who operates as Batgirl. After being paralyzed by the Joker, she later becomes Oracle, a vital information broker for the Bat-Family, before returning to active combat.",
            image: { original_url: batgirl },
            id: 5368,
          },
          {
            name: "Red Hood",
            real_name: "Jason Todd",
            deck: "Jason Todd is the second Robin who returns from the dead as Red Hood. He operates with lethal methods and moral conflict, often clashing with Batman over justice, vengeance, and how far a hero should go.",
            image: { original_url: redHood },
            id: 6849,
          },
          {
            name: "Catwoman",
            real_name: "Selina Kyle",
            deck: "Selina Kyle is a master thief and anti-heroine known as Catwoman. With agility, stealth, and a personal code of ethics, she often walks the line between criminal and ally, especially in her complicated relationship with Batman.",
            image: { original_url: catwoman },
            id: 1698,
          },
          {
            name: "Harley Quinn",
            real_name: "Harleen Quinzel",
            deck: "Harleen Quinzel is a former psychiatrist who becomes Harley Quinn after falling in love with the Joker. Over time she breaks free of his influence and evolves into an unpredictable anti-hero with chaotic energy and surprising emotional depth.",
            image: { original_url: harleyQuinn },
            id: 1696,
          },
          {
            name: "Joker",
            real_name: "Unknown",
            deck: "The Joker is Batman’s greatest enemy, a chaotic criminal mastermind defined by his obsession with anarchy and psychological warfare. His origins remain unclear, adding to his unpredictable and terrifying nature.",
            image: { original_url: joker },
            id: 1702,
          },
          {
            name: "Riddler",
            real_name: "Edward Nygma",
            deck: "Edward Nygma, the Riddler, is a criminal obsessed with puzzles, riddles, and proving his intellectual superiority. He challenges Batman with elaborate schemes designed to test logic and deduction.",
            image: { original_url: riddler },
            id: 3718,
          },
          {
            name: "Poison Ivy",
            real_name: "Pamela Isley",
            deck: "Pamela Isley is a botanist turned eco-terrorist with the ability to control plants and toxins. As Poison Ivy, she fights to protect the environment, often through extreme and morally complex methods.",
            image: { original_url: poisonIvy },
            id: 1697,
          },
        ],
        comics: [
          {
            name: "Batman by Paul Dini",
            start_year: 2006,
            image: { original_url: batmanPaulDini },
          },
          {
            name: "Gotham City Sirens",
            start_year: 2009,
            image: { original_url: gotham_city_sirens },
          },
          {
            name: "Birds of Prey by Gail Simone",
            start_year: 2003,
            image: { original_url: birds_of_prey },
          },
          {
            name: "Batman: Year One",
            start_year: 1987,
            image: { original_url: year_one },
          },
          {
            name: "The Long Halloween",
            start_year: 1996,
            image: { original_url: long_halloween },
          },
          {
            name: "Batman: Hush",
            start_year: 2002,
            image: { original_url: hush },
          },
          {
            name: "Court of Owls",
            start_year: 2011,
            image: { original_url: owls },
          },
          {
            name: "Gotham Central",
            start_year: 2002,
            image: { original_url: central },
          },
          {
            name: "Poison Ivy",
            start_year: 2022,
            image: { original_url: poisin_ivy },
          },
          {
            name: "Batman & Robin by Grant Morrison",
            start_year: 2009,
            image: { original_url: bm_robin },
          },
        ],
      },

      // justice league
      {
        name: "Justice League",
        index: 2,
        characters: [
          {
            name: "Superman",
            real_name: "Kal-El",
            deck: "Kal-El, known as Superman, is the last son of Krypton raised on Earth as Clark Kent. With near-limitless strength, flight, heat vision, and other powers from Earth’s yellow sun, he stands as the world’s greatest symbol of hope and justice.",
            image: { original_url: superman },
            id: 1807,
          },
          {
            name: "Wonder Woman",
            real_name: "Diana Prince",
            deck: "Diana Prince is an Amazonian warrior princess from Themyscira and a founding member of the Justice League. Gifted with superhuman strength, combat skill, and divine artifacts, Wonder Woman serves as an ambassador of peace and justice between worlds.",
            image: { original_url: wonderWoman },
            id: 2048,
          },
          {
            name: "Flash",
            real_name: "Barry Allen",
            deck: "Barry Allen is the Flash, the fastest man alive, who gains super speed after a lightning-strike accident involving chemicals. As a forensic scientist and hero, he uses the Speed Force to protect Central City and the multiverse.",
            image: { original_url: flash },
            id: 22804,
          },
          {
            name: "Aquaman",
            real_name: "Arthur Curry",
            deck: "Arthur Curry is Aquaman, the half-human, half-Atlantean king of Atlantis. He possesses super strength, telepathic control over sea life, and the responsibility of bridging the surface world with the ocean depths.",
            image: { original_url: aquaman },
            id: 2357,
          },
          {
            name: "Zatanna",
            real_name: "Zatanna Zatara",
            deck: "Zatanna Zatara is a powerful stage magician and real sorceress who casts spells by speaking backward. As one of DC’s most skilled magic users, she balances performance, mysticism, and superhero duties.",
            image: { original_url: zatanna },
            id: 5691,
          },
        ],
        comics: [
          {
            name: "Justice League: Origin",
            start_year: 2011,
            image: { original_url: origin },
          },
          { name: "JLA", start_year: 1997, image: { original_url: jla } },
          {
            name: "Tower of Babel",
            start_year: 2000,
            image: { original_url: babel },
          },
          {
            name: "Justice",
            start_year: 2005,
            image: { original_url: justice },
          },
          {
            name: "Justice League",
            start_year: 2011,
            image: { original_url: justice2 },
          },
        ],
      },

      // teen titans
      {
        name: "Teen Titans",
        index: 3,
        characters: [
          {
            name: "Nightwing",
            real_name: "Dick Grayson",
            deck: "Dick Grayson, formerly the first Robin, becomes Nightwing after forging his own identity beyond Batman. A highly skilled acrobat and leader, he embodies optimism, independence, and tactical intelligence within the DC universe.",
            image: { original_url: nightwing },
            id: 1691,
          },
          {
            name: "Starfire",
            real_name: "Koriand'r",
            deck: "Koriand’r, known as Starfire, is an alien princess from Tamaran with the ability to absorb and project energy through flight and starbolts. Despite her tragic past, she maintains a warm and compassionate personality as a key member of the Teen Titans.",
            image: { original_url: starfire },
            id: 2389,
          },
          {
            name: "Raven",
            real_name: "Rachel Roth",
            deck: "Rachel Roth is Raven, a half-demon empath and powerful sorceress who struggles to control her dark heritage as the daughter of Trigon. She uses her emotional control and mystical abilities to protect her teammates in the Teen Titans.",
            image: { original_url: raven },
            id: 3584,
          },
          {
            name: "Beast Boy",
            real_name: "Garfield Logan",
            deck: "Garfield Logan, known as Beast Boy, is a shapeshifter who can transform into any animal. Despite his lighthearted and comedic personality, he is a deeply loyal hero and vital member of the Teen Titans.",
            image: { original_url: beastBoy },
            id: 3586,
          },
          {
            name: "Cyborg",
            real_name: "Victor Stone",
            deck: "Victor Stone becomes Cyborg after a catastrophic accident leads his father to rebuild him with advanced cybernetic technology. He possesses super strength, technological integration, and access to vast digital systems, making him both a hero and a machine.",
            image: { original_url: cyborg },
            id: 2388,
          },
        ],
        comics: [
          {
            name: "The Judas Contract",
            start_year: 1984,
            image: { original_url: judas },
          },
          {
            name: "Teen Titans",
            start_year: 2003,
            image: { original_url: titans },
          },
          {
            name: "Titans",
            start_year: 2016,
            image: { original_url: titans2 },
          },
          {
            name: "Raven",
            start_year: 2019,
            image: { original_url: ravenComic },
          },
          {
            name: "Beast Boy",
            start_year: 2020,
            image: { original_url: beast_boy },
          },
        ],
      },

      // dc universe cosmic (new gods)
      {
        name: "DC Universe Cosmic",
        index: 4,
        characters: [
          {
            name: "Darkseid",
            real_name: "Uxas",
            deck: "Darkseid is the tyrannical ruler of Apokolips and one of the most powerful beings in the DC Universe. Obsessed with the Anti-Life Equation, he seeks to eliminate free will across all reality, making him a cosmic-level threat to all existence.",
            image: { original_url: darkseid },
            id: 2349,
          },
          {
            name: "Orion",
            real_name: "Orion (Son of Darkseid)",
            deck: "Orion is the son of Darkseid, raised on New Genesis as part of a peace treaty. Despite his brutal heritage, he becomes one of the New Gods’ greatest warriors, constantly battling his inherited rage and his father’s legacy.",
            image: { original_url: orion },
            id: 2363,
          },
          {
            name: "Mister Miracle",
            real_name: "Scott Free",
            deck: "Scott Free, known as Mister Miracle, is the greatest escape artist in the universe. Raised on Apokolips but trained under Highfather, he uses his skills, technology, and intelligence to escape impossible situations while fighting for freedom.",
            image: { original_url: misterMiracle },
            id: 5703,
          },
          {
            name: "Big Barda",
            real_name: "Barda Free",
            deck: "Big Barda is a former Female Fury of Apokolips who defects to New Genesis. A powerhouse warrior with unmatched strength and combat skill, she fights alongside Mister Miracle and defends freedom across the cosmos.",
            image: { original_url: bigBarda },
            id: 3628,
          },
          {
            name: "Green Lantern",
            real_name: "John Stewart",
            deck: "John Stewart is a disciplined Green Lantern of Sector 2814 and a former U.S. Marine. Wielding a power ring fueled by willpower, he constructs energy-based weapons and structures to protect the universe as part of the Green Lantern Corps.",
            image: { original_url: greenLatern },
            id: 11202,
          },
        ],
        comics: [
          {
            name: "The New Gods",
            start_year: 1971,
            image: { original_url: new_gods },
          },
          {
            name: "Mister Miracle",
            start_year: 2017,
            image: { original_url: miracle },
          },
          {
            name: "All-Star Superman",
            start_year: 2005,
            image: { original_url: all_star },
          },
          {
            name: "Superman: For All Seasons",
            start_year: 1998,
            image: { original_url: season },
          },
          {
            name: "Supergirl: Woman of Tomorrow",
            start_year: 2021,
            image: { original_url: woman },
          },
        ],
      },
    ],
  },
];
