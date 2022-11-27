import React from "react";
import { Box, Link, Typography } from "@mui/material";
import Login from "../../imgs/new/login-green.svg";
import Noise from "../../imgs/new/noise.png";
import Circle from "../../imgs/new/backIcons/circles2.svg";
import Cross from "../../imgs/new/Cross.png";

const Social = () => {
  const desktop1080Width = true;

  return (
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            paddingY: "80px",
            marginTop: { xs: "30px", md: "80px", xl: 0 },
            position: "relative",
            marginBottom: "180px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: { xs: "4%", lg: "4%", xl: "10%" },
              top: { xs: "0", md: "-5%", xl: "10%" },
              "& > .cross": {
                width: { xs: 60, md: 100 },
              },
            }}
          >
            <img className="cross" src={Cross} alt="cross" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: { xs: "4%", xl: "10%" },
              bottom: { xs: "0", md: "-5%", xl: "-20%" },
              "& > .cross": {
                width: { xs: 60, md: 100 },
              },
            }}
          >
            <img className="cross" src={Cross} alt="cross" />
          </Box>
          <Box
            sx={{
              width: { xs: "280px", md: "620px", lg: "740px", xl: "970px" },
              height: { xs: "306px", md: "475px", xl: "520px" },
              backgroundBlendMode: "soft-light, normal",
              background: `url(${Noise}) 0 0/30% 30%,linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "auto",
              borderRadius: "8px",
              fontSize: { xs: "32px", md: "80px" },
              lineHeight: { xs: "32px", md: "80px" },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%)",
                height: "100%",
                "& > img": {
                  height: "100%",
                },
              }}
            >
              <img src={Circle} alt="circles" />
            </Box>
            <Typography
              fontFamily="Aaaiight"
              color="#FFF"
              textAlign="center"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              Join our
              <br />
              community
            </Typography>
            <Box
              sx={{
                marginTop: { xs: "8px", md: "20px" },
                marginBottom: { xs: "24px", md: "40px" },
                fontSize: { xs: "12px", md: "18px" },
                lineHeight: { xs: "19.2px", md: "30.6px" },
                maxWidth: { xs: "182px", md: "100%" },
              }}
            >
              <Typography
                color="#FFF"
                textAlign="center"
                style={{ fontSize: "inherit", lineHeight: "inherit" }}
              >
                To recieve our latest news, events and announcements first
              </Typography>
            </Box>

            <Link
              href="https://discord.com/invite/chainjoes"
              target="_blank"
              underline="none"
            >
              <Box
                sx={{
                  width: { xs: "240px", md: "280px" },
                  height: { xs: "52px", md: "64px" },
                  borderRadius: "2px",
                  background: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: { xs: "14px", md: "20px" },
                  lineHeight: { xs: "14px", md: "32px" },
                }}
              >
                <img src={Login} alt="login" />
                <Typography
                  marginLeft="8px"
                  fontWeight="600"
                  color="#00A77B"
                  style={{ fontSize: "inherit", lineHeight: "inherit" }}
                >
                  Join now
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Social;
