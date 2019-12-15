import React, { Component } from 'react';
import YouTube from 'react-youtube';

class VideoSection extends Component {
  render() {
    return (
      <div>
      <YouTube
      videoId="dfKuN7SJiKc"
      onReady={this._onReady}
      />
      </div>
    )
  }

  _onReady(event){
    event.target.playVideo();
  }
}

export default VideoSection;
