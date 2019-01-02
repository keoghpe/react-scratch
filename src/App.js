import React, {Component} from 'react';
import YouTube from 'react-youtube';
import SpotifyPlayer from 'react-spotify-player';
import './App.css';
import Map from './components/Map';
import SocialIconList from './components/SocialIconList';
import VideoSection from './components/VideoSection';

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
            <tr>
              <a href="https://www.facebook.com/events/267352893934908/" target="_blank">
                <td className="gigDate">March 28th</td>
                <td className="gigLocation">DeBarra's Folk Club, Clonakilty, Cork</td>
              </a>
            </tr>
            <tr>
              <a href="https://www.facebook.com/events/524023394762592/" target="_blank">
                <td className="gigDate">March 29th</td>
                <td className="gigLocation">Connolly's of Leap, Cork</td>
              </a>
            </tr>
            <tr>
              <a href="https://www.facebook.com/events/306325099993868/" target="_blank">
                <td className="gigDate">March 30th</td>
                <td className="gigLocation">Fred Zepplins, Cork</td>
              </a>
            </tr>
            <tr>
              <a href="https://www.facebook.com/events/1781162015339779/" target="_blank">
                <td className="gigDate">April 4th</td>
                <td className="gigLocation">Roisin Dubh, Galway</td>
              </a>
            </tr>
            <tr>
              <a href="https://www.facebook.com/events/378261226277277/" target="_blank">
                <td className="gigDate">April 5th</td>
                <td className="gigLocation">Pharmacia, Limerick</td>
              </a>
            </tr>
            <tr>
              <a href="https://www.facebook.com/events/359901094844716/" target="_blank">
                <td className="gigDate">April 6th</td>
                <td className="gigLocation">Whelan's, Dublin</td>
              </a>
            </tr>
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
