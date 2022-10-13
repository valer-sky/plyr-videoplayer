import React from "react";
import Plyr  from "plyr-react";
import "plyr-react/plyr.css";

import './App.scss';

const videoSrc = {
  
  type: "video",
  title: "Elephants",
  sources: [
    {
      src:
        "https://rawcdn.githack.com/chintan9/Big-Buck-Bunny/915c4b2aba75614b20dec3852375b394bb305f10/ElephantsDream.mp4",
      type: "video/mp4",
      size: 720
    },
   
     {
        src: 'bTqVqk7FSmY',
        provider: 'youtube',
      },
    
  ],
  tracks: [
    {
      kind: "captions",
      label: "Russian",
      srclang: "ru",
      src: "../subtitles/subtitles-ru.vtt",
      default: true
    },
    {
      kind: "captions",
      label: "English",
      srclang: "en",
      src: "../subtitles/subtitles-en.vtt",
      default: true
    }
  ],
  previewThumbnails: {
    enabled: true,
    src: ['https://cdn.plyr.io/static/demo/thumbs/100p.vtt', 'https://cdn.plyr.io/static/demo/thumbs/240p.vtt'],
  },
  tooltips: {
    controls: true,
  },
  mediaMetadata: {
    title: 'View From A Blue Moon',
    album: 'Sports',
    artist: 'Brainfarm',
    artwork: [
      {
        src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
        type: 'image/jpeg',
      },
    ],
  },
};

 const optionsVideoplayer = {
  quality: {
    default: 576,
    // The options to display in the UI, if available for the source media
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
    // forced: true,
    // onChange: null,
  },
  
 
  markers: {
    enabled: true,
    points: [
      {
        time: 15,
        tip: 'first marker',
      },
      {
        time: 23,
        tip: 'second marker',
      },
      {
        time: 31,
        tipHTML: '<strong>third</strong> marker',
      },
    ],
  },
  
  seekTime: 5,
 };

 const settings = ['captions', 'quality', 'speed']

 const controlsVideo = {
  i18n: {
    restart: 'Restart',
    rewind: 'Rewind {seektime} secs',
    play: 'Play',
    pause: 'Pause',
    fastForward: 'Forward {seektime} secs',
    seek: 'Seek',
    played: 'Played',
    buffered: 'Buffered',
    currentTime: 'Current time',
    duration: 'Duration',
    volume: 'Volume',
    mute: 'Mute',
    unmute: 'Unmute',
    enableCaptions: 'Enable captions',
    disableCaptions: 'Disable captions',
    enterFullscreen: 'Enter fullscreen',
    exitFullscreen: 'Exit fullscreen',
    frameTitle: 'Player for {title}',
    captions: 'Captions',
    settings: 'Settings',
    speed: 'Speed',
    normal: 'Normal',
    quality: 'Quality',
    loop: 'Loop',
    start: 'Start',
    end: 'End',
    all: 'All',
    reset: 'Reset',
    disabled: 'Disabled',
    advertisement: 'Ad',
}
 }
 
// console.log(videoSrc);
// learn more https://github.com/sampotts/plyr#the-source-setter

export default function App() {
  return (
    
    <div className = "wrapper">
      <h1>PLYR</h1>
      <MyComponent />
    </div>
  );
}

export const MyComponent = () => {
  return (
    <div className = "player">
      <Plyr options={optionsVideoplayer}  source={videoSrc}
      controls={controlsVideo} 
      
      settings= {settings}
      
      />
      
    </div>
  );
  
};

console.log(Plyr.options);
