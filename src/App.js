import React, {Component} from 'react';
import YouTube from 'react-youtube';
import SpotifyPlayer from 'react-spotify-player';
import './App.scss';
import Bird from './components/Bird';
import SocialIconList from './components/SocialIconList';
import VideoSection from './components/VideoSection';
import GigList from './components/GigList';
import {Switch, Route, Link} from 'react-router-dom'
import StreamingIconList from "./components/StreamingIconList";

const Home = () => (
  <section className="albumSection">
    <div className="albumImage">
      <img
        srcSet="Album-Cover-200.jpg 200w, Album-Cover-600.jpg 600w, Album-Cover-1000.jpg 1000w"
        sizes="(max-width: 600px) 200px, (max-width: 1200px) 600px, 1000px"
        src="/Album-Cover-1000.jpg"
        alt=""/>
    </div>
    <div className="albumText">
      <div className="textCollection">
        <h2>&lsquo;Couldn't Give a Rats&rsquo;</h2>
        <h3 className="emphasised">The debut album!</h3>
        <h3>Out now on all streaming platforms.</h3>
        <StreamingIconList/>
      </div>
    </div>
  </section>
)

const Gigs = () => (
  <section className="gigSection">
    <table>
      <GigList/>
    </table>
  </section>
)

const Videos = () => (
  <section className="videoSection">
    <VideoSection/>
  </section>
)

const ARTIST_ID = '6BCpGC485tSshwjemmeAmd';

const Music = () => (
  <section className="musicSection">
    <iframe src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${ARTIST_ID}&size=detail&theme=dark`}
            className={'spotifyFollow'}
            scrolling="no"
            frameBorder="0" style={{border: 'none', overflow: 'hidden'}}
            allowTransparency="true"></iframe>
    <SpotifyPlayer
      theme="white"
      view="coverart"
      uri={`spotify:album:3MctXvWGZKZQDmSheN8Cgo`}/>
  </section>
)

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h3>
          <Link to={`/`}>
            The Scratch
          </Link>
        </h3>
        <ul>
          <li>
            <Link to={`/`}>
              Album
            </Link>
          </li>
          <li>
            <Link to={`/gigs`}>
              Gigs
            </Link>
          </li>
          <li>
            <Link to={`/videos`}>
              Videos
            </Link>
          </li>
          <li>
            <Link to={`/music`}>
              Music
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/gigs' component={Gigs}/>
        <Route path='/videos' component={Videos}/>
        <Route path='/music' component={Music}/>
      </Switch>
      <div className="footer">
        <SocialIconList/>
      </div>
    </div>
  );
}

export default App;
