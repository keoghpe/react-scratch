import React, { Component } from 'react';
import IconLink from "./IconLink";

class StreamingIconList extends Component {
  render() {
    return (
      <div id="social_icons">
        <IconLink link="https://open.spotify.com/album/3MctXvWGZKZQDmSheN8Cgo?si=YP73sjryS-O1O5k5qaYxpA" icon="fa fa-spotify"/>
        <IconLink link="https://play.google.com/store/music/album/The_Scratch_Couldn_t_Give_a_Rats?id=Bx6oyf2uw2pixncy4qwjqkq3g4e&hl=en" icon="fab fa-google-play"/>
        <IconLink link="https://music.apple.com/ie/album/couldnt-give-a-rats/1503585257" icon="fa fa-apple"/>
      </div>
    )
  }
}

export default StreamingIconList;
