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
} from "./modules";
import { Box } from "@mui/material";
import { getAllImage, getAllVideo } from "./allImage";
import PreLogoWebM from "./imgs/prelogo.webm";
import PreLogoMp4 from "./imgs/prelogo.mp4";

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
      video.preload = "metadata";
      video.muted = "true";
      video.autoplay = "true";
      video.onloadedmetadata = () => {
        console.log(src, " loaded");
        increaseProgres();
      };
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#000000",
              }}
            >
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
                  width: "100%",
                }}
              >
                <source src={PreLogoWebM} type="video/webm" />
                <source src={PreLogoMp4} type="video/mp4" />
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
