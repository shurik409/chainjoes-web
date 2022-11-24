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

const Footer = () => {
  const desktop1080Width = true;

  return (
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            background:
              "linear-gradient(194.18deg, #00FFB7 -32.14%, #005B42 105.84%)",
            paddingTop: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              paddingBottom: "40px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box sx={{ marginRight: "28px" }}>
                <Box sx={{ marginBottom: "28px", display: "flex" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Home
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box sx={{ marginBottom: "28px", display: "flex" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    FAQ
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Gameplay
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Box>
              <Box sx={{ marginRight: "28px" }}>
                <Box sx={{ marginBottom: "28px", display: "flex" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Litepaper
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box sx={{ marginBottom: "28px", display: "flex" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Characters
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    OnePage
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Box>
              <Box>
                <Box sx={{ marginBottom: "28px", display: "flex" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    IDO Strategy
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box sx={{ marginBottom: "28px", display: "flex" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    About
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Contact us
                  </Typography>
                  <img src={ArrowAngle} alt="arrow-angle" />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ marginRight: "28px" }}>
                <Box sx={{ marginBottom: "28px", display: "flex" }}>
                  <img src={Twitter} alt="twitter" />
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                  >
                    Twitter
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: { lg: "28px", xl: "0" },
                  }}
                >
                  <img src={Telegram} alt="telegram" />
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                  >
                    Telegram
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: { lg: "flex", xl: "none" },
                  }}
                >
                  <img src={TikTok} alt="tiktok" />
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                  >
                    Tik Tok
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginRight: "28px",
                  display: { lg: "none", xl: "block" },
                }}
              >
                <Box sx={{ marginBottom: "28px", display: "flex" }}>
                  <img src={TikTok} alt="tiktok" />
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                  >
                    Tik Tok
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <img src={Discord} alt="discord" />
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                  >
                    Discord
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: { lg: "flex", xl: "none" },
                    marginBottom: "28px",
                  }}
                >
                  <img src={Discord} alt="discord" />
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                  >
                    Discord
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "28px", display: "flex" }}>
                  <img src={Medium} alt="medium" />
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                  >
                    Medium
                  </Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <img src={LinkedIn} alt="linkedin" />
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                    marginLeft="8px"
                  >
                    LinkedIn
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              background: "#FFFFFF1A",
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
