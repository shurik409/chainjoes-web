import React, { useState } from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const desktop1080Width = true;
  // const desktop1080Width = useMediaQuery("(min-width: 1000px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");

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
                <Box sx={{ marginBottom: "28px" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Home
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "28px" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    FAQ
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Gameplay
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginRight: "28px" }}>
                <Box sx={{ marginBottom: "28px" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Litepaper
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "28px" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Characters
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    OnePage
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box sx={{ marginBottom: "28px" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    IDO Strategy
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "28px" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    About
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Contact us
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ marginRight: "28px" }}>
                <Box sx={{ marginBottom: "28px" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Twitter
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Tellegram
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginRight: "28px" }}>
                <Box sx={{ marginBottom: "28px" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Tik Tok
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Discord
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box sx={{ marginBottom: "28px" }}>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
                  >
                    Medium
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="24.2px"
                    color="#FFF"
                    fontFamily="Inter"
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
