import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import SpotifyPlayer from "react-spotify-player";
import "./App.scss";
import Bird from "./components/Bird";
import VideoSection from "./components/VideoSection";
import GigList from "./components/GigList";
import { Switch, Route, Link } from "react-router-dom";
import StreamingIconList from "./components/StreamingIconList";
import IconLink from "./components/IconLink";
import { imageForVideo, VideoList } from "./components/VideoSection";
import ShopifyBuy from "@shopify/buy-button-js";

const Home = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    var client = ShopifyBuy.buildClient({
      domain: "thescratchmusic.myshopify.com",
      storefrontAccessToken: "fe2e2fac8fdc3bb8a65029f65ec74a77",
    });

    var ui = ShopifyBuy.UI.init(client);
    ui.createComponent("product", {
      id: "6995388334274",
      node: document.getElementById("product-component-1631916191603"),
      moneyFormat: "%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D",
      options: {
        product: {
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px",
              },
            },
            button: {
              "background-color": "#3cb148",
              ":hover": {
                "background-color": "#369f41",
              },
              ":focus": {
                "background-color": "#369f41",
              },
              "font-family": "Strait, sans-serif",
              "font-weight": "bold",
              "border-radius": "0px",
              "padding-left": "62px",
              "padding-right": "62px",
              "font-size": "17px",
              "padding-top": "16.5px",
              "padding-bottom": "16.5px",
            },
            quantityInput: {
              "font-size": "17px",
              "padding-top": "16.5px",
              "padding-bottom": "16.5px",
            },
          },
          contents: {
            img: false,
            title: false,
            price: false,
          },
          text: {
            button: "ADD TO CART",
          },
          googleFonts: ["Nimbus"],
        },
        productSet: {
          styles: {
            products: {
              "@media (min-width: 601px)": {
                "margin-left": "-20px",
              },
            },
          },
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
          },
          styles: {
            product: {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px",
              },
            },
            button: {
              "background-color": "#3cb148",
              ":hover": {
                "background-color": "#369f41",
              },
              ":focus": {
                "background-color": "#369f41",
              },
              "font-family": "Strait, sans-serif",
              "font-weight": "bold",
              "border-radius": "0px",
              "padding-left": "62px",
              "padding-right": "62px",
              "font-size": "17px",
              "padding-top": "16.5px",
              "padding-bottom": "16.5px",
            },
            quantityInput: {
              "font-size": "17px",
              "padding-top": "16.5px",
              "padding-bottom": "16.5px",
            },
          },
          googleFonts: ["Strait"],
        },
        option: {},
        cart: {
          styles: {
            button: {
              "background-color": "#3cb148",
              ":hover": {
                "background-color": "#369f41",
              },
              ":focus": {
                "background-color": "#369f41",
              },

              "font-family": "Strait, sans-serif",
              "font-weight": "bold",
              "border-radius": "0px",
              "font-size": "17px",
              "padding-top": "16.5px",
              "padding-bottom": "16.5px",
            },
          },
          googleFonts: ["Strait"],
        },
        toggle: {
          styles: {
            toggle: {
              "background-color": "#3cb148",
              ":hover": {
                "background-color": "#369f41",
              },
              ":focus": {
                "background-color": "#369f41",
              },
              "font-family": "'Nimbus', sans-serif",
              "font-weight": "bold",
            },
            count: {
              "font-size": "17px",
            },
          },
          googleFonts: ["Strait"],
        },
      },
    });

  }, [])

  return (
    <section className="albumSection">
      <div className="albumImage">
        {/* <img
        // srcSet="Album-Cover-200.jpg 200w, Album-Cover-600.jpg 600w, Album-Cover-1000.jpg 1000w"
        // sizes="(max-width: 600px) 200px, (max-width: 1200px) 600px, 1000px"
        // src="/Album-Cover-1000.jpg"
        // src="/Album-Cover-1000.jpg"
        src="/FrontCoverAsset.png"
        alt="/FrontCoverAsset.png"/> */}

        <div
          className={`flip-card ${flipped ? "flipped" : ""}`}
          onClick={() => {
            setFlipped(!flipped);
          }}
        >
          <div className="flip-card-inner">
            <div class="flip-card-front">
              <img src="/FrontCoverSingle.png" alt="Front Cover" />
              <img src="/FrontCoverDisk.png" alt="Front Cover" className="disk" />
            </div>
            <div class="flip-card-back">
              <img src="/BackCoverSingle.png" alt="Back Cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="albumText">
        <div className="textCollection">
          <h2>
            Couldn't Leave Our Gafs <br /> (Live 2021)
          </h2>
          <h3 className="emphasised">
            Available for pre-order <br />
            €25 + p &amp; p
          </h3>

          {/* <a href={`https://thescratchmusic.myshopify.com/cart/40881743921346:1?channel=buy_button`}>
          Buy now
          </a> */}
          
          <div id="product-component-1631916191603"></div>
        </div>
      </div>
    </section>
  );
};

