import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { FirstImg, SecondImg, ThirdImg } from "../../imgs/webp/screen4";
import { GoodPoint, BadPoint } from "../../imgs/webp/screen6";

const Activities = () => {
  const [activeYear, setActiveYear] = useState(0);
  const desktopBigWidth = useMediaQuery("(min-width: 1890px)");

  const desktopThreeWidth = useMediaQuery("(min-width: 1440px)");

  
  const desktop1080Width = true;
  // const desktop1080Width = useMediaQuery("(min-width: 1330px)");

  const tabletThreeWidth = useMediaQuery("(min-width: 1100px)");

  const tablet768Width = useMediaQuery("(min-width: 768px)");

  const roadMap = [
    {
      year: "2022",
      steps: [
        {
          title: "quarter 1",
          points: [
            {
              title: "Start Game Production",
              done: true,
            },
            {
              title: "Seed Raising",
              done: true,
            },
            {
              title: "Release Roadmap",
              done: true,
            },
          ],
        },
        {
          title: "quarter 2",
          points: [
            {
              title: "Game Ideation",
              done: false,
            },
            {
              title: "Defy Market Study ",
              done: false,
            },
            {
              title: "The Block NFT Gaming Consultation",
              done: true,
            },
            {
              title: "Game Development Team Formation",
              done: false,
            },
            {
              title: "BlockChain Team Formation",
              done: true,
            },
            {
              title: "Marketing Team Formation",
              done: false,
            },
          ],
        },
        {
          title: "quarter 3",
          points: [
            {
              title: "GDD Release",
              done: true,
            },
            {
              title: "Website Release",
              done: true,
            },
            {
              title: "Community Creation",
              done: true,
            },
          ],
        },
        {
          title: "quarter 4",
          points: [
            {
              title: "Characters Reveal",
              done: false,
            },
            {
              title: "Marketing Launch",
              done: false,
            },
            {
              title: "Private Sale",
              done: false,
            },
            {
              title: "Token Audit",
              done: false,
            },
          ],
        },
      ],
    },
    {
      year: "2023",
      steps: [
        {
          title: "quarter 1",
          points: [
            {
              title: "Start Game Production",
              done: false,
            },
            {
              title: "DEX Listing",
              done: false,
            },
            {
              title: "NFT Development",
              done: false,
            },
            {
              title: "Marketing Boost",
              done: false,
            },
          ],
        },
        {
          title: "quarter 2",
          points: [
            {
              title: "NFT Release",
              done: false,
            },
            {
              title: "NFT Sales",
              done: false,
            },
            {
              title: "DAO Development",
              done: false,
            },
            {
              title: "Game MVP Version Release",
              done: false,
            },
            {
              title: "Ambassador Program Launch",
              done: false,
            },
          ],
        },
        {
          title: "quarter 3",
          points: [
            {
              title: "Testnet Launch",
              done: false,
            },
            {
              title: "Closed Beta Test Launch",
              done: false,
            },
            {
              title: "DAO: Governance Platform Development",
              done: false,
            },
          ],
        },
        {
          title: "quarter 4",
          points: [
            {
              title: "DAO Launch",
              done: false,
            },
            {
              title: "Bug Bounty Program Release",
              done: false,
            },
            {
              title: "CEX Listing",
              done: false,
            },
          ],
        },
      ],
    },
    {
      year: "2024",
      steps: [
        {
          title: "quarter 1",
          points: [
            {
              title: "Cross-Chain Study",
              done: false,
            },
            {
              title: "Partnerships: Whales Welcome stage",
              done: false,
            },
            {
              title: "Community Events Release",
              done: false,
            },
          ],
        },
        {
          title: "quarter 2",
          points: [
            {
              title: "Mainnet Launch",
              done: false,
            },
            {
              title: "Game Alpha Launch",
              done: false,
            },
            {
              title: "Staking Launch",
              done: false,
            },
            {
              title: "Cross-Chain Development",
              done: false,
            },
          ],
        },
      ],
    },
  ];

  return (
    <Box>
      {desktop1080Width && (
        <Box>
          <Box sx={{ paddingTop: "80px", marginBottom: "200px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                fontFamily="Aaaiight"
                fontSize="80px"
                lineHeight="80px"
                color="#FFF"
              >
                activities
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "48px",
              }}
            >
              <Box
                sx={{
                  width: "570px",
                  height: "510px",
                  background:
                    "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                  marginRight: "30px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img src={FirstImg} alt="play" width="280px" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "28px",
                  }}
                >
                  <Typography
                    fontFamily="Aaaiight"
                    fontSize="32px"
                    lineHeight="32px"
                    color="#FFF"
                  >
                    play different modes
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "12px",
                  }}
                >
                  <Typography
                    fontSize="16px"
                    lineHeight="27.2px"
                    color="#FFF"
                    textAlign="center"
                  >
                    Explore classic deathmatch, battle royale,
                    <br />
                    meat grinder, capture the flag, duck hunt,
                    <br />
                    run the labyrinth and become a champ.
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    width: "570px",
                    height: "240px",
                    background:
                      "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                    marginBottom: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ marginRight: "16px", marginLeft: "32px" }}>
                    <img src={SecondImg} alt="play" width="160px" />
                  </Box>
                  <Box>
                    <Box>
                      <Typography
                        fontFamily="Aaaiight"
                        fontSize="24px"
                        lineHeight="24px"
                        color="#FFF"
                      >
                        create a Clan
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "8px",
                      }}
                    >
                      <Typography
                        fontSize="14px"
                        lineHeight="22.4px"
                        color="#FFF"
                      >
                        Unite with others to fight
                        <br />
                        more effectively.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "570px",
                    height: "240px",
                    background:
                      "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                    marginBottom: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ marginRight: "16px", marginLeft: "32px" }}>
                    <img src={ThirdImg} alt="play" width="160px" />
                  </Box>
                  <Box>
                    <Box>
                      <Typography
                        fontFamily="Aaaiight"
                        fontSize="24px"
                        lineHeight="33.05px"
                        color="#FFF"
                        maxWidth="330px"
                      >
                        Join weekly & seasonal activities & tournaments
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "8px",
                      }}
                    >
                      <Typography
                        fontSize="14px"
                        lineHeight="22.4px"
                        color="#FFF"
                        maxWidth="330px"
                      >
                        Participate in various quests and missions to receive
                        unique rewards and $CJ tokens.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                fontFamily="Aaaiight"
                fontSize="80px"
                lineHeight="80px"
                color="#FFF"
              >
                release roadmap
              </Typography>
            </Box>
            <Box
              sx={{
                background: "#121212",
                width: "270px",
                borderRadius: "4px",
                display: "flex",
                height: "40px",
                marginX: "auto",
                marginTop: "48px",
                marginBottom: "40px",
              }}
            >
              {roadMap.map((year, index) => (
                <Box
                  sx={{
                    width: "90px",
                    background:
                      index === activeYear
                        ? "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)"
                        : "",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => setActiveYear(index)}
                >
                  <Typography
                    fontSize="20px"
                    lineHeight="32px"
                    color={index === activeYear ? "#FFF" : "#646464"}
                    fontWeight={index === activeYear ? 600 : 400}
                  >
                    {year.year}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: "780px",
              }}
            >
              {roadMap.map((year, index) => (
                <Box sx={{ display: index === activeYear ? "block" : "none" }}>
                  <Box
                    sx={{ display: "flex", gap: "30px", marginBottom: "30px" }}
                  >
                    {year.steps.slice(0, 2).map((step, index) => (
                      <Box
                        sx={{
                          width: 570,
                          height: 334,
                          background: "#242424",
                          borderRadius: "8px",
                        }}
                      >
                        <Box sx={{ paddingTop: "32px", paddingLeft: "32px" }}>
                          <Typography
                            fontFamily="Aaaiight"
                            fontSize="24px"
                            lineHeight="33.05px"
                            color="#FFF"
                          >
                            {step.title}
                          </Typography>
                          <Box sx={{ marginTop: "20px" }}>
                            {step.points.map((point, index) => (
                              <Box
                                sx={{
                                  marginTop: index ? "20px" : 0,
                                  display: "flex",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: "12px",
                                    height: "16px",
                                    background: `url(${
                                      point.done ? GoodPoint : BadPoint
                                    })`,
                                    marginRight: "12px",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                />
                                <Typography
                                  fontSize="16px"
                                  lineHeight="19.36px"
                                  color="#FFF"
                                >
                                  {point.title}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "30px", marginBottom: "30px" }}
                  >
                    {year.steps.slice(2, 4).map((step, index) => (
                      <Box
                        sx={{
                          width: 570,
                          height: 334,
                          background: "#242424",
                          borderRadius: "8px",
                        }}
                      >
                        <Box sx={{ paddingTop: "32px", paddingLeft: "32px" }}>
                          <Typography
                            fontFamily="Aaaiight"
                            fontSize="24px"
                            lineHeight="33.05px"
                            color="#FFF"
                          >
                            {step.title}
                          </Typography>
                          <Box sx={{ marginTop: "20px" }}>
                            {step.points.map((point, index) => (
                              <Box
                                sx={{
                                  marginTop: index ? "20px" : 0,
                                  display: "flex",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: "12px",
                                    height: "16px",
                                    background: `url(${
                                      point.done ? GoodPoint : BadPoint
                                    })`,
                                    marginRight: "12px",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                />
                                <Typography
                                  fontSize="16px"
                                  lineHeight="19.36px"
                                  color="#FFF"
                                >
                                  {point.title}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Activities;
