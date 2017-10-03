import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default App;
