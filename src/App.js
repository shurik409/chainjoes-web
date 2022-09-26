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
import PreLogoWebM from "./videos/prelogo.webm";
import PreLogoMp4 from "./videos/prelogo.mp4";
import Cookies from "js-cookie";

function App() {
  const [progres, setProgres] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPlayed, setIsPlayed] = useState(0);

  const increaseProgres = () => setProgres((prev) => prev + 1);

  useEffect(() => {
    const cook = Cookies.get("PreLogo");
    setIsPlayed(cook);
    getAllVideo().forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "metadata";
      video.muted = "true";
      video.autoplay = "true";
      video.oncanplaythrough = () => {
        increaseProgres();
      };
      video.onsuspend = () => increaseProgres();
    });
    getAllImage().forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => increaseProgres();
    });
  }, []);

  const prevideo = useCallback((node) => {
    if (node) {
      node.onended = () => {
        Cookies.set("PreLogo", 1);
        setIsPlaying(false);
      };
    }
  }, []);

  const getCurrentProgresPercent = () => {
    const percent = progres / (getAllImage().length + getAllVideo().length);

    return percent;
  };
  // console.log("progres: ", progres);
  return (
    <Box>
      {getCurrentProgresPercent() < 1 ? (
        <Loader progres={getCurrentProgresPercent()} />
      ) : (
        <>
          {isPlaying && !isPlayed ? (
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
