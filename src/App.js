import React, { Component } from 'react';
import YouTube from 'react-youtube';
import SpotifyPlayer from 'react-spotify-player';
import './App.css';

class SocialIcon extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank">
        <i className={"fa fa-" + this.props.icon} aria-hidden="true"></i>
      </a>
        )
  }
}

class SocialIcons extends Component {
  render() {
  return (
    <div id="social_icons">
      <SocialIcon link="https://www.facebook.com/TheScratchMusic/" icon="facebook"/>
      <SocialIcon link="https://www.instagram.com/thescratchmusic/" icon="instagram"/>
      <SocialIcon link="https://www.youtube.com/channel/UCBNB4bpnfLTnxVJKrLUi0ow" icon="youtube"/>
    </div>
  )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <SocialIcons />
      <h2><a href="https://thescratchmerch.bigcartel.com">Buy some scratchy merch</a></h2>
      <SpotifyPlayer
      uri="spotify:artist:6BCpGC485tSshwjemmeAmd"
      theme="white"/>
      <YouTube videoId="NMXbfL8vLvk"/>
      <YouTube videoId="tA-lXi_SFvo"/>
      </div>
    );
  }
}

export default App;
