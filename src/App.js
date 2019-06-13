import React, {Component} from 'react';
import YouTube from 'react-youtube';
import SpotifyPlayer from 'react-spotify-player';
import './App.css';
import Bird from './components/Bird';
import SocialIconList from './components/SocialIconList';
import VideoSection from './components/VideoSection';
import GigList from './components/GigList';

const App = () => {
  return (
    <div className="App">
      <section className="headerSection">
        <Bird />
        <SocialIconList />
      </section>
      <section className="gigSection">
        <h2>Come to a scratchy gig</h2>
        <table>
          <GigList />
        </table>
        <h2>Come to a scratchy gig</h2>
      </section>
      <section className="merchSection">
        <a href="https://thescratchmerch.bigcartel.com" target="_blank">
          <h2>Buy some scratchy merch</h2>
          <img src="merch-image.jpg" />
          <h2>Buy some scratchy merch</h2>
        </a>
      </section>
      <section>
        <VideoSection />
      </section>
      <section>
        <h2>Listen to our scratchy playlist</h2>
        <SpotifyPlayer
          theme="white"
          view="coverart"
          uri="spotify:user:thescratchmusic:playlist:5mJfZYjTaFgElyLbGMuaxv"/>
      </section>
    </div>
  );
}

export default App;
