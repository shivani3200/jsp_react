import React, { useRef } from "react";
import videoUrl from "../../video/video.mp4";

const VideoReference = () => {

  const videoRef = useRef();

  const playVideo = () => {
    videoRef.current.play();
  }

  const pauseVideo = () => {
    videoRef.current.pause();
  }

  const reLoadVideo = () => {
    videoRef.current.load();
  }
  return (
    <>
      <section>
        <aside>
          <video
            src={videoUrl}
            height="400px"
            width="600px"
            ref={videoRef}
          ></video>
        </aside>
        <aside>
            <button onClick={playVideo}>play</button>
            <button onClick={pauseVideo}>pause</button>
            <button onClick={reLoadVideo}>reload</button>
        </aside>
      </section>
    </>
  );
};

export default VideoReference;
