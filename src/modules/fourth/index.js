import React from "react";
import { Box, Typography } from "@mui/material";
import {
  FirstImg,
  SecondImg,
  ThirdImg,
  FirstMask,
  SecondMask,
  ThirdMask,
  Smoke,
} from "../../imgs/screen4";

const Fourth = () => {
  const activities = [
    {
      title: "Play different modes",
      description:
        "Expolre classic deathmatch, battle royale, meat grinder, capture the flag duck hunt, run the labyrinth and become a champ.",
      img: FirstImg,
      mask: FirstMask,
      height: "400px",
      transformX: "-51%",
      transformY: "-54%",
    },
    {
      title: "Create clan",
      description: "United to fight the opponents more effectively.",
      img: SecondImg,
      mask: SecondMask,
      height: "410px",
      transformX: "-50%",
      transformY: "-61%",
    },
    {
      title: "Join weekly, seasons activities & tournaments",
      description:
        "Participate in various quests and missions to receive unique rewards and $CJs tokens.",
      img: ThirdImg,
      mask: ThirdMask,
      height: "400px",
      transformX: "-51%",
      transformY: "-55%",
    },
  ];

  return (
    <Box
      sx={{
        height: "825px",
        background: `url(${Smoke})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: "175px",
        paddingLeft: "80px",
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
          Activities
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "92px",
        }}
      >
        {activities.map((item, index) => (
          <Box
            sx={{
              width: "528px",
              height: item.height,
              background: `url(${item.mask})`,
              backgroundRepeat: "no-repeat",
              paddingLeft: "45px",
              position: "relative",
              marginLeft: index ? "20px" : "",
            }}
          >
            <Typography
              fontFamily="Furore"
              fontSize="26px"
              color="#44F4C3"
              marginTop="45px"
              lineHeight="28.6px"
            >{`[0${index + 1}]`}</Typography>
            <Typography
              fontFamily="Inter"
              fontSize="26px"
              fontWeight="500"
              color="#FFFFFF"
              width="310px"
              marginTop="15px"
              lineHeight="28.6px"
            >
              {item.title}
            </Typography>
            <Typography
              fontFamily="Inter"
              fontSize="18px"
              fontWeight="300"
              color="#FFFFFF"
              width="400px"
              marginTop="15px"
              lineHeight="21.8px"
            >
              {item.description}
            </Typography>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: `translate(${item.transformX}, ${item.transformY})`,
                top: "100%",
              }}
            >
              <img src={`${item.img}`} alt={item.title} loading="lazy" />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Fourth;