const Gigs = () => (
  <section className="gigSection">
    <table>
      <GigList />
    </table>
  </section>
);

const Merchandise = () => <section></section>;

const Merch = () => {
  window.location.href = "https://thescratchmerch.bigcartel.com";
};

const ARTIST_ID = "6BCpGC485tSshwjemmeAmd";

const Music = () => (
  <section className="musicSection">
    <iframe
      src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${ARTIST_ID}&size=detail&theme=dark`}
      className={"spotifyFollow"}
      scrolling="no"
      frameBorder="0"
      style={{ border: "none", overflow: "hidden" }}
      allowTransparency="true"
    ></iframe>
    <SpotifyPlayer
      theme="white"
      view="coverart"
      uri={`spotify:album:3MctXvWGZKZQDmSheN8Cgo`}
    />
  </section>
);

const initialLocation = window.location.href.split("/").pop() || "home";

const App = () => {
  const [bodyClass, setBodyClass] = useState(initialLocation);
  const CustomLink = ({ children, to, bodyClass = "" }) => (
    <Link to={to} onClick={() => setBodyClass(bodyClass)}>
      {children}
    </Link>
  );

  useEffect(() => {
    VideoList.forEach(({ id }) => {
      const img = new Image();
      img.src = imageForVideo(id);
    });
  }, []);

  return (
    <div className={`App ${bodyClass}`}>
      <div className="header">
        <h3>
          <CustomLink to={`/`} bodyClass={`home`}>
            THE SCRATCH
          </CustomLink>
        </h3>
        <ul>
          <li>
            <CustomLink to={`/gigs`} bodyClass={`gigs`}>
              Gigs
            </CustomLink>
          </li>
          <li>
            <CustomLink to={`/videos`} bodyClass={`videos`}>
              Videos
            </CustomLink>
          </li>
          <li>
            <CustomLink to={`/music`} bodyClass={`music`}>
              Music
            </CustomLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/merch" component={Merch} />
        <Route exact path="/merchandise" component={Merchandise} />
        <Route path="/gigs" component={Gigs} />
        <Route path="/videos" component={VideoSection} />
        <Route path="/music" component={Music} />
      </Switch>
      <div className="footer">
        <div id="logo_section">
          <Bird />
        </div>
        <div id="social_icons">
          <IconLink
            link="https://open.spotify.com/album/3MctXvWGZKZQDmSheN8Cgo?si=YP73sjryS-O1O5k5qaYxpA"
            icon="fa fa-spotify"
          />
          <IconLink
            link="https://music.apple.com/ie/album/couldnt-give-a-rats/1503585257"
            icon="fa fa-apple"
          />
          <IconLink
            link="https://www.instagram.com/thescratchmusic/"
            icon="fa fa-instagram"
          />
          <IconLink
            link="https://www.facebook.com/TheScratchMusic/"
            icon="fa fa-facebook"
          />
          <IconLink
            link="https://twitter.com/thescratchmusic"
            icon="fa fa-twitter"
          />
          <IconLink
            link="https://www.youtube.com/channel/UCBNB4bpnfLTnxVJKrLUi0ow"
            icon="fa fa-youtube"
          />
        </div>
        <div id="contact_section">
          <p>Mgmt: anon.musicmanagement@gmail.com</p>
          <p>Booking: chris@primarytalent.com</p>
        </div>
      </div>
    </div>
  );
};

export default App;
