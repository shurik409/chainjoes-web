import React, { useState, useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  FirstImg,
  SecondImg,
  ThirdImg,
  FourthImg,
  FiveImg,
  SixImg,
  HeaderTexture,
} from "../../imgs/webp/screen3";
import { Line } from "../first/components/header/components/Icons";
import GreenBtn from "../../imgs/webp/green_btn_small.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Third = () => {
  const [curentItem, setCurentItem] = useState(0);
  const [curentProgress, setProgress] = useState(0);
  const swiperRef = useRef(null);
  const header = [
    {
      title: "Mr. Joe",
      background: FirstImg,
      overlayMargin: "0",
      descriptionOne: "The soul is always looking for a home...",
      mobilePosition: "left",
      descriptionTwo:
        "This is carved on the coat of arms of the house of Hodler, whose metaverse was covered with ice after it was destroyed by hackers decades ago.  ",
    },
    {
      title: "Anwar",
      background: SecondImg,
      mobilePosition: "left",
      overlayMargin: "120px",
      descriptionOne:
        "From the metaverse Greece 21, reconstructed on the fragments of ancient Greece with the help of web 3.0 technologies, the warrior Anwar arrived.",
      descriptionTwo: "",
    },
    {
      title: "Tama Shi",
      background: ThirdImg,
      mobilePosition: "left",
      overlayMargin: "130px",
      descriptionOne:
        "Duncan has been a member of a cybercriminal gang from the Cyberizzz metaverse for many years. Due to the overabundance of various advanced technologies inside the city, it can «lag» a little — the locations are distorted and merge into each other. ",
      descriptionTwo: "",
    },
    {
      title: "Milcy",
      background: FourthImg,
      mobilePosition: "left",
      overlayMargin: "100px",
      descriptionOne:
        "MLc s9 is one of the 10 newest bots that were created as part of the experimental development of metaverse A2. which is engaged in the creation of spam bots. These bots were supposed to be the crown of creation, which would allow them to bypass all current firewalls.",
      descriptionTwo: "",
    },
    {
      title: "Deo",
      background: FiveImg,
      mobilePosition: "left",
      overlayMargin: "120px",
      descriptionOne:
        "The Monk Deo arrived from the metaverse Temple of Fate...On his planet, the monks were able to curb web 3.0 technologies and now draw strength from there. ",
      descriptionTwo:
        "Not much is known about the Deo past. Even his Sensei cannot give an answer to this question. ",
    },
    {
      title: "Sam",
      background: SixImg,
      mobilePosition: "left",
      overlayMargin: "145px",
      descriptionOne:
        "Earth X300 has reached its peak of development and formed its own system. People live in prosperity, and technologies work for the benefit of humanity and deliver only comfort.",
      descriptionTwo:
        "Sam is a member of the special guard, which was engaged in ensuring the security of the DAO. ",
    },
  ];

  const desktop1080Width = useMediaQuery("(min-width: 1000px");

  const desktop768Width = useMediaQuery("(min-width: 768px");

  const desktop530Width = useMediaQuery(
    `(min-width: ${125 * header.length + 30}px`
  );

  return (
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            position: "relative",
            padding: "60px 0px 340px 0px",
          }}
        >
          <Box
            sx={{
              background: `url(${header[curentItem].background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: -2,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: "calc(50% + (100vw / 1920) * 1000)",
              background:
                "linear-gradient(264.4deg, #000000 15.42%, rgba(0, 0, 0, 0) 89.56%)",
              top: 0,
              right: 0,
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              background: `url(${HeaderTexture})`,
              width: "calc(100vw - 160px)",
              height: "60px",
              margin: "auto",
              display: "flex",
            }}
          >
            {header.map((item, index) => (
              <Box
                key={`third-screen_header-${index}`}
                sx={{
                  width: `calc(100% / ${header.length})`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  color: index === curentItem ? "#47FFF4" : "#FFFFFF",
                  cursor: "pointer",
                  ":hover": {
                    color: "#47FFF4",
                  },
                }}
                onClick={() => setCurentItem(index)}
              >
                <Box sx={{}}>
                  <Typography
                    fontFamily="Inter"
                    fontWeight={400}
                    fontSize="20px"
                    fontStyle="italic"
                    color="inherit"
                  >
                    {item.title}
                  </Typography>
                </Box>
                {index !== header.length - 1 && (
                  <Box
                    id="btn_line"
                    sx={{ position: "absolute", right: "-50px" }}
                  >
                    <Line />
                  </Box>
                )}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              height: "500px",
              marginTop: "120px",
            }}
          >
            <Box sx={{ marginRight: "240px" }}>
              <Typography
                fontFamily="Furore"
                fontSize="75px"
                textTransform="uppercase"
                style={{
                  textFillColor: "transparent",
                  backgroundcolor: "primary",
                  backgroundImage:
                    "linear-gradient(180.74deg, #FFFFFF 0.64%, rgba(255, 255, 255, 0) 247.44%)",
                  backgroundSize: "100%",
                  backgroundRepeat: "repeat",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                introduce
              </Typography>
              <Typography
                fontFamily="Inter"
                fontSize="45px"
                fontWeight="500"
                color="#FFFFFF"
              >
                {header[curentItem].title}
              </Typography>
              <Box sx={{ width: "530px", marginTop: "35px" }}>
                <Typography
                  fontFamily="Inter"
                  fontSize="18px"
                  fontWeight="300"
                  color="#FFFFFF"
                >
                  {header[curentItem].descriptionOne}
                </Typography>
                {header[curentItem].descriptionTwo && (
                  <Typography
                    fontFamily="Inter"
                    fontSize="18px"
                    fontWeight="300"
                    color="#FFFFFF"
                    style={{ marginTop: "25px" }}
                  >
                    {header[curentItem].descriptionTwo}
                  </Typography>
                )}
              </Box>
              <Box
                className="first_dsBtn"
                sx={{
                  background: `url(${GreenBtn})`,
                  cursor: "pointer",
                  width: 225,
                  height: 64,
                  marginTop: "40px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize="18px"
                    fontStyle="italic"
                    fontWeight="400"
                    textTransform="uppercase"
                    color="#000000"
                    style={{ marginLeft: "11px" }}
                  >
                    explore the lore
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {!desktop1080Width && desktop768Width && (
        <Box sx={{ backgroundColor: "#000000", position: "relative" }}>
          <Box
            sx={{
              background: `url(${header[curentItem].background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "bottom",
              position: "absolute",
              width: "100%",
              height: "calc(100% - 400px)",
              bottom: 0,
              left: 0,
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              height: "380px",
              width: "100%",
              background:
                "linear-gradient(180deg, #000000 4.37%, rgba(0, 0, 0, 0) 89.52%)",
              top: "360px",
              right: 0,
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "relative",
              padding: "59px 0px 350px 0px",
              zIndex: 3,
            }}
          >
            <Box
              sx={{
                zIndex: 3,
              }}
            >
              <Box
                sx={{
                  background: `url(${HeaderTexture})`,
                  width: "calc(100vw - 48px)",
                  height: "60px",
                  margin: "auto",
                  display: "flex",
                }}
              >
                {header.slice(0, header.length / 2).map((item, index) => (
                  <Box
                    key={`third-screen_header-${index}`}
                    sx={{
                      width: `calc(100% / ${header.length / 2})`,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                      color: index === curentItem ? "#47FFF4" : "#FFFFFF",
                      cursor: "pointer",
                      ":hover": {
                        color: "#47FFF4",
                      },
                    }}
                    onClick={() => setCurentItem(index)}
                  >
                    <Box>
                      <Typography
                        fontFamily="Inter"
                        fontWeight={400}
                        fontSize="20px"
                        fontStyle="italic"
                        color="inherit"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    {index !== header.length / 2 - 1 && (
                      <Box
                        id="btn_line"
                        sx={{ position: "absolute", right: "-50px" }}
                      >
                        <Line />
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  background: `url(${HeaderTexture})`,
                  width: "calc(100vw - 48px)",
                  height: "60px",
                  margin: "auto",
                  marginTop: "17px",
                  display: "flex",
                }}
              >
                {header
                  .slice(header.length / 2, header.length)
                  .map((item, index) => (
                    <Box
                      key={`third-screen_header-${index + header.length / 2}`}
                      sx={{
                        width: `calc(100% / ${header.length / 2})`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        color:
                          index + header.length / 2 === curentItem
                            ? "#47FFF4"
                            : "#FFFFFF",
                        cursor: "pointer",
                        ":hover": {
                          color: "#47FFF4",
                        },
                      }}
                      onClick={() => setCurentItem(index + header.length / 2)}
                    >
                      <Box sx={{}}>
                        <Typography
                          fontFamily="Inter"
                          fontWeight={400}
                          fontSize="20px"
                          fontStyle="italic"
                          color="inherit"
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      {index !== header.length / 2 - 1 && (
                        <Box
                          id="btn_line"
                          sx={{ position: "absolute", right: "-50px" }}
                        >
                          <Line />
                        </Box>
                      )}
                    </Box>
                  ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                height: "420px",
                marginTop: "120px",
              }}
            >
              <Box sx={{ marginRight: "29px" }}>
                <Typography
                  fontFamily="Furore"
                  fontSize="60px"
                  lineHeight="60px"
                  textTransform="uppercase"
                  style={{
                    textFillColor: "transparent",
                    backgroundcolor: "primary",
                    backgroundImage:
                      "linear-gradient(180.74deg, #FFFFFF 0.64%, rgba(255, 255, 255, 0) 247.44%)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  introduce
                </Typography>
                <Typography
                  fontFamily="Inter"
                  fontSize="45px"
                  fontWeight="500"
                  color="#FFFFFF"
                  marginTop="60px"
                  lineHeight="54.46px"
                >
                  {header[curentItem].title}
                </Typography>
                <Box sx={{ marginTop: "30px" }}>
                  <Typography
                    fontFamily="Inter"
                    fontSize="18px"
                    fontWeight="300"
                    color="#FFFFFF"
                    lineHeight="21.78px"
                    maxWidth="420px"
                  >
                    {header[curentItem].descriptionOne}
                  </Typography>
                  {header[curentItem].descriptionTwo && (
                    <Typography
                      fontFamily="Inter"
                      fontSize="18px"
                      fontWeight="300"
                      color="#FFFFFF"
                      lineHeight="21.78px"
                      maxWidth="420px"
                      style={{ marginTop: "15px" }}
                    >
                      {header[curentItem].descriptionTwo}
                    </Typography>
                  )}
                </Box>
                <Box
                  className="first_dsBtn"
                  sx={{
                    background: `url(${GreenBtn})`,
                    cursor: "pointer",
                    width: 225,
                    height: 64,
                    marginTop: "40px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Typography
                      fontFamily="Inter"
                      fontSize="18px"
                      fontStyle="italic"
                      fontWeight="400"
                      textTransform="uppercase"
                      color="#000000"
                      style={{ marginLeft: "11px" }}
                    >
                      explore the lore
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
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
            padding: "75px 0px 80px 0px",
            backgroundColor: "#000000",
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
              introduce
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
                width: `${header.length * 125}px`,
                marginLeft: !desktop530Width
                  ? `calc(15px + max(calc(${
                      header.length * 125 + 30
                    }px - 100vw), 0px) * -${curentProgress})`
                  : 0,
              }}
            >
              {header.map((item, index) => (
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
                marginLeft: !desktop530Width
                  ? `calc(15px + max(calc(${
                      header.length * 125 + 30
                    }px - 100vw), 0px) * -${curentProgress})`
                  : 0,
                marginTop: "21px",
                width: `${header.length * 125}px`,
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
                    curentProgress * (header.length * 125 - 125)
                  }px`,
                }}
              ></Box>
            </Box>
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
              {header.map((item, index) => (
                <SwiperSlide key={`screen-3-swiper-item-${index}`}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "end",
                      position: "relative",
                      height: "400px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${item.background})`,
                        height: "343px",
                        width: "100%",
                        backgroundPositionY: "top",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPositionX: item.mobilePosition || "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "end",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        height: "180px",
                        width: "100%",
                        background:
                          "linear-gradient(0deg, #000000 9.32%, rgba(0, 0, 0, 0) 91.43%)",
                        bottom: "0",
                      }}
                    />
                    <Box sx={{ zIndex: 1, paddingLeft: "15px" }}>
                      <Typography
                        fontFamily="Inter"
                        fontSize="30px"
                        fontWeight="500"
                        color="#FFFFFF"
                        lineHeight="36.31px"
                      >
                        {item.title}
                      </Typography>
                      <Box sx={{ marginTop: "15px" }}>
                        <Typography
                          fontFamily="Inter"
                          fontSize="13px"
                          fontWeight="300"
                          color="#FFFFFF"
                          lineHeight="15.73px"
                          maxWidth="290px"
                        >
                          {item.descriptionOne}
                        </Typography>
                        {item.descriptionTwo && (
                          <Typography
                            fontFamily="Inter"
                            marginTop="15px"
                            fontSize="13px"
                            fontWeight="300"
                            color="#FFFFFF"
                            lineHeight="15.73px"
                            maxWidth="290px"
                          >
                            {item.descriptionTwo}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className="first_dsBtn"
                    sx={{
                      background: `url(${GreenBtn})`,
                      cursor: "pointer",
                      width: 199,
                      height: 50,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      marginTop: "40px",
                      marginLeft: "15px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <Typography
                        fontFamily="Inter"
                        fontSize="14px"
                        fontStyle="italic"
                        fontWeight="400"
                        textTransform="uppercase"
                        color="#000000"
                      >
                        explore the lore
                      </Typography>
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

export default Third;
