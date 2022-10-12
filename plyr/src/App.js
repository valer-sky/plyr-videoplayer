import React from "react";
import {Plyr} from "plyr-react";
import "plyr-react/dist/plyr.css";

const videoSrc = {
  type: "video",
  title: "Elephants Dream",
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
      src: "/subtitles-rus.vtt",
      default: true
    },
    {
      kind: "captions",
      label: "English",
      srclang: "en",
      src: "/subtitles-en.vtt",
      default: true
    }
  ],
  quality: {
     default: 576,
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] 
  },
  markers: {
    enabled: true,
    points: [
      {
        time: 10,
        label: 'first marker',
      },
      {
        time: 20,
        label: 'second marker',
      },
      {
        time: 30,
        label: '<strong>third</strong> marker',
      },
    ],
  },
};

console.log(videoSrc);
// learn more https://github.com/sampotts/plyr#the-source-setter

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export const MyComponent = () => {
  return (
    <>
      <Plyr source={videoSrc} />
    </>
  );
};
