import React, {Component} from 'react';
import YouTube from 'react-youtube';
import SpotifyPlayer from 'react-spotify-player';
import './App.scss';
import Bird from './components/Bird';
import SocialIconList from './components/SocialIconList';
import VideoSection from './components/VideoSection';
import GigList from './components/GigList';
import {Switch, Route, Link} from 'react-router-dom'

const Home = () => (
  <section className="birdSection">
    <Bird/>
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
      uri={`spotify:artist:${ARTIST_ID}`}/>
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
            <a href="https://thescratchmerch.bigcartel.com" target="_blank">
              Merch
            </a>
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
