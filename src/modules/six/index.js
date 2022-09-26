import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { FirstPlane, GoodPoint, BadPoint } from "../../imgs/webp/screen6";

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
      img: FirstPlane,
    },
    {
      title: "Q1 2023",
      bad: ["Release Roadmap", "Release Whitepaper", "Start game production"],
      img: FirstPlane,
    },
  ];

  const desktop1080Width = useMediaQuery("(min-width: 1200px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");

  return (
    <Box>
      {desktop1080Width && (
        <Box sx={{ padding: "180px 0 180px 80px", background: "#091015" }}>
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
              width="415px"
            >
              RELEASE ROADMAP
            </Typography>
          </Box>
          <Box sx={{ marginTop: "128px" }}>
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
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {steps.map((step, index) => (
                <Box
                  sx={{
                    position: "relative",
                    minWidth: "371px",
                    // marginLeft: index ? "323px" : "",
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
                          sx={{
                            display: "flex",
                            marginTop: goodIndex ? "15px" : "",
                          }}
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
                            maxWidth="361px"
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    {step.bad &&
                      step.bad.map((item, badIndex) => (
                        <Box
                          key={`screen-6-step-${index}-bad-${badIndex}`}
                          sx={{
                            display: "flex",
                            marginTop: badIndex || step.good ? "15px" : "",
                          }}
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
                            textTransform="capitalize"
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
      )}
      {desktop768Width && !desktop1080Width && (
        <Box sx={{ padding: "100px 0 110px 0", backgroundColor: "#000000" }}>
          <Box sx={{ paddingLeft: "25px" }}>
            <Typography
              fontFamily="Furore"
              fontSize="60px"
              color="#ffffff"
              lineHeight="60px"
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
              maxWidth="315px"
            >
              RELEASE ROADMAP
            </Typography>
          </Box>
          <Box>
            {steps.map((step, index) => (
              <Box
                key={`screen-6-Tablet-step-${index}`}
                sx={{ marginTop: index ? "35px" : "60px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: index < steps.length - 1 ? "25px" : "",
                    paddingX: "25px",
                  }}
                >
                  <Box
                    sx={{
                      width: "196px",
                      height: "50px",
                      background: `url(${step.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontFamily="Inter"
                      fontWeight="300"
                      fontSize="14px"
                      color="#44F4C3"
                    >
                      {step.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      marginLeft: "66px",
                      justifyContent: "space-between",
                    }}
                  >
                    {step.good && (
                      <Box>
                        {step.bad ? (
                          step.good.map((item, goodIndex) => (
                            <Box
                              key={`screen-6-step-tablet-${index}-bad-${goodIndex}`}
                              sx={{
                                display: "flex",
                                marginTop: goodIndex ? "15px" : "",
                              }}
                            >
                              <Box>
                                <Box
                                  sx={{
                                    width: "12px",
                                    height: "21px",
                                    background: `url(${GoodPoint})`,
                                    marginRight: "25px",
                                  }}
                                />
                              </Box>
                              <Typography
                                fontFamily="Inter"
                                fontWeight="300"
                                fontSize="14px"
                                color="#FFFFFF"
                                maxWidth="184px"
                              >
                                {item}
                              </Typography>
                            </Box>
                          ))
                        ) : (
                          <Box sx={{ display: "flex" }}>
                            <Box>
                              {step.good
                                .slice(0, step.good.length / 2)
                                .map((item, goodIndex) => (
                                  <Box
                                    key={`screen-6-step-tablet-${index}-bad-${goodIndex}`}
                                    sx={{
                                      display: "flex",
                                      marginTop: goodIndex ? "15px" : "",
                                    }}
                                  >
                                    <Box>
                                      <Box
                                        sx={{
                                          width: "12px",
                                          height: "21px",
                                          background: `url(${GoodPoint})`,
                                          marginRight: "25px",
                                        }}
                                      />
                                    </Box>
                                    <Typography
                                      fontFamily="Inter"
                                      fontWeight="300"
                                      fontSize="14px"
                                      color="#FFFFFF"
                                      maxWidth="184px"
                                    >
                                      {item}
                                    </Typography>
                                  </Box>
                                ))}
                            </Box>
                            <Box sx={{ marginLeft: "17px" }}>
                              {step.good
                                .slice(step.good.length / 2, step.good.length)
                                .map((item, goodIndex) => (
                                  <Box
                                    key={`screen-6-step-tablet-${index}-bad-${goodIndex}`}
                                    sx={{
                                      display: "flex",
                                      marginTop: goodIndex ? "15px" : "",
                                    }}
                                  >
                                    <Box>
                                      <Box
                                        sx={{
                                          width: "12px",
                                          height: "21px",
                                          background: `url(${GoodPoint})`,
                                          marginRight: "25px",
                                        }}
                                      />
                                    </Box>
                                    <Typography
                                      fontFamily="Inter"
                                      fontWeight="300"
                                      fontSize="14px"
                                      color="#FFFFFF"
                                      maxWidth="137px"
                                    >
                                      {item}
                                    </Typography>
                                  </Box>
                                ))}
                            </Box>
                          </Box>
                        )}
                      </Box>
                    )}
                    <Box sx={{ marginLeft: step.good ? "17px" : "" }}>
                      {step.bad &&
                        step.bad.map((item, badIndex) => (
                          <Box
                            key={`screen-6-step-${index}-bad-${badIndex}`}
                            sx={{
                              display: "flex",
                              marginTop: badIndex || step.good ? "15px" : "",
                            }}
                          >
                            <Box>
                              <Box
                                sx={{
                                  width: "12px",
                                  height: "21px",
                                  background: `url(${BadPoint})`,
                                  marginRight: "25px",
                                }}
                              />
                            </Box>
                            <Typography
                              fontFamily="Inter"
                              fontWeight="300"
                              fontSize="14px"
                              color="#FFFFFF"
                              textTransform="capitalize"
                            >
                              {item}
                            </Typography>
                          </Box>
                        ))}
                    </Box>
                  </Box>
                </Box>
                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      background:
                        "linear-gradient(90deg, #FFFFFF 19.42%, rgba(255, 255, 255, 0) 79.24%)",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>
      )}
      {!desktop768Width && !desktop1080Width && (
        <Box sx={{ padding: "77px 0 73px 0px", backgroundColor: "#000000" }}>
          <Box>
            <Typography
              fontFamily="Furore"
              fontSize="32px"
              color="#ffffff"
              lineHeight="32px"
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
                margin: "auto",
              }}
              textTransform="uppercase"
              textAlign="center"
              maxWidth="170px"
            >
              RELEASE ROADMAP
            </Typography>
          </Box>
          <Box>
            {steps.map((step, index) => (
              <Box
                key={`screen-6-Tablet-step-${index}`}
                sx={{ marginTop: index ? "35px" : "45px" }}
              >
                <Box>
                  <Box
                    sx={{
                      width: "177px",
                      height: "44px",
                      background: `url(${step.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginX: "auto",
                    }}
                  >
                    <Typography
                      fontFamily="Inter"
                      fontWeight="400"
                      fontSize="16px"
                      color="#44F4C3"
                    >
                      {step.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      marginX: "auto",
                      marginTop: "35px",
                      maxWidth: "225px",
                    }}
                  >
                    {step.good &&
                      step.good.map((item, goodIndex) => (
                        <Box
                          key={`screen-6-step-tablet-${index}-bad-${goodIndex}`}
                          sx={{
                            marginTop: goodIndex ? "10px" : "",
                            display: "flex",
                          }}
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
                            fontSize="13px"
                            color="#FFFFFF"
                            maxWidth="193px"
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    {step.bad &&
                      step.bad.map((item, badIndex) => (
                        <Box
                          key={`screen-6-step-${index}-bad-${badIndex}`}
                          sx={{
                            display: "flex",
                            marginTop: badIndex || step.good ? "10px" : "",
                          }}
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
                            fontSize="13px"
                            color="#FFFFFF"
                            textTransform="capitalize"
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Six;
