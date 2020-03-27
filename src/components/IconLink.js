import React, { Component } from 'react';

class IconLink extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank">
        <i className={this.props.icon} aria-hidden="true"></i>
      </a>
    )
  }
}

export default IconLink;
