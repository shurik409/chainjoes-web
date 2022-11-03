import React, { useState, useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Plane, GoodPoint, BadPoint } from "../../imgs/webp/screen6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Six = () => {
  const [curentItem, setCurentItem] = useState(0);
  const [curentProgress, setProgress] = useState(0);
  const swiperRef = useRef(null);
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
      img: Plane,
      mobileWidth: "212px",
    },
    {
      title: "Q3-Q4 2022",
      good: [
        "Official realese of the project",
        "Completion of Game Design Document (GDD)",
        "Realease of website",
        "Realese of socials: Twitter, Discord, Telegram and Facebook",
      ],
      bad: ["Seed Raising", "Partnerships", "Onboarding Advisors"],
      img: Plane,
      mobileWidth: "226px",
    },
    {
      title: "Q1 2023",
      bad: ["Release Roadmap", "Release Whitepaper", "Start game production"],
      img: Plane,
      mobileWidth: "188px",
    },
  ];
  const roadMap = [
    {
      year: "2022",
      steps: [
        {
          title: "Q2 2022",
          good: [
            "Concept and Idea Development",
            "Blockchain Team Formation",
            "GameDev Team Formation",
            "Marketing Core Team Formation",
            "Game Pre-production",
            "Brand Building",
          ],
        },
        {
          title: "Q3 2022",
          good: ["GDD Release", "Website Release", "Community Сreation"],
        },
        {
          title: "Q4 2022",
          bad: [
            "Characters Reveal",
            "Marketing Launch",
            "Private Sale",
            "Token Audit",
            "Litepaper Release",
            "IDO",
            "Game Production Plan Development",
            "Partnerships: Early Bird stage",
            "Onboarding advisors",
          ],
        },
      ],
    },
    {
      year: "2023",
      steps: [
        {
          title: "Q1 2023",
          bad: [
            "Start Game Production",
            "DEX Listing",
            "NFT Development",
            "Marketing Boost",
          ],
        },
        {
          title: "Q2 2023",
          bad: [
            "NFT Release",
            "NFT Sales",
            "DAO Development",
            "Game MVP Version Release",
            "Ambassador Program Launch",
          ],
        },
        {
          title: "Q3 2023",
          bad: [
            "Testnet Launch",
            "Closed Beta Test Launch",
            "DAO: Governance Platform Development",
          ],
        },
        {
          title: "Q4 2023",
          bad: ["DAO Launch", "Bug Bounty Program Release", "CEX Listing"],
        },
      ],
    },
    {
      year: "2024",
      steps: [
        {
          title: "Q1 2024",
          bad: [
            "Cross-Chain Study",
            "Partnerships: Whales Welcome stage",
            "Community Events Release",
          ],
        },
        {
          title: "Q2 2024",
          bad: [
            "Mainnet Launch",
            "Game Alpha Launch",
            "Staking Launch",
            "Cross-Chain Development",
          ],
        },
      ],
    },
  ];

  const desktop1080Width = useMediaQuery("(min-width: 1200px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");

  const desktop530Width = useMediaQuery(
    `(min-width: ${125 * steps.length + 30}px`
  );

  const getCurrentTransform = (index) => {
    if (index === 1) return "translate3d(-80%, 0, 0)";
    if (index === 2) return "translate3d(80%, 0, 0)";
    if (index === 0 && curentItem === 1) return "translate3d(-80%, 0, 0)";
    if (index === 0 && curentItem === 2) return "translate3d(80%, 0, 0)";
  };

  return (
    <Box>
      {desktop1080Width && (
        <Box sx={{ padding: "180px 0px 180px 0px", background: "#091015" }}>
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
              textAlign="center"
            >
              RELEASE ROADMAP
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                marginTop: "87px",
                display: "block",
                width: `${roadMap.length * 293}px`,
                marginX: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: `${roadMap.length * 293}px`,
                }}
              >
                {roadMap.map((item, index) => (
                  <Box
                    key={`screen-2-mobile-title-${index}`}
                    sx={{ width: "293px", cursor: "pointer" }}
                    onClick={() => {
                      setCurentItem(index);
                    }}
                  >
                    <Typography
                      fontFamily="Furore"
                      fontWeight={index === curentItem ? "400" : "300"}
                      fontSize="20px"
                      lineHeight="23px"
                      textAlign="center"
                      marginX="auto"
                      color={index === curentItem ? "#44F4C3" : "#FFFFFF"}
                    >
                      {item.year}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  marginTop: "21px",
                  width: `${steps.length * 293}px`,
                  height: 3,
                  backgroundColor: "#A5a5a5",
                }}
              >
                <Box
                  sx={{
                    width: "293px",
                    height: "3px",
                    backgroundColor: "#44F4C3",
                    marginLeft: `${curentItem * 293}px`,
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
          {roadMap.map(
            (period, index) =>
              index === curentItem && (
                <Box
                  sx={{
                    paddingTop: "128px",
                    height: "628px",
                    overflowX: "auto",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                      sx={{
                        width: "calc(100% - 160px)",
                        minWidth: `${period.steps.length * 376 + 376}px`,
                        height: "1px",
                        transform: "translateY(37px)",
                        background:
                          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0.11%, #FFFFFF 50.23%, rgba(255, 255, 255, 0) 99.09%)",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "100px",
                      minWidth: `${period.steps.length * 376 + 376}px`,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "65px",
                      }}
                    >
                      <Typography
                        fontFamily="Furore"
                        fontSize="55px"
                        lineHeight="55px"
                        color="#b5ffea"
                        style={{
                          textShadow: "0px 0px 53px rgba(75, 248, 200, 0.4)",
                        }}
                      >
                        {period.year}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          position: "absolute",
                          left: 0,
                          top: "-50%",
                          transform: "translateY(50%)",
                        }}
                      >
                        <Box
                          sx={{
                            background: "#44F4C3",
                            opacity: "0.4",
                            filter: "blur(60px)",
                            width: "91px",
                            height: "91px",
                            borderRadius: "100px",
                          }}
                        ></Box>
                        <Box
                          sx={{
                            background: "#44F4C3",
                            opacity: "0.4",
                            filter: "blur(60px)",
                            width: "91px",
                            height: "91px",
                            borderRadius: "100px",
                          }}
                        ></Box>
                      </Box>
                    </Box>
                    {period.steps.map((step, index) => (
                      <Box
                        sx={{
                          position: "relative",
                          minWidth: "280px",
                          // marginLeft: index ? "323px" : "",
                        }}
                        key={`screen-6-step-${index}`}
                      >
                        <Box
                          sx={{
                            width: "237px",
                            height: "75px",
                            position: "absolute",
                            background: `url(${Plane})`,
                            top: 0,
                            left: 0,
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
                                  fontSize="16px"
                                  color="#FFFFFF"
                                  maxWidth="255px"
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
                                  marginTop:
                                    badIndex || step.good ? "15px" : "",
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
                                  fontSize="16px"
                                  color="#FFFFFF"
                                  textTransform="capitalize"
                                  maxWidth="255px"
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
              )
          )}
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
            <Box
              sx={{
                position: "relative",
                marginTop: "87px",
                display: "block",
                width: `${roadMap.length * 235}px`,
                marginX: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: `${roadMap.length * 235}px`,
                }}
              >
                {roadMap.map((item, index) => (
                  <Box
                    key={`screen-2-mobile-title-${index}`}
                    sx={{ width: "235px", cursor: "pointer" }}
                    onClick={() => {
                      setCurentItem(index);
                    }}
                  >
                    <Typography
                      fontFamily="Furore"
                      fontWeight={index === curentItem ? "400" : "300"}
                      fontSize="20px"
                      lineHeight="23px"
                      textAlign="center"
                      marginX="auto"
                      color={index === curentItem ? "#44F4C3" : "#FFFFFF"}
                    >
                      {item.year}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  marginTop: "21px",
                  width: `${steps.length * 235}px`,
                  height: 3,
                  backgroundColor: "#A5a5a5",
                }}
              >
                <Box
                  sx={{
                    width: "235px",
                    height: "3px",
                    backgroundColor: "#44F4C3",
                    marginLeft: `${curentItem * 235}px`,
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
          {roadMap.map(
            (period, index) =>
              index === curentItem && (
                <Box
                  sx={{
                    paddingTop: "128px",
                    height: "628px",
                    overflowX: "auto",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      paddingLeft: "-50px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "calc(100% - 50px)",
                        minWidth: `${period.steps.length * 376}px`,
                        height: "1px",
                        transform: "translateY(37px)",
                        background:
                          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0.11%, #FFFFFF 50.23%, rgba(255, 255, 255, 0) 99.09%)",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "100px",
                      minWidth: `${period.steps.length * 376}px`,
                    }}
                  >
                    {period.steps.map((step, index) => (
                      <Box
                        sx={{
                          position: "relative",
                          minWidth: "280px",
                          // marginLeft: index ? "323px" : "",
                        }}
                        key={`screen-6-step-${index}`}
                      >
                        <Box
                          sx={{
                            width: "237px",
                            height: "75px",
                            position: "absolute",
                            background: `url(${Plane})`,
                            top: 0,
                            left: 0,
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
                                  fontSize="16px"
                                  color="#FFFFFF"
                                  maxWidth="255px"
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
                                  marginTop:
                                    badIndex || step.good ? "15px" : "",
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
                                  fontSize="16px"
                                  color="#FFFFFF"
                                  textTransform="capitalize"
                                  maxWidth="255px"
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
              )
          )}
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
            <Box>
              {!desktop530Width ? (
                <Box
                  sx={{
                    position: "relative",
                    overflowX: "hidden",
                    marginTop: "40px",
                    display: "block",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: `${roadMap.length * 135}px`,
                      marginLeft: `calc(15px + max(calc(${
                        roadMap.length * 135 + 30
                      }px - 100vw), 0px) * -${curentProgress})`,
                    }}
                  >
                    {roadMap.map((item, index) => (
                      <Box
                        key={`screen-2-mobile-title-${index}`}
                        sx={{ width: "135px" }}
                        onClick={() => {
                          setCurentItem(index);
                          swiperRef.current.swiper.slideTo(index);
                        }}
                      >
                        <Typography
                          fontFamily="Furore"
                          fontSize="16px"
                          lineHeight="19.2px"
                          textAlign="center"
                          marginX="auto"
                          color={index === curentItem ? "#44F4C3" : "#FFFFFF"}
                        >
                          {item.year}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      marginLeft: `calc(15px + max(calc(${
                        roadMap.length * 135 + 30
                      }px - 100vw), 0px) * -${curentProgress})`,
                      marginTop: "21px",
                      width: `${roadMap.length * 135}px`,
                      height: 3,
                      backgroundColor: "#A5a5a5",
                    }}
                  >
                    <Box
                      sx={{
                        width: "135px",
                        height: "3px",
                        backgroundColor: "#44F4C3",
                        marginLeft: `${
                          curentProgress * (roadMap.length * 135 - 135)
                        }px`,
                      }}
                    ></Box>
                  </Box>
                </Box>
              ) : (
                <Box>
                  <Box
                    sx={{
                      position: "relative",
                      overflowX: "hidden",
                      marginTop: "40px",
                      display: "block",
                      paddingX: "15px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        width: `100%`,
                      }}
                    >
                      {roadMap.map((item, index) => (
                        <Box
                          key={`screen-2-mobile-title-${index}`}
                          sx={{
                            width: `calc(100% / ${roadMap.length})`,
                          }}
                          onClick={() => {
                            setCurentItem(index);
                            swiperRef.current.swiper.slideTo(index);
                          }}
                        >
                          <Typography
                            fontFamily="Furore"
                            fontSize="16px"
                            lineHeight="19.2px"
                            textAlign="center"
                            marginX="auto"
                            color={index === curentItem ? "#44F4C3" : "#FFFFFF"}
                          >
                            {item.year}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box
                      sx={{
                        marginTop: "21px",
                        width: "100%",
                        height: 3,
                        backgroundColor: "#A5a5a5",
                      }}
                    >
                      <Box
                        sx={{
                          width: "125px",
                          height: "3px",
                          backgroundColor: "#44F4C3",
                          marginLeft: `calc(${curentProgress} * calc(${roadMap.length} * calc(100% / ${roadMap.length}) - calc(100% / ${roadMap.length})))`,
                        }}
                      ></Box>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
            <Box sx={{ marginTop: "45px" }}>
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                grabCursor={true}
                className="mySwiper"
                onProgress={({ progress }) =>
                  !(progress < 0 || progress > 1) && setProgress(progress)
                }
                onSlideChange={({ activeIndex }) => setCurentItem(activeIndex)}
                ref={swiperRef}
              >
                {roadMap.map((period, index) => (
                  <SwiperSlide key={`screen-6-swiper-item-${index}`}>
                    {period.steps.map((step, index) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                        key={`screen-6-step-${index}`}
                      >
                        <Box
                          sx={{
                            width: "200px",
                            height: "55px",
                            background: `url(${Plane})`,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundSize: "cover",
                            marginTop: index ? "55px" : "45px",
                          }}
                        >
                          <Typography
                            fontFamily="Furore"
                            fontWeight="400"
                            fontSize="18px"
                            color="#44F4C3"
                          >
                            {step.title}
                          </Typography>
                        </Box>
                        <Box sx={{ marginTop: "25px" }}>
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
                                      marginRight: "15px",
                                    }}
                                  />
                                </Box>
                                <Typography
                                  fontFamily="Inter"
                                  fontWeight="300"
                                  fontSize="13px"
                                  color="#FFFFFF"
                                  maxWidth="170px"
                                  textTransform="capitalize"
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
                                  marginTop:
                                    badIndex || step.good ? "15px" : "",
                                }}
                              >
                                <Box>
                                  <Box
                                    sx={{
                                      width: "12px",
                                      height: "21px",
                                      background: `url(${BadPoint})`,
                                      marginRight: "15px",
                                    }}
                                  />
                                </Box>
                                <Typography
                                  fontFamily="Inter"
                                  fontWeight="300"
                                  fontSize="13px"
                                  color="#FFFFFF"
                                  maxWidth="170px"
                                  textTransform="capitalize"
                                >
                                  {item}
                                </Typography>
                              </Box>
                            ))}
                        </Box>
                      </Box>
                    ))}
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Six;
