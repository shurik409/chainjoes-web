import React from "react";
import { Box, Typography } from "@mui/material";

const Loader = ({ progres }) => {
  const getText = () => {
    if (Math.floor(progres * 100) < 33) {
      return "Loading ammunition...";
    } else if (Math.floor(progres * 100) < 66) {
      return "Exploration of new metaverses...";
    } else if (Math.floor(progres * 100) <= 100) {
      return "Generating races...";
    }
  };
  return (
    <Box sx={{ backgroundColor: "#000000", height: "100vh" }} className="preloadScreen">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Typography
          fontFamily="Inter"
          fontWeight="400"
          fontSize="40px"
          color="#FFFFFF"
        >
          {Math.floor(progres * 100)}%
        </Typography>
        <Box
          sx={{
            width: "563px",
            height: 0,
            border: "2px solid #FFFFFF59",
            position: "relative",
            marginTop: "40px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              width: `${563 * progres}px`,
              height: 0,
              border: "3px solid #FFFFFF",
              position: "relative",
              marginTop: "-2px",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box
          sx={{
            marginTop: "40px",
          }}
        >
          <Typography
            fontFamily="Inter"
            fontWeight="400"
            fontSize="18px"
            color="#FFFFFF"
            style={{ opacity: 0.4 }}
          >
            {getText()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Loader;
