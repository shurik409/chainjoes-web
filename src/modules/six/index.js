import React from "react";
import { Box, Typography } from "@mui/material";
import {
  FirstPlane,
  SecondPlane,
  ThirdPlane,
  GoodPoint,
  BadPoint,
} from "../../imgs/screen6";

const Six = () => {
  const steps = [
    {
      title: "Q2 2022",
      good: [
        "Game ideation",
        "Defy market study",
        "The Block NFT gaming consultation",
        "Game development team formation",
        "BlockChain team formation",
        "Marketing team formation",
      ],
      img: FirstPlane,
    },
    {
      title: "Q3-Q4 2022",
      good: [
        "Official realese of the project",
        "Release of Game Design Document (GDD)",
        "Realease of website",
        "Realese of socials: Twitter, Discord, Telegram and Facebook",
      ],
      bad: ["Seed Raising", "Partnerships", "Onboarding Advisors"],
      img: SecondPlane,
    },
    {
      title: "Q1 2023",
      bad: ["Release Roadmap", "Release Whitepaper", "Start game production"],
      img: ThirdPlane,
    },
  ];

  return (
    <Box sx={{ height: "100vh", minHeight: "1000px", background: "#091015" }}>
      <Box sx={{ paddingTop: "180px", paddingLeft: "80px" }}>
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
          width="415px"
        >
          RELEASE ROADMAP
        </Typography>
      </Box>
      <Box sx={{ paddingLeft: "80px", marginTop: "128px" }}>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Box
            sx={{
              width: "calc(100% - 80px)",
              height: "1px",
              background:
                "linear-gradient(90deg, #FFFFFF 13.39%, rgba(255, 255, 255, 0) 109.9%)",
            }}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          {steps.map((step, index) => (
            <Box
              sx={{
                position: "relative",
                width: "355px",
                marginLeft: index ? "323px" : "",
              }}
              key={`screen-6-step-${index}`}
            >
              <Box
                sx={{
                  width: "296px",
                  height: "75px",
                  position: "absolute",
                  background: `url(${step.img})`,
                  top: 0,
                  left: 0,
                  transform: "translateY(-50%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  fontFamily="Inter"
                  fontWeight="400"
                  fontSize="24px"
                  color="#44F4C3"
                >
                  {step.title}
                </Typography>
              </Box>
              <Box sx={{ marginTop: "106px" }}>
                {step.good &&
                  step.good.map((item, goodIndex) => (
                    <Box
                      key={`screen-6-step-${index}-bad-${goodIndex}`}
                      sx={{ display: "flex" }}
                    >
                      <Box>
                        <Box
                          sx={{
                            width: "12px",
                            height: "21px",
                            background: `url(${GoodPoint})`,
                            marginRight: "34px",
                          }}
                        />
                      </Box>
                      <Typography
                        fontFamily="Inter"
                        fontWeight="300"
                        fontSize="18px"
                        color="#FFFFFF"
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                {step.bad &&
                  step.bad.map((item, badIndex) => (
                    <Box
                      key={`screen-6-step-${index}-bad-${badIndex}`}
                      sx={{ display: "flex" }}
                    >
                      <Box>
                        <Box
                          sx={{
                            width: "12px",
                            height: "21px",
                            background: `url(${BadPoint})`,
                            marginRight: "34px",
                          }}
                        />
                      </Box>
                      <Typography
                        fontFamily="Inter"
                        fontWeight="300"
                        fontSize="18px"
                        color="#FFFFFF"
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Six;
