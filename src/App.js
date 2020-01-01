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
  <section className="headerSection">
    <Bird/>
  </section>
)

const Gigs = () => (
  <section className="gigSection">
    <h2>Come to a scratchy gig</h2>
    <table>
      <GigList/>
    </table>
    <h2>Come to a scratchy gig</h2>
  </section>
)

const Videos = () => (
  <section>
    <VideoSection/>
  </section>
)

const Music = () => (
  <section>
    <SpotifyPlayer
      theme="white"
      view="coverart"
      uri="spotify:artist:6BCpGC485tSshwjemmeAmd"/>
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
