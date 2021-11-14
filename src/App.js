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
    if (window.IVSPlayer && window.IVSPlayer.isPlayerSupported) {
      console.log('ivsplayer supported');
      const player = window.IVSPlayer.create();
      player.attachHTMLVideoElement(document.getElementById('video-player'));
      player.load(PLAYBACK_URL);
      player.play();
    }
    
        // Log and display timed metadata
    ivsPlayer.addEventListener(PlayerEventType.TEXT_METADATA_CUE, (cue) => {
      const metadataText = cue.text;
      const position = ivsPlayer.getPosition().toFixed(2);
      console.log(
          `Player Event - TEXT_METADATA_CUE: "${metadataText}". Observed ${position}s after playback started.`
      );
  }

  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <video id="video-player" playsinline></video>
          <p>
            This is our first demo html for SA launch.
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
