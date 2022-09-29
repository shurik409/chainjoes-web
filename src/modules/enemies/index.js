import React, { useState, useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Screen from "../../imgs/webp/screen5.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Five = () => {
  const [curentItem, setCurentItem] = useState(0);
  const [curentProgress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  const texts = [
    {
      title: `Scammers`,
      description: `Scammers faction is based on hallucinations, illusions and fakes. The characters are very sneaky, selfish and ruthless. Some can be fast and loud, and some can be slow and persuasive. But don’t even think about getting caught by their tricks, otherwise you’re finished!`,
    },
    {
      title: `Hackers`,
      description: `Not numerous intelligent and technological formations that use small reprogrammed bots as cannon fodder. This faction is based on the strongest programming skills, technical skills and hacking. Protect yourself as much as possible!`,
    },
    {
      title: `Spammers`,
      description: `Spammers faction is based on fast and slashing movements, chaotic choice of targets, defiant and inappropriate behavior. It’s nearly impossible to dodge their attacks because you never know what the next target will be. 
      But you can try!`,
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
        <Box sx={{ position: "relative", padding: "170px 0px 200px 80px" }}>
          <Box
            sx={{
              background: `url(${Screen})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "right",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: -2,
            }}
          />
          <Box
            sx={{
              width: "60%",
              height: "100%",
              background:
                "linear-gradient(97.55deg, #000000 10.59%, rgba(9, 16, 21, 0) 83.66%)",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          />
          <Box>
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
                width="617px"
              >
                Know your ENEMIES
              </Typography>
            </Box>
            <Box sx={{ marginTop: "60px" }}>
              <Typography
                fontFamily="Inter"
                fontSize="18px"
                fontWeight="300"
                width="480px"
                color="#FFFFFF"
              >
                Protect the world from the most harmful inhabitants of the WEB3
                world and get exclusive prizes in PvE modes
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
                  height: "382px",
                  backgroundColor: "#A5a5a5",
                  marginRight: "45px",
                  marginTop: "-10px",
                }}
              >
                <Box
                  sx={{
                    width: "3px",
                    height: "214px",
                    backgroundColor: "#44F4C3",
                    marginTop: `${curentItem * 84}px`,
                  }}
                ></Box>
              </Box>
              <Box>
                {texts.map((item, index) => (
                  <Box
                    key={`secondScreen_items_${index}`}
                    sx={{ marginTop: index ? "50px" : "", cursor: "pointer" }}
                    onClick={() => setCurentItem(index)}
                  >
                    <Box>
                      <Typography
                        fontFamily="Furore"
                        fontSize="26px"
                        color={index === curentItem ? "#44F4C3" : "#FFFFFF"}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    {/* {index === curentItem && ( */}
                    <Box>
                      <Box
                        sx={{
                          width: "600px",
                          marginTop: index === curentItem ? "25px" : "0px",
                          maxHeight: index === curentItem ? "110px" : "0px",
                          opacity: index === curentItem ? 1 : 0,
                          overflow: "hidden",
                          transition: "all 0.3s ease-in",
                        }}
                      >
                        <Typography
                          fontFamily="Inter"
                          fontWeight="300"
                          fontSize="18px"
                          color="#ffffff"
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                    {/* )} */}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {desktop768Width && !desktop1080Width && (
        <Box
          sx={{
            position: "relative",
            padding: "100px 0px 0px 0px",
            backgroundColor: "#000000",
          }}
        >
          <Box sx={{ paddingX: "25px" }}>
            <Box>
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
                maxWidth="430px"
              >
                Know your ENEMIES
              </Typography>
            </Box>
            <Box sx={{ marginTop: "60px" }}>
              <Typography
                fontFamily="Inter"
                fontSize="14px"
                lineHeight="17px"
                fontWeight="300"
                maxWidth="475px"
                color="#FFFFFF"
              >
                Protect the world from the most harmful inhabitants of the WEB3
                world and get exclusive prizes in PvE modes
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "50px",
                }}
              >
                {texts.map((item, index) => (
                  <Box
                    key={`five_screen_tablet_items_${index}`}
                    sx={{ cursor: "pointer" }}
                    onClick={() => setCurentItem(index)}
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
                  marginTop: "30px",
                }}
              >
                <Box
                  sx={{
                    width: "calc(100% / 3)",
                    height: "100%",
                    backgroundColor: "#44F4C3",
                    marginLeft: `calc((100% / 3) * ${curentItem} )`,
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              background: `url(${Screen})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "left",
              width: "100%",
              height: "498px",
              position: "relative",
              paddingTop: "60px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                height: "380px",
                width: "100%",
                background:
                  "linear-gradient(180deg, #000000 10.59%, rgba(9, 16, 21, 0) 83.66%)",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            />
            <Box sx={{ position: "relative", zIndex: 2 }}>
              {texts.map((item, index) => (
                <Box
                  key={`five_screen_tablet_text_${index}`}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: index === curentItem ? 0 : "-50%",
                    opacity: index === curentItem ? 1 : 0,
                    transition: "all 0.3s ease-in",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize="14px"
                    lineHeight="17px"
                    fontWeight="300"
                    maxWidth="441px"
                    color="#FFFFFF"
                    paddingLeft="25px"
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
      {!desktop768Width && !desktop1080Width && (
        <Box
          sx={{
            padding: "76px 0px 81px 0px",
            backgroundColor: "#000000",
          }}
        >
          <Box>
            <Box>
              <Typography
                fontFamily="Furore"
                fontSize="32px"
                marginLeft="15px"
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
                }}
                textTransform="uppercase"
                maxWidth="209px"
              >
                Know your ENEMIES
              </Typography>
            </Box>
            <Box sx={{ marginTop: "45px" }}>
              <Typography
                fontFamily="Inter"
                marginLeft="15px"
                fontSize="13px"
                lineHeight="15.73px"
                fontWeight="300"
                maxWidth="290px"
                color="#FFFFFF"
              >
                Protect the world from the most harmful inhabitants of the WEB3
                world and get exclusive prizes in PvE modes
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              height: "210px",
              width: "100%",
              background: `url(${Screen})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "left",
              backgroundPositionY: "bottom",
              marginTop: "-2px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                height: "101px",
                width: "100%",
                background:
                  "linear-gradient(180deg, #000000 10.59%, rgba(9, 16, 21, 0) 83.66%)",
                top: 0,
                right: 0,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                height: "74px",
                width: "100%",
                background:
                  "linear-gradient(0deg, #000000 10.59%, rgba(9, 16, 21, 0) 83.66%)",
                bottom: 0,
                right: 0,
              }}
            />
          </Box>
          <Box>
            <Box>
              {!desktop530Width ? (
                <Box
                  sx={{
                    position: "relative",
                    overflowX: "hidden",
                    marginTop: "28px",
                    display: "block",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: `${texts.length * 125}px`,
                      marginLeft: `calc(15px + max(calc(${
                        texts.length * 125 + 30
                      }px - 100vw), 0px) * -${curentProgress})`,
                    }}
                  >
                    {texts.map((item, index) => (
                      <Box
                        key={`screen-2-mobile-title-${index}`}
                        sx={{ width: "125px" }}
                        onClick={() => {
                          setCurentItem(index);
                          swiperRef.current.swiper.slideTo(index);
                        }}
                      >
                        <Typography
                          fontFamily="Inter"
                          fontWeight={index === curentItem ? "400" : "300"}
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
                        texts.length * 125 + 30
                      }px - 100vw), 0px) * -${curentProgress})`,
                      marginTop: "21px",
                      width: `${texts.length * 125}px`,
                      height: 3,
                      backgroundColor: "#A5a5a5",
                    }}
                  >
                    <Box
                      sx={{
                        width: "125px",
                        height: "3px",
                        backgroundColor: "#44F4C3",
                        marginLeft: `${
                          curentProgress * (texts.length * 125 - 125)
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
                      marginTop: "28px",
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
                      {texts.map((item, index) => (
                        <Box
                          key={`screen-2-mobile-title-${index}`}
                          sx={{
                            width: `calc(100% / ${texts.length})`,
                          }}
                          onClick={() => {
                            setCurentItem(index);
                            swiperRef.current.swiper.slideTo(index);
                          }}
                        >
                          <Typography
                            fontFamily="Inter"
                            fontWeight={index === curentItem ? "400" : "300"}
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
                          marginLeft: `calc(${curentProgress} * calc(${texts.length} * calc(100% / ${texts.length}) - calc(100% / ${texts.length})))`,
                        }}
                      ></Box>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
            <Box sx={{ marginTop: "35px" }}>
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
                  <SwiperSlide key={`screen-5-swiper-item-${index}`}>
                    <Box>
                      <Typography
                        fontFamily="Inter"
                        fontSize="13px"
                        fontWeight="300"
                        color="#FFFFFF"
                        lineHeight="15.73px"
                        maxWidth="290px"
                        textAlign="left"
                        marginLeft="15px"
                      >
                        {item.description}
                      </Typography>
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

export default Five;
