import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import {
  First,
  Second,
  Third,
  Fourth,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Loader,
  PreVideo,
} from "./modules";
import { Box } from "@mui/material";
import { getAllImage, getAllVideo } from "./allImage";
import PreLogo from "./imgs/prelogo.webm";

function App() {
  const [progres, setProgres] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  // const prevideo = useRef(null);

  const increaseProgres = () => setProgres((prev) => prev + 1);

  useEffect(() => {
    // console.log("getAllImage.length", getAllImage().length);
    getAllImage().forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => increaseProgres();
    });
    getAllVideo().forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.onloadeddata = () => increaseProgres();
    });
  }, []);

  // useEffect(() => {
  //   if (!prevideo.current) {
  //     return;
  //   }
  //   console.log(123123);
  //   prevideo.current.onended = () => console.log("End");
  //   console.log(prevideo.current.onended);
  // }, [prevideo]);

  const prevideo = useCallback((node) => {
    if (node) {
      node.onended = () => setIsPlaying(false);
    }
  }, []);

  const getCurrentProgresPercent = () => {
    const percent = progres / (getAllImage().length + getAllVideo().length);

    return percent;
  };
  console.log("progres: ", progres);
  return (
    <Box>
      {getCurrentProgresPercent() < 1 ? (
        <Loader progres={getCurrentProgresPercent()} />
      ) : (
        <>
          {isPlaying ? (
            <Box>
              <video
                ref={prevideo}
                autoPlay="autoPlay"
                muted
                playsInline
                onContextMenu={() => false}
                preload="auto"
                id="vid"
                style={{
                  objectFit: "cover",
                  height: "100vh",
                  width: "100%",
                }}
              >
                <source src={PreLogo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </Box>
          ) : (
            <>
              <First />
              <Second />
              <Third />
              <Fourth />
              <Five />
              <Six />
              <Seven />
              <Eight />
              <Nine />
              <Ten />
            </>
          )}
        </>
      )}
    </Box>
  );
}

export default React.memo(App);
