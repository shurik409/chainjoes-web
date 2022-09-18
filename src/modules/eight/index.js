import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
} from "../../imgs/screen8";

const Eight = () => {
  return (
    <Box
      sx={{
        padding: "165px 80px 180px 80px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: '#091015'
      }}
    >
      <Box>
        <Typography
          fontFamily="Furore"
          fontSize="75px"
          color="#ffffff"
          lineHeight="75px"
          style={{
            textFillColor: "transparent",
            backgroundcolor: "primary",
            backgroundImage:
              "linear-gradient(180.16deg, #FFFFFF 0.14%, rgba(255, 255, 255, 0) 186.06%)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          textTransform="uppercase"
        >
          OUR PARTNERS
        </Typography>
      </Box>
      <Box sx={{ width: "822px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src={`${Partner1}`} alt="Pay accept" loading="lazy" />
          <img src={`${Partner2}`} alt={"Red Rift"} loading="lazy" />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src={`${Partner3}`} alt="Tamashi" loading="lazy" />
          <img src={`${Partner4}`} alt={"Damnn"} loading="lazy" />
          <img src={`${Partner5}`} alt={"Moonraised"} loading="lazy" />
        </Box>
      </Box>
    </Box>
  );
};

export default Eight;
