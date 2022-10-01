import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  FirstImg,
  SecondImg,
  ThirdImg,
  Mask,
  SmokeMobile,
  MaskTablet,
} from "../../imgs/webp/screen4";
import Smoke from "../../imgs/smoke2x.png";

const Fourth = () => {
  const activities = [
    {
      title: "Play different modes",
      description:
        "Explore classic deathmatch, battle royale, meat grinder, capture the flag, duck hunt, run the labyrinth and become a champ.",
      descriptionWidth: "410px",
      descriptionWidthMobile: "242px",
      img: FirstImg,
      mask: Mask,
      maskTablet: MaskTablet,
      height: "400px",
      transformX: "-51%",
      transformY: "-54%",
    },
    {
      title: "Create clan",
      description: "Unite with others to fight more effectively.",
      descriptionWidth: "250px",
      descriptionWidthMobile: "235px",
      descriptionWidthTablet: "195px",
      img: SecondImg,
      mask: Mask,
      maskTablet: MaskTablet,
      height: "410px",
      transformX: "-50%",
      transformY: "-61%",
    },
    {
      title: "Join weekly & seasonal activities & tournaments",
      description:
        "Participate in various quests and missions to receive unique rewards and $CJs tokens.",
      descriptionWidthMobile: "243px",
      img: ThirdImg,
      mask: Mask,
      maskTablet: MaskTablet,
      height: "400px",
      transformX: "-51%",
      transformY: "-55%",
      mobileTop: "105%",
      mobileLeft: "52%",
    },
  ];

  const desktopBigWidth = useMediaQuery("(min-width: 1890px)");

  const desktopThreeWidth = useMediaQuery("(min-width: 1440px)");

  const desktop1080Width = useMediaQuery("(min-width: 1330px)");

  const tabletThreeWidth = useMediaQuery("(min-width: 1100px)");

  const tablet768Width = useMediaQuery("(min-width: 768px)");

  return (
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            background: `url(${Smoke})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: desktopThreeWidth
              ? "175px 80px 140px 80px"
              : "175px 40px 140px 40px",
          }}
        >
          <Box>
            <Typography
              fontFamily="Furore"
              fontSize="75px"
              color="#ffffff"
              lineHeight="75px"
              marginLeft={desktopThreeWidth ? "unset" : "40px"}
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
            >
              Activities
            </Typography>
          </Box>
          <Box>
            {desktopBigWidth ? (
              <Box
                sx={{
                  marginTop: "92px",
                  width: "100%",
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                {activities.map((item, index) => (
                  <Box
                    key={`screen4-activity-${index}`}
                    sx={{
                      position: "relative",
                      border: "1px solid",
                      borderImageSlice: 1,
                      borderWidth: "1px",
                      borderStyle: "outset",
                      borderColor: "buttonborder",
                      borderImageSource:
                        "linear-gradient(154.48deg, rgba(0, 255, 183, 0) -12.15%, rgba(71, 255, 244, 0.722892) 28.8%, #FFFFFF 44.5%, rgba(0, 178, 255, 0.55) 66.34%, rgba(0, 255, 183, 0) 117.45%)",
                      width: "567px ",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box marginLeft="45px" sx={{ flexGrow: 2 }}>
                      <Typography
                        fontFamily="Furore"
                        fontSize="26px"
                        color="#44F4C3"
                        marginTop="45px"
                        lineHeight="28.6px"
                      >{`[0${index + 1}]`}</Typography>
                      <Typography
                        fontFamily="Furore"
                        fontSize="26px"
                        color="#FFFFFF"
                        width="410px"
                        marginTop="20px"
                        lineHeight="28.6px"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        fontFamily="Inter"
                        fontSize="18px"
                        fontWeight="300"
                        color="#FFFFFF"
                        width="400px"
                        marginTop="20px"
                        lineHeight="21.8px"
                      >
                        {item.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "376px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  marginTop: "60px",
                  width: "100%",
                  justifyContent: "space-around",
                  display: "flex",
                }}
              >
                {activities.map((item, index) => (
                  <Box
                    key={`screen4-activity-${index}`}
                    sx={{
                      position: "relative",
                      border: "1px solid",
                      borderImageSlice: 1,
                      borderWidth: "1px",
                      borderStyle: "outset",
                      borderColor: "buttonborder",
                      borderImageSource:
                        "linear-gradient(154.48deg, rgba(0, 255, 183, 0) -12.15%, rgba(71, 255, 244, 0.722892) 28.8%, #FFFFFF 44.5%, rgba(0, 178, 255, 0.55) 66.34%, rgba(0, 255, 183, 0) 117.45%)",
                      width: "405px ",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box marginLeft="45px" sx={{ flexGrow: 2 }}>
                      <Typography
                        fontFamily="Furore"
                        fontSize="26px"
                        color="#44F4C3"
                        marginTop="45px"
                        lineHeight="28.6px"
                      >{`[0${index + 1}]`}</Typography>
                      <Typography
                        fontFamily="Furore"
                        fontSize="26px"
                        color="#FFFFFF"
                        width="340px"
                        marginTop="20px"
                        lineHeight="28.6px"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        fontFamily="Inter"
                        fontSize="18px"
                        fontWeight="300"
                        color="#FFFFFF"
                        width="343px"
                        marginTop="20px"
                        lineHeight="21.8px"
                      >
                        {item.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: "290px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        height="290px"
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      )}
      {tablet768Width && !desktop1080Width && (
        <Box
          sx={{
            background: `url(${Smoke})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "105px 28px 192px 28px",
          }}
        >
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
            >
              Activities
            </Typography>
            <Box>
              {tabletThreeWidth ? (
                <Box
                  sx={{
                    marginTop: "60px",
                    width: "100%",
                    justifyContent: "space-around",
                    display: "flex",
                  }}
                >
                  {activities.map((item, index) => (
                    <Box
                      key={`screen4-activity-${index}`}
                      sx={{
                        position: "relative",
                        border: "1px solid",
                        borderImageSlice: 1,
                        borderWidth: "1px",
                        borderStyle: "outset",
                        borderColor: "buttonborder",
                        borderImageSource:
                          "linear-gradient(154.48deg, rgba(0, 255, 183, 0) -12.15%, rgba(71, 255, 244, 0.722892) 28.8%, #FFFFFF 44.5%, rgba(0, 178, 255, 0.55) 66.34%, rgba(0, 255, 183, 0) 117.45%)",
                        width: "344px ",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box marginLeft="26px" sx={{ flexGrow: 2 }}>
                        <Typography
                          fontFamily="Furore"
                          fontSize="20px"
                          color="#44F4C3"
                          marginTop="27px"
                          lineHeight="22px"
                        >{`[0${index + 1}]`}</Typography>
                        <Typography
                          fontFamily="Furore"
                          fontSize="20px"
                          color="#FFFFFF"
                          width="280px"
                          marginTop="20px"
                          lineHeight="22px"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          fontFamily="Inter"
                          fontSize="14px"
                          fontWeight="300"
                          color="#FFFFFF"
                          width="294px"
                          marginTop="20px"
                          lineHeight="16.94px"
                        >
                          {item.description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          height: "225px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={`${item.img}`}
                          alt={item.title}
                          loading="lazy"
                          height="225px"
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Box>
                  <Box
                    sx={{
                      marginTop: "60px",
                      width: "100%",
                      justifyContent: "space-around",
                      display: "flex",
                    }}
                  >
                    {activities.slice(0, 2).map((item, index) => (
                      <Box
                        key={`screen4-activity-${index}`}
                        sx={{
                          position: "relative",
                          border: "1px solid",
                          borderImageSlice: 1,
                          borderWidth: "1px",
                          borderStyle: "outset",
                          borderColor: "buttonborder",
                          borderImageSource:
                            "linear-gradient(154.48deg, rgba(0, 255, 183, 0) -12.15%, rgba(71, 255, 244, 0.722892) 28.8%, #FFFFFF 44.5%, rgba(0, 178, 255, 0.55) 66.34%, rgba(0, 255, 183, 0) 117.45%)",
                          width: "344px ",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box marginLeft="26px" sx={{ flexGrow: 2 }}>
                          <Typography
                            fontFamily="Furore"
                            fontSize="20px"
                            color="#44F4C3"
                            marginTop="27px"
                            lineHeight="22px"
                          >{`[0${index + 1}]`}</Typography>
                          <Typography
                            fontFamily="Furore"
                            fontSize="20px"
                            color="#FFFFFF"
                            width="280px"
                            marginTop="20px"
                            lineHeight="22px"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            fontFamily="Inter"
                            fontSize="14px"
                            fontWeight="300"
                            color="#FFFFFF"
                            width="294px"
                            marginTop="20px"
                            lineHeight="16.94px"
                          >
                            {item.description}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            height: "225px",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                            height="225px"
                          />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      marginTop: "30px",
                      width: "100%",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <Box
                      key={`screen4-activity-${2}`}
                      sx={{
                        position: "relative",
                        border: "1px solid",
                        borderImageSlice: 1,
                        borderWidth: "1px",
                        borderStyle: "outset",
                        borderColor: "buttonborder",
                        borderImageSource:
                          "linear-gradient(154.48deg, rgba(0, 255, 183, 0) -12.15%, rgba(71, 255, 244, 0.722892) 28.8%, #FFFFFF 44.5%, rgba(0, 178, 255, 0.55) 66.34%, rgba(0, 255, 183, 0) 117.45%)",
                        width: "344px ",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box marginLeft="26px" sx={{ flexGrow: 2 }}>
                        <Typography
                          fontFamily="Furore"
                          fontSize="20px"
                          color="#44F4C3"
                          marginTop="27px"
                          lineHeight="22px"
                        >{`[0${3}]`}</Typography>
                        <Typography
                          fontFamily="Furore"
                          fontSize="20px"
                          color="#FFFFFF"
                          width="280px"
                          marginTop="20px"
                          lineHeight="22px"
                        >
                          {activities[2].title}
                        </Typography>
                        <Typography
                          fontFamily="Inter"
                          fontSize="14px"
                          fontWeight="300"
                          color="#FFFFFF"
                          width="294px"
                          marginTop="20px"
                          lineHeight="16.94px"
                        >
                          {activities[2].description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          height: "225px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={`${activities[2].img}`}
                          alt={activities[2].title}
                          loading="lazy"
                          height="225px"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}
      {!tablet768Width && !desktop1080Width && (
        <Box
          sx={{
            background: `url(${SmokeMobile})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "76px 0px 80px 0px",
          }}
        >
          <Box>
            <Typography
              fontFamily="Furore"
              fontSize="32px"
              color="#ffffff"
              lineHeight="32px"
              textAlign="center"
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
            >
              Activities
            </Typography>
            <Box>
              <Box
                sx={{
                  marginTop: "44px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {activities.map((item, index) => (
                  <Box
                    key={`screen4-activity-${index}`}
                    sx={{
                      position: "relative",
                      border: "1px solid",
                      borderImageSlice: 1,
                      borderWidth: "1px",
                      borderStyle: "outset",
                      borderColor: "buttonborder",
                      borderImageSource:
                        "linear-gradient(154.48deg, rgba(0, 255, 183, 0) -12.15%, rgba(71, 255, 244, 0.722892) 28.8%, #FFFFFF 44.5%, rgba(0, 178, 255, 0.55) 66.34%, rgba(0, 255, 183, 0) 117.45%)",
                      width: "290px ",
                      display: "flex",
                      flexDirection: "column",
                      marginTop: index ? "15px" : "unset",
                    }}
                  >
                    <Box marginLeft="23px" sx={{ flexGrow: 2 }}>
                      <Typography
                        fontFamily="Furore"
                        fontSize="16px"
                        color="#44F4C3"
                        marginTop="25px"
                        lineHeight="17.6px"
                      >{`[0${index + 1}]`}</Typography>
                      <Typography
                        fontFamily="Furore"
                        fontSize="16px"
                        color="#FFFFFF"
                        width="243px"
                        marginTop="20px"
                        lineHeight="19.2px"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        fontFamily="Inter"
                        fontSize="14px"
                        fontWeight="300"
                        color="#FFFFFF"
                        width="243px"
                        marginTop="13px"
                        lineHeight="15.73px"
                      >
                        {item.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: "225px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        height="225px"
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Fourth;
