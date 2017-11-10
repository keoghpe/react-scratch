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

// class Tabs extends Component {
//   render() {
//     return (
//       <nav>
//         <ul>
//       {this.props.tabList.map(function(tab) {
//         return (
//           <Tab url={tab.url} name={tab.name} />
//         )
//       })}
//       </ul>
//       </nav>
//     )
//   }
// }
//
// class Tab extends Component {
//   render() {
//     return (
//         <li></li>
//     )
//   }
// }

// var tabList = [
//     { 'id': 1, 'name': 'Mike', 'url': '/mike' },
//     { 'id': 2, 'name': 'Donnie', 'url': '/donnie' },
//     { 'id': 3, 'name': 'Raph', 'url': '/raph' },
//     { 'id': 4, 'name': 'Leo', 'url': '/leo' }
// ];

class VideoSection extends Component {
  render() {
    return (
      <div>
      <YouTube
      videoId="NMXbfL8vLvk"
      onReady={this._onReady}
      />
      </div>
    )
  }

  _onReady(event){
    event.target.playVideo();
  }
}

// class VideoTab extends Component {
//   constructor(props) {
//     super(props);
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     alert('hello from ' + this.props.tabName);
//   }
//
//   render() {
//     return (
//       <div class="tab" onClick={this.handleClick}>
//       <span>{this.props.tabName}</span>
//       </div>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
      <section>
      <SocialIcons />
      </section>
      <section className="merchSection">
      <a href="https://thescratchmerch.bigcartel.com">
      <h2>Buy some scratchy merch</h2>
      <img src="merch-image.jpg" />
      <h2>Buy some scratchy merch</h2>
      </a>
      </section>
      <section>
      <VideoSection />
      </section>
      <section>
      <SpotifyPlayer
      uri="spotify:user:thescratchmusic:playlist:5mJfZYjTaFgElyLbGMuaxv"
      theme="white"/>
      </section>
      </div>
    );
  }
}

export default App;
