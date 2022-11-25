import React, { useState } from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowAngle from "../../imgs/new/arrow-angle.svg";
import Twitter from "../../imgs/new/twitter.svg";
import Telegram from "../../imgs/new/telegram.svg";
import TikTok from "../../imgs/new/tiktok.svg";
import Discord from "../../imgs/new/discord.svg";
import Medium from "../../imgs/new/medium.svg";
import LinkedIn from "../../imgs/new/linkedin-logo.svg";
import Noise from "../../imgs/new/noise.png";

const Footer = () => {
  const desktop1080Width = true;

  return (
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            background: `url(${Noise}) 0 0/4% 30%, linear-gradient(194.18deg, #00FFB7 -32.14%, #005B42 105.84%)`,
            backgroundBlendMode: "soft-light, normal",
            paddingTop: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", md: "space-around" },
              alignItems: { xs: "center", md: "normal" },
              flexDirection: { xs: "column", md: "row" },
              paddingBottom: "40px",
              fontSize: { xs: "12px", md: "20px" },
              lineHeight: { xs: "12px", md: "24.2px" },
              "& img": {
                width: { xs: "16px", md: "24px" },
              },
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box sx={{ marginRight: "28px" }}>
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Home
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    FAQ
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box
                  sx={{ display: "flex", marginBottom: { xs: "28px", lg: 0 } }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Gameplay
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box sx={{ display: { xs: "block", lg: "none" } }}>
                  <Box
                    sx={{
                      marginBottom: { xs: "20px", md: "28px" },
                      display: "flex",
                    }}
                  >
                    <Typography
                      fontWeight="500"
                      color="#FFF"
                      fontFamily="Inter"
                      style={{ fontSize: "inherit", lineHeight: "inherit" }}
                    >
                      Litepaper
                    </Typography>
                    <img src={ArrowAngle} alt="arrow-angle" />
                  </Box>
                  <Box
                    sx={{
                      marginBottom: { xs: "20px", md: "28px" },
                      display: "flex",
                    }}
                  >
                    <Typography
                      fontWeight="500"
                      color="#FFF"
                      fontFamily="Inter"
                      style={{ fontSize: "inherit", lineHeight: "inherit" }}
                    >
                      Characters
                    </Typography>
                    <img src={ArrowAngle} alt="arrow-angle" />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginRight: "28px",
                  display: { xs: "none", lg: "block" },
                }}
              >
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Litepaper
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Characters
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    OnePage
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    marginBottom: { xs: "28px", lg: 0 },
                    display: { xs: "flex", lg: "none" },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    OnePage
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    IDO Strategy
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                  }}
                >
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    About
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Contact us
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ marginRight: "28px" }}>
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                  }}
                >
                  <img src={Twitter} alt="twitter" />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Twitter
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: { xs: "28px", xl: "0" },
                  }}
                >
                  <img src={Telegram} alt="telegram" />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Telegram
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: { xs: "flex", xl: "none" },
                  }}
                >
                  <img src={TikTok} alt="tiktok" />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Tik Tok
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginRight: "28px",
                  display: { xs: "none", xl: "block" },
                }}
              >
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                  }}
                >
                  <img src={TikTok} alt="tiktok" />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Tik Tok
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <img src={Discord} alt="discord" />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Discord
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: { xs: "flex", xl: "none" },
                    marginBottom: { xs: "20px", md: "28px" },
                  }}
                >
                  <img src={Discord} alt="discord" />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Discord
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginBottom: { xs: "20px", md: "28px" },
                    display: "flex",
                  }}
                >
                  <img src={Medium} alt="medium" />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    Medium
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <img src={LinkedIn} alt="linkedin" />
                  <Typography
                    fontWeight="500"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                    style={{ fontSize: "inherit", lineHeight: "inherit" }}
                  >
                    LinkedIn
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              background: `#FFFFFF1A`,
              paddingY: "16px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "#FFF 1px solid",
                borderRadius: "14px",
                height: "28px",
                width: "105px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize="12px"
                lineHeight="12px"
                fontFamily="Inter"
                color="#FFF"
              >
                Production by
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography
                fontSize="12px"
                lineHeight="12px"
                fontFamily="Inter"
                color="#FFF"
                marginRight="24px"
              >
                Privacy Policy
              </Typography>
              <Typography
                fontSize="12px"
                lineHeight="12px"
                fontFamily="Inter"
                color="#FFF"
              >
                Terms of Service
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
