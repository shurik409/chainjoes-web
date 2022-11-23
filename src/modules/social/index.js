import React from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import {
  Linked,
  Discord,
  Medium,
  TikTok,
  Tg,
  Twitter,
  Logo,
  Scratches,
  ScratchesMobile,
} from "../../imgs/webp/screen9";
import Smoke from "../../imgs/smoke2x.png";

const Social = () => {
  const desktopFlexWidth = useMediaQuery("(min-width: 1200px)");
  
  const desktop1080Width = true;
  // const desktop1080Width = useMediaQuery("(min-width: 1000px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");
  return (
    <Box>
      {desktop1080Width && (
        <Box sx={{ paddingY: "80px" }}>
          <Box
            sx={{
              width: "970px",
              height: "520px",
              background:
                "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "auto",
            }}
          >
            <Typography
              fontFamily="Aaaiight"
              fontSize="80px"
              lineHeight="80px"
              color="#FFF"
              textAlign="center"
            >
              Join our
              <br />
              community
            </Typography>
            <Typography
              fontSize="18px"
              lineHeight="30.6px"
              color="#FFF"
              textAlign="center"
              marginTop="20px"
              marginBottom="40px"
            >
              To recieve our latest news, events and announcements first
            </Typography>
            <Box
              sx={{
                width: "280px",
                height: "64px",
                borderRadius: "2px",
                background: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize="20px"
                lineHeight="32px"
                fontWeight="600"
                color="#00A77B"
              >
                Join now
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Social;
