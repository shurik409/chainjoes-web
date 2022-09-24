import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const Loader = ({ progres }) => {
  const desktop1080Width = useMediaQuery("(min-width: 1000px");

  const desktop768Width = useMediaQuery("(min-width: 768px");

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
    <Box
      sx={{ backgroundColor: "#000000", height: "100vh" }}
      className="preloadScreen"
    >
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
          fontSize={desktop768Width ? "40px" : "17px"}
          color="#FFFFFF"
        >
          {Math.floor(progres * 100)}%
        </Typography>
        <Box
          sx={{
            width: desktop1080Width
              ? "563px"
              : desktop768Width
              ? "400px"
              : "200px",
            height: 0,
            border: "2px solid #FFFFFF59",
            position: "relative",
            marginTop: "40px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              width: desktop1080Width
                ? `${563 * progres}px`
                : desktop768Width
                ? `${400 * progres}px`
                : `${200 * progres}px`,
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
            fontSize={desktop768Width ? "18px" : "16px"}
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
