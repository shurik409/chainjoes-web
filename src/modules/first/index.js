import React, { useEffect, useRef, useState } from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./components/header";
import Background from "../../imgs/webp/screen1/first_screen_reverse.webp";
import MonkeyVideoWebM from "../../videos/monkey.webm";
import MonkeyVideoMp4 from "../../videos/monkey.mp4";
import Login from "../../imgs/new/login.svg";
import Document from "../../imgs/new/document.svg";
import CloseBtn from "../../imgs/new/close-btn.svg";

const First = () => {
  const refVideo = useRef(null);
  const [muted, setMuted] = useState(false);
  const [isBanner, setIsBanner] = useState(true);
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

  const handleClose = (e) => {
    e.preventDefault();
    setIsBanner(false);
  };

  const desktop1080Width = true;

  return (
    <Box>
      <Box
        sx={{
          paddingY: { xs: "16px", md: "12px" },
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          position: "absolute",
          width: "100%",
          top: isBanner ? 0 : { xs: "-120px", md: "-80px" },
          zIndex: 100,
          transition: "top 0.2s ease-in-out",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            fontSize: { xs: "12px" },
            lineHeight: { xs: "12px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            maxWidth: { xs: "175px", md: "100%" },
            margin: { xs: "auto", md: 0 },
            textAlign: "center",
          }}
        >
          <Typography
            color="#FFF"
            fontFamily="Inter"
            style={{ fontSize: "inherit", lineHeight: "inherit" }}
          >
            Private sale starts in 30 days. Be first to participate
          </Typography>
          <Box
            sx={{
              padding: { xs: "10px 16px" },
              marginLeft: { md: "12px" },
              marginTop: { xs: "12px", md: 0 },
              borderRadius: "2px",
              background:
                "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
            }}
          >
            <Typography
              color="#FFF"
              fontFamily="Inter"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Explore IDO strategy
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "13px", md: "50%" },
            transform: { md: "translateY(-50%)" },
            right: { xs: "8px", md: "135px" },
            cursor: "pointer",
          }}
          onClick={(e) => handleClose(e)}
        >
          <img src={CloseBtn} alt="close-btn" width="20px" />
        </Box>
      </Box>
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
              paddingTop: "60px",
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
