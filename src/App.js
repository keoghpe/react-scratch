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

const Home = () => {
  const [flipped, setFlipped] = useState(false);
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
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="/FrontCoverSingle.png" alt="Front Cover" />
              {/* <img src="/FrontCoverDisk.png" alt="Front Cover" className="disk"/> */}
            </div>
            <div class="flip-card-back">
              <img src="/BackCoverSingle.png" alt="Back Cover" />
            </div>
          </div>
        </div>
        {/* <img
        src="/BackCoverAsset.png"
        alt="/FrontCoverAsset.png"/> */}
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
