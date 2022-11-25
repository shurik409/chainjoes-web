import React from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import Login from "../../imgs/new/login-green.svg";
import Noise from "../../imgs/new/noise.png";

const Social = () => {
  const desktop1080Width = true;

  return (
    <Box>
      {desktop1080Width && (
        <Box sx={{ paddingY: "80px" }}>
          <Box
            sx={{
              width: { md: "620px", lg: "740px", xl: "970px" },
              height: { md: "475px", xl: "520px" },
              backgroundBlendMode: "soft-light, normal",
              background: `url(${Noise}) 0 0/30% 30%,linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "auto",
              borderRadius: "8px",
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
              <img src={Login} alt="login" />
              <Typography
                marginLeft="8px"
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
