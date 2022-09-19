import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Header from "./components/header";
import Background from "../../imgs/first_screen.png";
import Scratches from "../../imgs/scratches.svg";
// import DiscordBtn from "../../imgs/discord_btn.png";
import GreenBtn from "../../imgs/green_btn.png";
import { DsLogo } from "./components/header/components/Icons";

const First = () => {
  const fullDesktop = useMediaQuery("(min-width: calc(1920px - 104px)");
  console.log(fullDesktop);

  return (
    <Box sx={{ position: "relative", height: "100vh" }}>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          background: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          backgroundSize: "cover",
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          background:
            "linear-gradient(111.64deg, #000000 9.79%, rgba(0, 0, 0, 0) 74.77%)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          marginLeft: "70px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Header />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: 800,
          marginTop: "120px",
          marginLeft: "80px",
        }}
      >
        <Box
          sx={{
            background: `url(${Scratches})`,
            height: "285px",
            width: "800px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></Box>
        <Typography
          fontFamily="Furore"
          fontSize="95px"
          color="#ffffff"
          lineHeight="95px"
        >
          WELCOME <br /> TO{" "}
          <Box sx={{ color: "#44F4C3", display: "inline" }}>
            CHAIN JOES WORLD
          </Box>
        </Typography>
      </Box>
      <Box sx={{ width: "590px", marginTop: "60px", marginLeft: "80px" }}>
        <Typography
          fontFamily="Inter"
          fontSize="24px"
          color="#ffffff"
          fontWeight="400"
          lineHeight="28.8px"
        >
          Chain Joes is an action-packed mobile game designed for the WEB3
          generation
        </Typography>
        <Typography
          fontFamily="Inter"
          fontSize="18px"
          color="#ffffff"
          fontWeight="300"
          lineHeight="21.8px"
          style={{ marginTop: "25px", width: 510 }}
        >
          Battle with each other to win and earn rewards through our
          Play-and-Earn mechanics and protect the community from Spammers,
          Scammers and Hackers to get unique rewards
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "60px",
          marginLeft: "80px",
          width: 288,
          height: 64,
          ":hover": {
            ".first_dsBtn": {
              transform: "translateY(-5px)",
            },
          },
        }}
      >
        <Box
          className="first_dsBtn"
          sx={{
            background: `url(${GreenBtn})`,
            cursor: "pointer",
            width: 288,
            height: 64,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <DsLogo color="#000000" />
            <Typography
              fontFamily="Inter"
              fontSize="16px"
              fontStyle="italic"
              fontWeight="400"
              textTransform="uppercase"
              color="#000000"
              style={{ marginLeft: "11px" }}
            >
              Join discord server
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default First;
