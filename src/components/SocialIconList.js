import React, { Component } from 'react';
import IconLink from "./IconLink";

class SocialIconList extends Component {
  render() {
  return (
    <div id="social_icons">
      <IconLink link="https://www.facebook.com/TheScratchMusic/" icon="fa fa-facebook"/>
      <IconLink link="https://www.instagram.com/thescratchmusic/" icon="fa fa-instagram"/>
      <IconLink link="https://www.youtube.com/channel/UCBNB4bpnfLTnxVJKrLUi0ow" icon="fa fa-youtube"/>
    </div>
  )
  }
}

export default SocialIconList;
