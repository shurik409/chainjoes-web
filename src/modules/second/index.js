import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FirstImg, SecondImg, ThirdImg, FourthImg } from "../../imgs/screen2";
import Smoke from "../../imgs/screen2_smoke.png";

const Second = () => {
  const [curentItem, setCurentItem] = useState(0);

  const texts = [
    {
      title: `Free gameplay`,
      img: FirstImg,
      description: `Chain Joes is a free Battle Arena game in crypto and memes setting that real gamers will love. Explore the stunningly designed ChainVerse and engage with unique characters. Enjoy high-quality visuals and battle a range of challenging enemies including Scammers, Spammers and Hackers to become a champion. Join the battle without any barrier! `,
    },
    {
      title: `Play & Earn system`,
      img: SecondImg,
      description: `Our Plan-And-Earn model evolved from the P2E framework and puts the focus back on providing real entertainment value to create a sustainable, open game economy.`,
      descriptionTwo: `With Play-to-Earn we aim to build value with gameplay. Providing a high entertainment value encourages players to keep playing, and to do so, they’ll want to get rewards they can spend in the game to improve their gameplay experience.`,
    },
    {
      title: `NFT assets`,
      img: ThirdImg,
      description: `Improve and Merge the NFT’s to increase their power and get the first positions in the competitions. `,
      descriptionTwo: `Our NFTs are not just collections, they deine the life of the game and the legacy of the players. `,
    },
    {
      title: `Ranked PvP system`,
      img: FourthImg,
      description: `The essence of the game revolves around PVP champs fighting each other in a ranked system to increase their rating.`,
      descriptionTwo: `The balance of the Ranked System, based on the Elo Rating system, will help the player find a team suitable for the level. Increase your rank and skill to reach the highest rank and earn more tokens for winning.`,
    },
  ];

  return (
    <Box
      sx={{
        background: `url(${Smoke})`,
        paddingTop: "181px",
        paddingBottom: "220px",
        position: "relative",
        backgroundPositionY: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ width: "540px", marginLeft: "80px" }}>
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
        >
          EXPLORE THE WORLD
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "115px",
          marginLeft: "80px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "3px",
            height: "510px",
            backgroundColor: "#A5a5a5",
            marginRight: "45px",
            marginTop: "-10px",
          }}
        >
          <Box
            sx={{
              width: "3px",
              height: "228px",
              backgroundColor: "#44F4C3",
              marginTop: `${curentItem * 94}px`,
            }}
          ></Box>
        </Box>
        <Box>
          {texts.map((item, index) => (
            <Box
              key={`secondScreen_items_${index}`}
              sx={{ marginTop: index ? "56px" : "", cursor: "pointer" }}
              onClick={() => setCurentItem(index)}
            >
              <Box>
                <Typography
                  fontFamily="Inter"
                  fontWeight={index === curentItem ? "500" : "300"}
                  fontSize="20px"
                  color={index === curentItem ? "#44F4C3" : "#FFFFFF"}
                >
                  {item.title}
                </Typography>
              </Box>
              {index === curentItem && (
                <Box>
                  <Box sx={{ width: "730px", marginTop: "25px" }}>
                    <Typography
                      fontFamily="Inter"
                      fontWeight="300"
                      fontSize="18px"
                      color="#ffffff"
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  {item.descriptionTwo && (
                    <Box sx={{ width: "730px", marginTop: "25px" }}>
                      <Typography
                        fontFamily="Inter"
                        fontWeight="300"
                        fontSize="18px"
                        color="#ffffff"
                      >
                        {item.descriptionTwo}
                      </Typography>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "175px",
        }}
      >
        <img
          src={`${texts[curentItem].img}`}
          alt={texts[curentItem].title}
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default Second;
