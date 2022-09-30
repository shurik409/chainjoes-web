import React, { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/system";
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
} from "../modules";
import Smoke from "../imgs/smoke.png";
import { getAllImage, getAllVideo } from "../allImage";
import PreLogoWebM from "../videos/prelogo.webm";
import PreLogoMp4 from "../videos/prelogo.mp4";
import Cookies from "js-cookie";

const Main = () => {
  const [progres, setProgres] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPlayed, setIsPlayed] = useState(0);

  const increaseProgres = () => setProgres((prev) => prev + 1);

  useEffect(() => {
    const cook = Cookies.get("PreLogo");
    setProgres(0);
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

  return (
    <>
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
              <Box
                sx={{
                  backgroundColor: "#070809",
                  backgroundImage: `url(${Smoke})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Nine />
                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    background:
                      "linear-gradient(268.99deg, rgba(0, 255, 183, 0) 1.98%, rgba(71, 255, 244, 0.722892) 32.41%, #FFFFFF 44.07%, rgba(0, 178, 255, 0.55) 60.3%, rgba(0, 255, 183, 0) 98.28%)",
                  }}
                />
                <Ten />
              </Box>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Main;
