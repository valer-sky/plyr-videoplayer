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
  quality: {
    default: 576,
    // The options to display in the UI, if available for the source media
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
    // forced: true,
    // onChange: null,
  },
  seekTime: 5,
  settings: ['captions', 'quality', 'speed'],

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
};

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
      <Plyr source={videoSrc} />
      
    </div>
  );
};
console.log(Plyr);
