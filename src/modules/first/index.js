import React, { useEffect, useRef, useState } from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import Header from "./components/header";
import Background from "../../imgs/webp/screen1/first_screen_reverse.webp";
import MonkeyVideoWebM from "../../videos/monkey.webm";
import MonkeyVideoMp4 from "../../videos/monkey.mp4";
import Login from "../../imgs/new/login.svg";
import Document from "../../imgs/new/document.svg";

const First = () => {
  const refVideo = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!refVideo.current) {
      return;
    }
    if (!muted) {
      refVideo.current.defaultMuted = true;
      refVideo.current.muted = true;
      refVideo.current.play();
      setMuted(true);
    }
  });

  const desktop1080Width = true;

  return (
    <Box
      sx={{
        "@keyframes video": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "@keyframes header": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "@keyframes title": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "@keyframes description": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "@keyframes button": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      {desktop1080Width && (
        <Box sx={{ position: "relative", height: "100vh", paddingX: "135px" }}>
          <Box
            sx={
              {
                // animationName: "video",
                // animationDuration: "10s",
                // animationFillMode: "both",
                // animationDelay: "1s",
              }
            }
          >
            <video
              ref={refVideo}
              autoPlay="autoPlay"
              loop="loop"
              muted
              playsInline
              onContextMenu={() => false}
              preload="auto"
              id="vid"
              poster={Background}
              style={{
                objectFit: "cover",
                height: "100vh",
                width: "100%",
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: -1,
              }}
            >
              <source src={MonkeyVideoMp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              WebkitJustifyContent: "flex-end",
              animationName: "header",
              animationDuration: "2s",
              animationFillMode: "both",
            }}
          >
            <Header />
          </Box>
          <Box sx={{ marginTop: "150px" }}>
            <Typography
              color="#FFF"
              fontSize="105px"
              lineHeight="90%"
              fontFamily="Aaaiight"
            >
              Fight like
              <br />
              never before
            </Typography>
            <Box sx={{ marginTop: "24px" }}>
              <Typography color="#FFF" fontSize="20px" lineHeight="140%">
                Forget about P2E. Chain Joes is an action-packed
                <br />
                mobile game with new PLAY-AND-EARN model.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", marginTop: "52px" }}>
            <Box
              sx={{
                width: "280px",
                height: "68px",
                display: "flex",
                borderRadius: "2px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                background:
                  "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                marginRight: "24px",
              }}
            >
              <img src={Login} alt="login" />
              <Typography
                marginLeft="11px"
                color="#FFFFFF"
                fontWeight="600"
                fontSize="20px"
              >
                Join the Battle
              </Typography>
            </Box>
            <Box
              sx={{
                width: "280px",
                height: "68px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "2px",
                border: "1px solid",
                borderImageSlice: 1,
                borderImageSource:
                  "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                marginRight: "16px",
                cursor: "pointer",
              }}
            >
              <img src={Document} alt="document" />
              <Typography
                marginLeft="8px"
                color="#05D19B"
                fontWeight="600"
                fontSize="20px"
              >
                Read Litepaper
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default First;
