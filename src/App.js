import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  
    componentDidMount() {

    const PLAYBACK_URL = 'https://3eda70444b8a.us-west-2.playback.live-video.net/api/video/v1/us-west-2.135709585800.channel.TyrzzzBD9Z8t.m3u8';

    // Register Amazon IVS as playback technology for Video.js
    registerIVSTech(videojs);

    // Initialize player
    const player = videojs('amazon-ivs-videojs', {
      techOrder: ["AmazonIVS"]
    }, () => {
      console.log('Player is ready to use!');
      // Play stream
      player.src(PLAYBACK_URL);
    })
  }
  
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is our fist demo html for SA launch.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
