import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  FirstImg,
  SecondImg,
  ThirdImg,
  FourthImg,
  MobileMask,
} from "../../imgs/webp/screen2";
import Smoke from "../../imgs/smoke.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SmokeThree from "../../components/smoke";

import "swiper/css";

const Second = () => {
  const [curentItem, setCurentItem] = useState(0);
  const [curentProgress, setProgress] = useState(0);
  const swiperRef = useRef(null);
  const smokeElement = useRef(null);
  const [smokeInit, setSmokeInit] = useState(false);

  const texts = [
    {
      title: `Free gameplay`,
      mobileTitle: (
        <>
          Free
          <br />
          gameplay
        </>
      ),
      img: FirstImg,
      mobileBottom: "5%",
      description: `Chain Joes is a free Battle Arena game in crypto and memes setting that real gamers will love. Explore the stunningly designed ChainVerse and engage with unique characters. Enjoy high-quality visuals and battle a range of challenging enemies including Scammers, Spammers and Hackers to become a champion.`,
      descriptionTwo: "Join the battle without any barrier!",
    },
    {
      title: `Play & Earn system`,
      mobileTitle: (
        <>
          {`Play & Earn`}
          <br />
          system
        </>
      ),
      img: SecondImg,
      mobileBottom: "5%",
      description: `Our Plan-And-Earn model evolved from the P2E framework and puts the focus back on providing real entertainment value to create a sustainable, open game economy.`,
      descriptionTwo: `With Play-to-Earn we aim to build value with gameplay. Providing a high entertainment value encourages players to keep playing, and to do so, they’ll want to get rewards they can spend in the game to improve their gameplay experience.`,
    },
    {
      title: `NFT assets`,
      mobileTitle: (
        <>
          NFT
          <br />
          assets
        </>
      ),
      img: ThirdImg,
      mobileBottom: "3%",
      description: `Improve and Merge the NFT’s to increase their power and get the first positions in the competitions. `,
      descriptionTwo: `Our NFTs are not just collections, they deine the life of the game and the legacy of the players. `,
    },
    {
      title: `Ranked PvP system`,
      mobileTitle: (
        <>
          Ranked PvP
          <br />
          system
        </>
      ),
      img: FourthImg,
      mobileBottom: "-3%",
      description: `The essence of the game revolves around PVP champs fighting each other in a ranked system to increase their rating.`,
      descriptionTwo: `The balance of the Ranked System, based on the Elo Rating system, will help the player find a team suitable for the level. Increase your rank and skill to reach the highest rank and earn more tokens for winning.`,
    },
  ];

  const desktop1080Width = useMediaQuery("(min-width: 1000px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");

  const desktop530Width = useMediaQuery(
    `(min-width: ${125 * texts.length + 30}px`
  );

  useEffect(() => {
    if (smokeElement.current && !smokeInit) {
      setSmokeInit(true);
      SmokeRender();
    } else {
      return;
    }
  }, []);

  const SmokeRender = () => {
    smokeElement.current && SmokeThree(smokeElement.current);
  };

  useEffect(() => {
    // set resize listener
    window.addEventListener("resize", SmokeRender);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", SmokeRender);
    };
  }, []);

  return (
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            // background: `url(${Smoke})`,
            position: "relative",
            backgroundPositionY: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "136px 0 127px 80px",
          }}
        >
          <Box
            ref={smokeElement}
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          ></Box>
          <Box sx={{ display: "flex", maxHeight: "725px" }}>
            <Box>
              <Box sx={{ width: "540px" }}>
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
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    width: "3px",
                    height: "510px",
                    backgroundColor: "#A5a5a5",
                    marginRight: "45px",
                    marginTop: "-50px",
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
                          fontFamily="Furore"
                          textTransform="uppercase"
                          fontSize="20px"
                          color={index === curentItem ? "#44F4C3" : "#FFFFFF"}
                          lineHeight="20px"
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      {/* {index === curentItem && ( */}
                      <Box>
                        <Box
                          sx={{
                            marginTop: index === curentItem ? "25px" : "0px",
                            maxHeight: index === curentItem ? "220px" : "0px",
                            opacity: index === curentItem ? 1 : 0,
                            overflow: "hidden",
                            transition: "all 0.3s ease-in-out",
                          }}
                        >
                          <Typography
                            fontFamily="Inter"
                            fontWeight="300"
                            fontSize="18px"
                            color="#ffffff"
                            maxWidth="730px"
                            lineHeight="21.78px"
                          >
                            {item.description}
                            {item.descriptionTwo && (
                              <>
                                <br />
                                <br />
                                {item.descriptionTwo}
                              </>
                            )}
                          </Typography>
                        </Box>
                        {/* {item.descriptionTwo && (
                            <Box sx={{ marginTop: "25px" }}>
                              <Typography
                                fontFamily="Inter"
                                fontWeight="300"
                                fontSize="18px"
                                color="#ffffff"
                                maxWidth="730px"
                                lineHeight="21.78px"
                              >
                                
                              </Typography>
                            </Box>
                          )} */}
                      </Box>
                      {/* )} */}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ position: "relative", maxWidth: "865px", width: "100%" }}
            >
              {texts.map((item, index) => (
                <Box
                  key={`screen-2-image-block-${index}`}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    heigth: "100%",
                    opacity: index === curentItem ? 1 : 0,
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <img
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: "100%" }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
      {!desktop1080Width && desktop768Width && (
        <Box
          sx={{
            // background: `url(${Smoke})`,
            position: "relative",
            backgroundPositionY: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "102px 42px 78px 30px",
          }}
        >
          <Box
            ref={smokeElement}
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          ></Box>
          <Box>
            <Typography
              fontFamily="Furore"
              fontSize="60px"
              color="#ffffff"
              lineHeight="60px"
              maxWidth="380px"
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
          <Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "60px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "3px",
                      height: "172px",
                      backgroundColor: "#A5a5a5",
                      marginRight: "35px",
                    }}
                  >
                    {curentItem < 2 && (
                      <Box
                        sx={{
                          width: "100%",
                          height: "86px",
                          backgroundColor: "#44F4C3",
                          marginTop: `${curentItem * 86}px`,
                        }}
                      />
                    )}
                  </Box>
                  <Box>
                    {texts.slice(0, 2).map((item, index) => (
                      <Box
                        key={`secondScreen_items_${index}`}
                        sx={{
                          marginTop: index ? "58px" : "",
                          cursor: "pointer",
                        }}
                        onClick={() => setCurentItem(index)}
                      >
                        <Box>
                          <Typography
                            fontFamily="Inter"
                            fontWeight={index === curentItem ? "500" : "300"}
                            fontSize="20px"
                            color={index === curentItem ? "#44F4C3" : "#FFFFFF"}
                            width="200px"
                          >
                            {item.title}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: "3px",
                      height: "172px",
                      backgroundColor: "#A5a5a5",
                      marginRight: "35px",
                    }}
                  >
                    {curentItem >= 2 && (
                      <Box
                        sx={{
                          width: "100%",
                          height: "86px",
                          backgroundColor: "#44F4C3",
                          marginTop: `${(curentItem - 2) * 86}px`,
                        }}
                      />
                    )}
                  </Box>
                  <Box>
                    {texts.slice(2, 4).map((item, index) => (
                      <Box
                        key={`secondScreen_items_${index + 2}`}
                        sx={{
                          marginTop: index ? "56px" : "",
                          cursor: "pointer",
                        }}
                        onClick={() => setCurentItem(index + 2)}
                      >
                        <Box>
                          <Typography
                            fontFamily="Inter"
                            fontWeight={
                              index + 2 === curentItem ? "500" : "300"
                            }
                            fontSize="20px"
                            color={
                              index + 2 === curentItem ? "#44F4C3" : "#FFFFFF"
                            }
                            width="200px"
                          >
                            {item.title}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            {texts.map((item, index) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: index === curentItem ? "43px" : "0",
                  height: index === curentItem ? "340px" : "0px",
                  opacity: index === curentItem ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                }}
                key={`screen-2-information-block-${index}`}
              >
                <Box sx={{ width: "343px" }}>
                  <img
                    src={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    style={{ maxWidth: "100%" }}
                  />
                </Box>
                <Box sx={{ marginLeft: "27px" }}>
                  <Box>
                    <Box>
                      <Typography
                        fontFamily="Inter"
                        fontWeight="300"
                        fontSize="14px"
                        color="#ffffff"
                        maxWidth="340px"
                      >
                        {item.description}
                      </Typography>
                    </Box>
                    {item.descriptionTwo && (
                      <Box sx={{ marginTop: "20px" }}>
                        <Typography
                          fontFamily="Inter"
                          fontWeight="300"
                          fontSize="14px"
                          color="#ffffff"
                          maxWidth="340px"
                        >
                          {item.descriptionTwo}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
      {!desktop1080Width && !desktop768Width && (
        <Box
          sx={{
            // background: `url(${Smoke})`,
            // background: `#FFF`,
            position: "relative",
            backgroundPositionY: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "75px 0px 55px 0px",
          }}
        >
          <Box
            ref={smokeElement}
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          ></Box>
          <Box>
            <Typography
              fontFamily="Furore"
              fontSize="32px"
              color="#ffffff"
              lineHeight="32px"
              maxWidth="227px"
              marginLeft="15px"
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
              position: "relative",
              overflowX: "hidden",
              marginTop: "28px",
              display: desktop530Width ? "flex" : "block",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: `${texts.length * 140}px`,
                marginLeft: !desktop530Width
                  ? `calc(15px + max(calc(${
                      texts.length * 140 + 30
                    }px - 100vw), 0px) * -${curentProgress})`
                  : 0,
              }}
            >
              {texts.map((item, index) => (
                <Box
                  key={`screen-2-mobile-title-${index}`}
                  sx={{ width: "140px" }}
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
                    {item.mobileTitle}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                marginLeft: !desktop530Width
                  ? `calc(15px + max(calc(${
                      texts.length * 140 + 30
                    }px - 100vw), 0px) * -${curentProgress})`
                  : 0,
                marginTop: "21px",
                width: `${texts.length * 140}px`,
                height: 3,
                backgroundColor: "#A5a5a5",
              }}
            >
              <Box
                sx={{
                  width: "140px",
                  height: "3px",
                  backgroundColor: "#44F4C3",
                  marginLeft: `${
                    curentProgress * (texts.length * 140 - 140)
                  }px`,
                }}
              ></Box>
            </Box>
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
              {texts.map((item, index) => (
                <SwiperSlide key={`screen-2-swiper-item-${index}`}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "290px",
                      margin: "auto",
                    }}
                  >
                    <Box>
                      <Typography
                        fontFamily="Inter"
                        fontSize="13px"
                        fontWeight="300"
                        color="#FFFFFF"
                        lineHeight="15.73px"
                        maxWidth="290px"
                      >
                        {item.description}
                      </Typography>
                      {item.descriptionTwo && (
                        <Typography
                          fontFamily="Inter"
                          fontSize="13px"
                          fontWeight="300"
                          color="#FFFFFF"
                          lineHeight="15.73px"
                          marginTop="15px"
                        >
                          {item.descriptionTwo}
                        </Typography>
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "40px",
                      }}
                    >
                      <img width={227} src={item.img} alt={item.title} />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Second;
