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
      player.addEventListener(window.IVSPlayer.PlayerEventType.TEXT_METADATA_CUE,
          function (cue) {
            console.log('Timed metadata: ', cue.text);
            let text = document.getElementById('alert-text');
            if (cue.text.includes('covid')) {
              let nameString = cue.text.split('{')[1].slice(0, -1);
              console.log(nameString);
              text.innerHTML = 'Ooops, quarantine!!!' + nameString;
            } else {
              text.innerHTML = 'No Covid Risk Found. Enjoy your day!!';
            }
          }
      );
    }
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
