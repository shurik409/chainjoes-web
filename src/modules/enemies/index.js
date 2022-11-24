import React, { useState, useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { screen5 } from "../../imgs/webp/";
import { Swiper, SwiperSlide } from "swiper/react";
import Cross from "../../imgs/new/Cross.png";
import Login from "../../imgs/new/login.svg";
import Timer from "../../imgs/new/timer.svg";
import Video from "../../imgs/new/video.svg";
import Close from "../../imgs/new/close.svg";

import "swiper/css";

const Enemies = () => {
  const [curentItem, setCurentItem] = useState(0);
  const [curentProgress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  const texts = [
    {
      title: `Scammers`,
      description: `Scammers faction is based on hallucinations, illusions and fakes. The characters are very sneaky, selfish and ruthless. Some can be fast and loud, and some can be slow and persuasive. But don’t even think about getting caught by their tricks, otherwise you’re finished!`,
    },
    {
      title: `Hackers`,
      description: `Not numerous intelligent and technological formations that use small reprogrammed bots as cannon fodder. This faction is based on the strongest programming skills, technical skills and hacking. Protect yourself as much as possible!`,
    },
    {
      title: `Spammers`,
      description: `Spammers faction is based on fast and slashing movements, chaotic choice of targets, defiant and inappropriate behavior. It’s nearly impossible to dodge their attacks because you never know what the next target will be. 
      But you can try!`,
    },
  ];

  const desktop1080Width = true;
  // const desktop1080Width = useMediaQuery("(min-width: 1000px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");

  const desktop530Width = useMediaQuery(
    `(min-width: ${125 * texts.length + 30}px`
  );

  return (
    <Box>
      {desktop1080Width && (
        <Box sx={{ paddingY: "200px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                background: `#2E2E2E`,
                backgroundBlendMode: "soft-light, normal",
                width: 966,
                height: 618,
                backgroundSize: "cover",
                borderRadius: "8px",
                position: "absolute",
                zIndex: -1,
                transform: "translateX(-50%) rotate(5deg)",
                left: "50%",
                top: 0,
              }}
            ></Box>
            <Box
              sx={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${screen5})`,
                width: 966,
                height: 618,
                backgroundSize: "cover",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  fontFamily="Aaaiight"
                  fontSize="80px"
                  lineHeight="100%"
                  color="#FFF"
                >
                  Near future...
                </Typography>
              </Box>
              <Box sx={{ marginTop: "24px" }}>
                <Typography
                  color="#FFF"
                  textAlign="center"
                  fontSize="16px"
                  lineHeight="170%"
                >
                  Billions of citizens in existing metaverses now have access
                  <br /> to a new meta-jump technology. Using this technology,
                  <br />
                  you can move between any metaverse...
                </Typography>
              </Box>
              <Box sx={{ display: "flex", marginTop: "44px" }}>
                <Box
                  sx={{
                    width: "260px",
                    height: "60px",
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
                    fontSize="16px"
                    fontFamily="Inter"
                  >
                    Explore the full lore
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "260px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "2px",
                    border: "1px solid #868D8B",
                    marginRight: "16px",
                    cursor: "pointer",
                  }}
                >
                  <img src={Video} alt="login" />
                  <Typography
                    color="#868D8B"
                    fontWeight="600"
                    fontSize="16px"
                    fontFamily="Inter"
                    marginLeft="8px"
                  >
                    Watch teaser <sup>Coming Soon</sup>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box sx={{ position: "absolute", top: "-23%", left: "17%" }}>
                <img src={Cross} width="158px" alt="cross" />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "23%",
                  right: "5%",
                  transform: "rotate(30deg)",
                }}
              >
                <img src={Cross} width="82px" alt="cross" />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-23%",
                  left: "50%",
                  transform: "rotate(-21deg)",
                }}
              >
                <img src={Cross} width="49px" alt="cross" />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  background: "#464646",
                  paddingX: "20px",
                  paddingY: "10px",
                  borderRadius: "100px",
                  transform: "rotate(-30deg)",
                  top: "50%",
                  right: "17%",
                  display: "flex",
                }}
              >
                <img src={Close} alt="close" />
                <Typography marginLeft="8px" color="#FFF" fontWeight="500">
                  Without paying for gas
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  background: "#464646",
                  paddingX: "20px",
                  paddingY: "10px",
                  borderRadius: "100px",
                  transform: "rotate(30deg)",
                  top: "35%",
                  left: "21%",
                  display: "flex",
                }}
              >
                <img src={Timer} alt="close" />
                <Typography marginLeft="8px" color="#FFF" fontWeight="500">
                  In a second
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Enemies;
