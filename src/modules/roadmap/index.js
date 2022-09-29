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
        <Box sx={{ padding: "180px 0 180px 0px", background: "#091015" }}>
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
                width: `${steps.length * 293}px`,
                marginX: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: `${steps.length * 293}px`,
                }}
              >
                {steps.map((item, index) => (
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
                      {item.title}
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
          <Box
            sx={{
              position: "relative",
              height: "350px",
              display: "flex",
              marginTop: "90px",
            }}
          >
            {steps.map((step, index) => (
              <Box
                sx={{
                  position: "absolute",
                  width: "33%",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  filter: curentItem === index ? "blur(0)" : "blur(2.5px)",
                  transform:
                    curentItem === index
                      ? "translate3d(0,0,0)"
                      : getCurrentTransform(index),
                  transition: "all 0.3s ease-in-out",
                  marginX: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
                key={`screen-6-step-${index}`}
              >
                <Box>
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
                          maxWidth="250px"
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
          {/* <Box sx={{ marginTop: "128px" }}>
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
          </Box> */}
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
          <Box sx={{ paddingX: "25px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "50px",
              }}
            >
              {steps.map((item, index) => (
                <Box
                  key={`five_screen_tablet_items_${index}`}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setCurentItem(index);
                    swiperRef.current.swiper.slideTo(index);
                  }}
                >
                  <Typography
                    fontFamily="Furore"
                    fontSize="20px"
                    color={index === curentItem ? "#44F4C3" : "#FFFFFF"}
                  >
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                width: "100%",
                height: 3,
                backgroundColor: "#A5a5a5",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  width: "calc(100% / 3)",
                  height: "100%",
                  backgroundColor: "#44F4C3",
                  marginLeft: `calc(${curentProgress} * calc(${steps.length} * calc(100% / ${steps.length}) - calc(100% / ${steps.length})))`,
                }}
              />
            </Box>
          </Box>
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
            {steps.map((step, index) => (
              <SwiperSlide key={`screen-6-Tablet-step-${index}`}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "60px",
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
                                lineHeight="23.02px"
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
                                      lineHeight="23.02px"
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
                                      lineHeight="23.02px"
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
                              marginTop: badIndex ? "15px" : "",
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
                              lineHeight="23.02px"
                            >
                              {item}
                            </Typography>
                          </Box>
                        ))}
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
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
                      width: `${steps.length * 135}px`,
                      marginLeft: `calc(15px + max(calc(${
                        steps.length * 135 + 30
                      }px - 100vw), 0px) * -${curentProgress})`,
                    }}
                  >
                    {steps.map((item, index) => (
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
                          {item.title}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      marginLeft: `calc(15px + max(calc(${
                        steps.length * 135 + 30
                      }px - 100vw), 0px) * -${curentProgress})`,
                      marginTop: "21px",
                      width: `${steps.length * 135}px`,
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
                          curentProgress * (steps.length * 135 - 135)
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
                      {steps.map((item, index) => (
                        <Box
                          key={`screen-2-mobile-title-${index}`}
                          sx={{
                            width: `calc(100% / ${steps.length})`,
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
                            {item.title}
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
                          marginLeft: `calc(${curentProgress} * calc(${steps.length} * calc(100% / ${steps.length}) - calc(100% / ${steps.length})))`,
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
                {steps.map((step, index) => (
                  <SwiperSlide key={`screen-6-swiper-item-${index}`}>
                    <Box>
                      <Box
                        sx={{
                          marginX: "auto",
                          maxWidth: step.mobileWidth,
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
