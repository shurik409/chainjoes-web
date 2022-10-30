import React, { useState, useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  FirstImg,
  SecondImg,
  ThirdImg,
  FourthImg,
  FiveImg,
  MobileMask,
} from "../../imgs/webp/screen2";
import Smoke from "../../imgs/smoke2x.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Second = () => {
  const [curentItem, setCurentItem] = useState(0);
  const [curentProgress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  const texts = [
    {
      title: "Strong gameplay in crypto theme",
      mobileBottom: "5%",
      description: `Chain Joes is filled with references to cryptothematics, memes and a large number of gaming phenomena from the past that will cause real game lovers to delight. A thoughtful game world, characters with a unique story and high-quality visualization and enemies in the form of Scammers, Spammers and Hackers allowed us to create strong gameplay that has a high player retention system.`,
      img: FirstImg,
      mobileTitle: (
        <>
          Strong gameplay
          <br />
          in crypto theme
        </>
      ),
    },
    {
      title: `Play And Earn mechanics `,
      mobileTitle: (
        <>
          Play & Earn
          <br />
          mechanics
        </>
      ),
      img: SecondImg,
      mobileBottom: "5%",
      description: `There will be a deep and sustainable economy within Chain Joes where players can play for free and earn both NFTs and tokens. Just like the real world economy, you can choose how you want to specialize or play within the Chain Joes Economy.`,
    },
    {
      title: `control assets`,
      mobileTitle: (
        <>
          Control
          <br />
          assets
        </>
      ),
      img: ThirdImg,
      mobileBottom: "3%",
      description: `The introduction of NFT provides certain desirable features that non-blockchain games simply cannot provide, such as verifiable, immutable digital ownership. The in-game assets represented by an NFT gives the player a hard-coded assurance that the item belongs to them — allowing them the right to sell, trade, 
      or swap it as they see fit. `,
    },
    {
      title: `Ranked system`,
      mobileTitle: (
        <>
          Ranked
          <br />
          system
        </>
      ),
      img: FourthImg,
      mobileBottom: "-3%",
      description: `The essence of the game revolves around PVP champs fighting each other in a ranked system to increase their rating. The balance of the rating system, based on the Elo Rating system, will help the player find a team suitable for the level. Increase your rank and skill to reach the highest rank and earn more tokens for winning.`,
    },
    {
      title: `Free to Play`,
      mobileTitle: "Free to Play",
      img: FiveImg,
      mobileBottom: "5%",
      description: `Players will be able to play with free character and equipment to earn in-game resources, more free equipment, and, with skill, some tokens. Eventually, players may earn enough to obtain NFT equipment, even though they started with just free equipment and free characters.`,
    },
  ];

  const desktop1080Width = useMediaQuery("(min-width: 1000px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");

  const desktop530Width = useMediaQuery(
    `(min-width: ${125 * texts.length + 30}px`
  );

  return (
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            background: `url(${Smoke})`,
            position: "relative",
            backgroundPositionY: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "136px 0 127px 80px",
          }}
        >
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
                    height: "543px",
                    backgroundColor: "#A5a5a5",
                    marginRight: "45px",
                    marginTop: "-50px",
                  }}
                >
                  <Box
                    sx={{
                      width: "3px",
                      height: "203px",
                      backgroundColor: "#44F4C3",
                      marginTop: `${curentItem * 85}px`,
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
            background: `url(${Smoke})`,
            position: "relative",
            backgroundPositionY: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "102px 0px 78px 0px",
          }}
        >
          <Box>
            <Typography
              fontFamily="Furore"
              fontSize="60px"
              color="#ffffff"
              lineHeight="60px"
              maxWidth="380px"
              marginLeft="30px"
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
              marginTop: "71px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: `${texts.length * 265}px`,
                // marginLeft: `calc(30px + max(calc(${
                //   header.length * 265 + 30
                // }px - 100vw), 0px) * -${curentProgress})`,
                marginLeft: `calc(min(${
                  curentItem > 1 ? 265 * curentItem - 265 : -30
                }px, calc(${texts.length * 265 + 30}px - 100vw)) * -1)`,
                transition: "all 0.3s ease-in-out",
              }}
            >
              {texts.map((item, index) => (
                <Box
                  key={`screen-2-mobile-title-${index}`}
                  sx={{
                    width: `265px`,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setCurentItem(index);
                    swiperRef.current.swiper.slideTo(index);
                  }}
                >
                  <Typography
                    fontFamily="Furore"
                    fontSize="20px"
                    lineHeight="23.02px"
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
                marginTop: "16px",
                width: `${265 * texts.length}px`,
                height: 3,
                backgroundColor: "#A5a5a5",
                marginLeft: `calc(min(${
                  curentItem > 1 ? 265 * curentItem - 265 : -30
                }px, calc(${texts.length * 265 + 30}px - 100vw)) * -1)`,
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Box
                sx={{
                  width: `${265}px`,
                  height: "3px",
                  backgroundColor: "#44F4C3",
                  marginLeft: `${
                    curentProgress * (texts.length * 265 - 265)
                  }px`,
                  transition: "all 0.3s ease-in-out",
                }}
              ></Box>
            </Box>
          </Box>
          <Box>
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
                <SwiperSlide key={`screen-3-swiper-item-${index}`}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "43px",
                      height: "340px",
                      opacity: 1,
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
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      )}
      {!desktop1080Width && !desktop768Width && (
        <Box
          sx={{
            background: `url(${Smoke})`,
            // background: `#FFF`,
            position: "relative",
            backgroundPositionY: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "75px 0px 55px 0px",
          }}
        >
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
                alignItems: "center",
                width: `${texts.length * 165}px`,
                marginLeft: !desktop530Width
                  ? `calc(15px + max(calc(${
                      texts.length * 165 + 30
                    }px - 100vw), 0px) * -${curentProgress})`
                  : 0,
                transition: "all 0.3s ease-in-out",
              }}
            >
              {texts.map((item, index) => (
                <Box
                  key={`screen-2-mobile-title-${index}`}
                  sx={{ width: "165px" }}
                  onClick={() => {
                    setCurentItem(index);
                    swiperRef.current.swiper.slideTo(index);
                  }}
                >
                  <Typography
                    fontFamily="Furore"
                    fontSize="15px"
                    lineHeight="18px"
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
                      texts.length * 165 + 30
                    }px - 100vw), 0px) * -${curentProgress})`
                  : 0,
                marginTop: "21px",
                width: `${texts.length * 165}px`,
                height: 3,
                backgroundColor: "#A5a5a5",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Box
                sx={{
                  width: "165px",
                  height: "3px",
                  backgroundColor: "#44F4C3",
                  marginLeft: `${
                    curentProgress * (texts.length * 165 - 165)
                  }px`,
                  transition: "all 0.3s ease-in-out",
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
