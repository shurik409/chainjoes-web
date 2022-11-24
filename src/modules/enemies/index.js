import React from "react";
import { Box, Typography } from "@mui/material";
import { screen5 } from "../../imgs/webp/";
import Cross from "../../imgs/new/Cross.png";
import Login from "../../imgs/new/login.svg";
import Timer from "../../imgs/new/timer.svg";
import Video from "../../imgs/new/video.svg";
import Close from "../../imgs/new/close.svg";

import "swiper/css";

const Enemies = () => {
  const desktop1080Width = true;

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
                width: { lg: 740, xl: 966 },
                height: { lg: 470, xl: 618 },
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
                width: { lg: 740, xl: 966 },
                height: { lg: 470, xl: 618 },
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
                  lineHeight="80px"
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
                  fontFamily="Inter"
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
              <Box
                sx={{
                  position: "absolute",
                  top: { lg: "-32%", xl: "-23%" },
                  left: { lg: "1%", xl: "17%" },
                }}
              >
                <img src={Cross} width="158px" alt="cross" />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "23%",
                  right: { lg: "2%", xl: "5%" },
                  transform: "rotate(30deg)",
                }}
              >
                <img src={Cross} width="82px" alt="cross" />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-23%",
                  left: { lg: "30%", xl: "50%" },
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
                  top: { lg: "110%", xl: "50%" },
                  right: { lg: "2%", xl: "17%" },
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
                  left: { lg: "3%", xl: "21%" },
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
