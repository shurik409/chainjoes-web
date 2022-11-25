import React, { useEffect, useRef, useState } from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            paddingX: { xs: "20px", md: "34px", lg: "66px", xl: "135px" },
          }}
        >
          <Box>
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
          <Box
            sx={{
              marginTop: { xs: "93px", md: "150px" },
              textAlign: { xs: "center", lg: "left" },
              fontSize: { xs: "42px", md: "105px" },
              lineHeight: { xs: "39.6px", md: "90%" },
            }}
          >
            <Typography
              color="#FFF"
              fontFamily="Aaaiight"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Fight like
              <br />
              never before
            </Typography>
            <Box
              sx={{
                marginTop: "24px",
                fontSize: { xs: "12px", md: "20px" },
                lineHeight: { xs: "19.2px", md: "140%" },
                display: { xs: "none", md: "block" },
              }}
            >
              <Typography
                color="#FFF"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
                fontFamily="inter"
              >
                Forget about P2E. Chain Joes is an action-packed
                <br />
                mobile game with new PLAY-AND-EARN model.
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "24px",
                fontSize: { xs: "12px", md: "20px" },
                lineHeight: { xs: "19.2px", md: "140%" },
                display: { xs: "block", md: "none" },
              }}
            >
              <Typography
                color="#FFF"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
                fontFamily="inter"
              >
                Forget about P2E. Chain Joes <br />
                is an action-packed mobile game <br />
                with new PLAY-AND-EARN model.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "52px",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { md: "center", lg: "normal" },
            }}
          >
            <Box
              sx={{
                width: "280px",
                height: { xs: "52px", md: "68px" },
                display: "flex",
                borderRadius: "2px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                background:
                  "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                marginRight: "24px",
                fontWeight: { xs: 500 },
                fontSize: { xs: "14px", md: "20px" },
              }}
            >
              <img src={Login} alt="login" />
              <Typography
                marginLeft="11px"
                color="#FFFFFF"
                fontFamily="Inter"
                style={{ fontWeight: "inherit", fontSize: "inherit" }}
              >
                Join the Battle
              </Typography>
            </Box>
            <Box
              sx={{
                width: "280px",
                height: { xs: "52px", md: "68px" },
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
                marginTop: { xs: "12px", md: 0 },
                fontWeight: { xs: 500 },
                fontSize: { xs: "14px", md: "20px" },
              }}
            >
              <img src={Document} alt="document" />
              <Typography
                marginLeft="8px"
                color="#05D19B"
                fontWeight="600"
                fontFamily="Inter"
                style={{ fontWeight: "inherit", fontSize: "inherit" }}
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
