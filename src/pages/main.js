import React, { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  First,
  Enemies,
  Explore,
  Activities,
  Social,
  Footer,
  // Loader,
} from "../modules";
import { getAllImage, getAllVideo } from "../allImage";
import PreLogoWebM from "../videos/prelogo.webm";
import PreLogoMp4 from "../videos/prelogo.mp4";
import Cookies from "js-cookie";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

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
    <Box sx={{ overflowX: "hidden" }}>
      <ThemeProvider theme={theme}>
        <First />
        <Enemies />
        <Explore />
        <Activities />
        <Social />
        <Footer />
      </ThemeProvider>
    </Box>
  );
};

export default Main;
