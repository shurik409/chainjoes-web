import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const Loader = ({ progres }) => {
  const desktop1080Width = useMediaQuery("(min-width: 1000px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");

  const getText = () => {
    if (Math.floor(progres * 100) < 33) {
      return "Looking for web3 enemies";
    } else if (Math.floor(progres * 100) < 66) {
      return "Kicking their asses";
    } else if (Math.floor(progres * 100) <= 100) {
      return "Get your reward!";
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
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
          fontWeight="500"
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
            height: 8,
            background: "rgba(255, 255, 255, 0.1)",
            position: "relative",
            marginTop: "40px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: desktop1080Width
                ? `${563 * progres}px`
                : desktop768Width
                ? `${400 * progres}px`
                : `${200 * progres}px`,
              height: 8,
              background:
                "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
              position: "relative",
              borderRadius: "4px",
            }}
          />
        </Box>
        <Box
          sx={{
            marginTop: "40px",
          }}
        >
          <Typography
            fontFamily="Aaaiight"
            fontWeight="400"
            fontSize={desktop768Width ? "32px" : "20px"}
            color="#FFFFFF"
          >
            {getText()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Loader;
