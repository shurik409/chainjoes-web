import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import {
  FirstImg,
  SecondImg,
  ThirdImg,
  FourthImg,
  FiveImg,
} from "../../imgs/webp/screen2";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import {
  FirstImg as PersFirstImg,
  SecondImg as PersSecondImg,
  ThirdImg as PersThirdImg,
  FourthImg as PersFourthImg,
  FiveImg as PersFiveImg,
  SixImg as PersSixImg,
} from "../../imgs/webp/screen3";

import ArrowRight from "../../imgs/new/arrow-right-green.svg";
import ArrowLeft from "../../imgs/new/arrow-left-green.svg";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Explore = () => {
  const persSwiper = useRef(null);
  const [activePers, setActivePers] = useState(0);
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

  const desktop1080Width = true;

  const perses = [
    {
      title: "Mr. Tyr",
      img: PersFirstImg,
      description:
        "This is carved on the coat of arms of the house of Hodler, whose metaverse was covered with ice after it was destroyed by hackers decades ago.  ",
    },
    {
      title: "Anwar",
      img: PersSecondImg,
      description:
        "From the metaverse Greece 21, reconstructed on the fragments of ancient Greece with the help of web 3.0 technologies, the warrior Anwar arrived.",
    },
    {
      title: "Shaan",
      img: PersThirdImg,
      description:
        "Shaan has been a member of a cybercriminal gang from the Cyberizzz metaverse for many years. Due to the overabundance of various advanced technologies inside the city, it can «lag» a little — the locations are distorted and merge into each other. ",
    },
    {
      title: "Milcy",
      img: PersFourthImg,
      description:
        "MLc s9 is one of the 10 newest bots that were created as part of the experimental development of metaverse A2. which is engaged in the creation of spam bots. These bots were supposed to be the crown of creation, which would allow them to bypass all current firewalls.",
    },
    {
      title: "Deo",
      img: PersFiveImg,
      description:
        "The Monk Deo arrived from the metaverse Temple of Fate...On his planet, the monks were able to curb web 3.0 technologies and now draw strength from there. ",
    },
    {
      title: "Sam",
      img: PersSixImg,
      description:
        "Earth X300 has reached its peak of development and formed its own system. People live in prosperity, and technologies work for the benefit of humanity and deliver only comfort.",
    },
  ];

  return (
    <Box>
      {desktop1080Width && (
        <Box sx={{ paddingY: "228px" }}>
          <Box sx={{ marginBottom: "300px" }}>
            <Box
              sx={{
                width: { lg: "892px", xl: "1150px" },
                margin: "auto",
                ".swiper-button-next, .swiper-button-prev": {
                  width: 48,
                  height: 48,
                  background: "#fff",
                  borderRadius: "100px",
                },
                ".swiper-button-next": {
                  ":after": {
                    content: "''",
                    width: "24px",
                    height: "24px",
                    background: `url(${ArrowRight})`,
                  },
                },
                ".swiper-button-prev": {
                  ":after": {
                    content: "''",
                    width: "24px",
                    height: "24px",
                    background: `url(${ArrowLeft})`,
                  },
                },
                ".swiper-pagination": {
                  bottom: "-40px",
                },
                ".swiper-pagination-bullet": {
                  background: "#242424",
                  opacity: 1,
                },
                ".swiper-pagination-bullet-active": {
                  background: "#FFF",
                },
              }}
            >
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                grabCursor={true}
                className="mySwiper"
                effect={"flip"}
                pagination={true}
                modules={[EffectFlip, Pagination, Navigation]}
                navigation={{
                  enabled: true,
                }}
              >
                {texts.map((text, index) => (
                  <SwiperSlide>
                    <Box
                      sx={{
                        width: { lg: 740, xl: 880 },
                        height: { lg: 340, xl: 480 },
                        background:
                          "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Box sx={{ width: { lg: 260, xl: 400 } }}>
                          <img
                            src={text.img}
                            alt="explore"
                            width="inherit"
                            style={{ width: "inherit" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            maxWidth: "400px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            fontFamily="Aaaiight"
                            fontSize="32px"
                            color="#FFF"
                          >
                            {text.title}
                          </Typography>
                          <Typography
                            fontSize="16px"
                            color="#FFF"
                            marginTop="12px"
                          >
                            {text.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: "135px" }}>
            <Box
              sx={{
                display: { lg: "block", xl: "none" },
                marginBottom: "60px",
              }}
            >
              <Typography
                fontFamily="Aaaiight"
                fontSize="80px"
                color="#FFF"
                lineHeight="80px"
                textAlign="center"
              >
                Choose your <span style={{ color: "#005B42" }}>Joe</span>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Box>
                <Box sx={{ display: { lg: "none", xl: "block" } }}>
                  <Typography
                    fontFamily="Aaaiight"
                    fontSize="80px"
                    color="#FFF"
                    lineHeight="80px"
                  >
                    Choose
                    <br />
                    your <span style={{ color: "#005B42" }}>Joe</span>
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "32px" }}>
                  {perses.map((pers, index) => (
                    <Box
                      sx={{
                        width: "424px",
                        padding: "20px",
                        border:
                          index === activePers
                            ? "1px solid #005B42"
                            : "1px solid #242424",
                        borderRadius: "4px",
                        marginBottom: "20px",
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      <Box
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          persSwiper.current.swiper.slideTo(index);
                          setActivePers(index);
                        }}
                      >
                        <Typography
                          fontFamily="Aaaiight"
                          fontSize="18px"
                          lineHeight="18px"
                          color="#FFF"
                        >
                          {pers.title}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginTop: "8px",
                          maxHeight: index === activePers ? "120px" : "0px",
                          opacity: index === activePers ? 1 : 0,
                          overflow: "hidden",
                          transition: "all 0.2s ease-in-out",
                        }}
                      >
                        <Typography
                          color="#FFF"
                          maxWidth="370px"
                          fontSize="12px"
                        >
                          {pers.description}
                        </Typography>
                        <Typography
                          color="#00FFB7"
                          fontSize="12px"
                          marginTop="12px"
                        >
                          Explore the full lore
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={{ width: { lg: "500px", xl: "700px" } }}>
                <Swiper
                  slidesPerView={1}
                  centeredSlides={true}
                  grabCursor={false}
                  className="mySwiper"
                  effect={"flip"}
                  modules={[EffectFlip]}
                  pagination={false}
                  navigation={false}
                  ref={persSwiper}
                >
                  {perses.map((pers, index) => (
                    <SwiperSlide key={`pers-slide-${index}`}>
                      <Box
                        sx={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            top: "50%",
                            left: "50%",
                            position: "absolute",
                            width: { lg: 350, xl: 580 },
                            height: { lg: 435, xl: 721 },
                            background: "#2E2E2E",
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "rotate(10deg) translate(-50%, -50%)",
                            borderRadius: "8px",
                          }}
                        ></Box>
                        <Box
                          sx={{
                            width: { lg: 350, xl: 580 },
                            height: { lg: 435, xl: 721 },
                            background: `url(${pers.img})`,
                            backgroundSize: "cover",
                            margin: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transform: "rotate(-5deg)",
                            borderRadius: "8px",
                          }}
                        ></Box>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Explore;
