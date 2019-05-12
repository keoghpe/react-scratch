import React, {Component} from 'react';
import YouTube from 'react-youtube';
import SpotifyPlayer from 'react-spotify-player';
import './App.css';
import Map from './components/Map';
import SocialIconList from './components/SocialIconList';
import VideoSection from './components/VideoSection';
import GigList from './data/GigList';
import Gig from './components/Gig';

let gigs = GigList.map((props) => <Gig {...props}/>)

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="headerSection">
          <SocialIconList/>
        </section>
        <section className="gigSection">
          <h2>Come to a scratchy gig</h2>
          <table>
            {gigs}
          </table>
          <h2>Come to a scratchy gig</h2>
        </section>
        <section className="merchSection">
          <a href="https://thescratchmerch.bigcartel.com" target="_blank">
            <h2>Buy some scratchy merch</h2>
            <img src="merch-image.jpg"/>
            <h2>Buy some scratchy merch</h2>
          </a>
        </section>
        <section>
          <VideoSection/>
        </section>
        <section>
          <h2>Listen to our scratchy playlist</h2>
          <SpotifyPlayer
            uri="spotify:user:thescratchmusic:playlist:5mJfZYjTaFgElyLbGMuaxv"
            theme="white"/>
        </section>
      </div>
    );
  }
}

export default App;
