import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  FirstImg,
  SecondImg,
  ThirdImg,
  FirstMask,
  SecondMask,
  ThirdMask,
  Smoke,
  SmokeMobile,
  MaskTablet,
  MaskMobile,
} from "../../imgs/screen4";

const Fourth = () => {
  // // const [height, setHeight] = useState(window.innerHeight);
  // const [width, setWidth] = useState(document.documentElement.clientWidth);
  // useEffect(() => {
  //   const updateWindowDimensions = () => {
  //     // const newHeight = window.innerHeight;
  //     const newWidth = window.innerWidth;
  //     // setHeight(newHeight);
  //     setWidth(newWidth);
  //     console.log("updating height");
  //   };

  //   window.addEventListener("resize", updateWindowDimensions);

  //   return () => window.removeEventListener("resize", updateWindowDimensions);
  // }, []);

  const activities = [
    {
      title: "Play different modes",
      description:
        "Explore classic deathmatch, battle royale, meat grinder, capture the flag, duck hunt, run the labyrinth and become a champ.",
      descriptionWidth: "410px",
      descriptionWidthMobile: "242px",
      img: FirstImg,
      mask: FirstMask,
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
      mask: SecondMask,
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
      mask: ThirdMask,
      maskTablet: MaskTablet,
      height: "400px",
      transformX: "-51%",
      transformY: "-55%",
    },
  ];

  const desktopThreeWidth = useMediaQuery("(min-width: 1890px");

  const desktop1080Width = useMediaQuery("(min-width: 1330px");

  const tabletThreeWidth = useMediaQuery("(min-width: 1100px");

  const tablet768Width = useMediaQuery("(min-width: 768px");

  return (
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            background: `url(${Smoke})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            padding: "175px 80px 250px 80px",
          }}
        >
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
            >
              Activities
            </Typography>
          </Box>
          <Box>
            {desktopThreeWidth ? (
              <Box
                sx={{
                  marginTop: "92px",
                  width: "100%",
                  justifyContent: "space-around",
                  display: "flex",
                }}
              >
                {activities.map((item, index) => (
                  <Box
                    key={`screen4-activity-${index}`}
                    sx={{
                      width: "585px",
                      height: item.height,
                      background: `url(${item.mask})`,
                      backgroundPositionX: "center",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                    }}
                  >
                    <Box sx={{ marginLeft: "25px" }}>
                      <Typography
                        fontFamily="Furore"
                        fontSize="26px"
                        color="#44F4C3"
                        marginTop="45px"
                        lineHeight="28.6px"
                      >{`[0${index + 1}]`}</Typography>
                      <Typography
                        fontFamily="Inter"
                        fontSize="26px"
                        fontWeight="500"
                        color="#FFFFFF"
                        width="310px"
                        marginTop="9px"
                        lineHeight="28.6px"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        fontFamily="Inter"
                        fontSize="18px"
                        fontWeight="300"
                        color="#FFFFFF"
                        width={item.descriptionWidth || "400px"}
                        marginTop="9px"
                        lineHeight="21.8px"
                      >
                        {item.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        left: "50%",
                        transform: `translate(${item.transformX}, ${item.transformY})`,
                        top: "100%",
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
              <Box>
                <Box
                  sx={{
                    marginTop: "92px",
                    width: "100%",
                    justifyContent: "space-around",
                    display: "flex",
                  }}
                >
                  {activities.slice(0, 2).map((item, index) => (
                    <Box
                      key={`screen4-activity-${index}`}
                      sx={{
                        width: "585px",
                        height: item.height,
                        background: `url(${item.mask})`,
                        backgroundPositionX: "center",
                        backgroundRepeat: "no-repeat",
                        position: "relative",
                      }}
                    >
                      <Box sx={{ marginLeft: "45px" }}>
                        <Typography
                          fontFamily="Furore"
                          fontSize="26px"
                          color="#44F4C3"
                          marginTop="45px"
                          lineHeight="28.6px"
                        >{`[0${index + 1}]`}</Typography>
                        <Typography
                          fontFamily="Inter"
                          fontSize="26px"
                          fontWeight="500"
                          color="#FFFFFF"
                          width="310px"
                          marginTop="15px"
                          lineHeight="28.6px"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          fontFamily="Inter"
                          fontSize="18px"
                          fontWeight="300"
                          color="#FFFFFF"
                          width={item.descriptionWidth || "400px"}
                          marginTop="15px"
                          lineHeight="21.8px"
                        >
                          {item.description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          left: "50%",
                          transform: `translate(${item.transformX}, ${item.transformY})`,
                          top: "100%",
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
                <Box
                  sx={{
                    marginTop: "150px",
                    width: "100%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      width: "585px",
                      height: activities[2].height,
                      background: `url(${activities[2].mask})`,
                      backgroundPositionX: "center",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                    }}
                  >
                    <Box sx={{ marginLeft: "45px" }}>
                      <Typography
                        fontFamily="Furore"
                        fontSize="26px"
                        color="#44F4C3"
                        marginTop="45px"
                        lineHeight="28.6px"
                      >{`[0${3}]`}</Typography>
                      <Typography
                        fontFamily="Inter"
                        fontSize="26px"
                        fontWeight="500"
                        color="#FFFFFF"
                        width="310px"
                        marginTop="15px"
                        lineHeight="28.6px"
                      >
                        {activities[2].title}
                      </Typography>
                      <Typography
                        fontFamily="Inter"
                        fontSize="18px"
                        fontWeight="300"
                        color="#FFFFFF"
                        width={activities[2].descriptionWidth || "400px"}
                        marginTop="15px"
                        lineHeight="21.8px"
                      >
                        {activities[2].description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        left: "50%",
                        transform: `translate(${activities[2].transformX}, ${activities[2].transformY})`,
                        top: "100%",
                      }}
                    >
                      <img
                        src={`${activities[2].img}`}
                        alt={activities[2].title}
                        loading="lazy"
                      />
                    </Box>
                  </Box>
                </Box>
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
            padding: "105px 30px 192px 30px",
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
                    marginTop: "92px",
                    width: "100%",
                    justifyContent: "space-around",
                    display: "flex",
                  }}
                >
                  {activities.map((item, index) => (
                    <Box
                      key={`screen4-tablet-activity-${index}`}
                      sx={{
                        width: "345px",
                        height: "274px",
                        background: `url(${item.maskTablet})`,
                        backgroundPositionX: "center",
                        backgroundRepeat: "no-repeat",
                        position: "relative",
                      }}
                    >
                      <Box sx={{ marginLeft: "27px" }}>
                        <Typography
                          fontFamily="Furore"
                          fontSize="20px"
                          color="#44F4C3"
                          marginTop="27px"
                          lineHeight="23px"
                        >{`[0${index + 1}]`}</Typography>
                        <Typography
                          fontFamily="Inter"
                          fontSize="20px"
                          fontWeight="500"
                          color="#FFFFFF"
                          width="310px"
                          marginTop="9px"
                          lineHeight="22px"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          fontFamily="Inter"
                          fontSize="14px"
                          fontWeight="300"
                          color="#FFFFFF"
                          width={item.descriptionWidthTablet || "294px"}
                          marginTop="9px"
                          lineHeight="17px"
                        >
                          {item.description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          left: "50%",
                          transform: `translate(${item.transformX}, ${item.transformY})`,
                          top: "100%",
                        }}
                      >
                        <img
                          src={`${item.img}`}
                          width="240px"
                          alt={item.title}
                          loading="lazy"
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Box>
                  <Box
                    sx={{
                      marginTop: "92px",
                      width: "100%",
                      justifyContent: "space-around",
                      display: "flex",
                    }}
                  >
                    {activities.slice(0, 2).map((item, index) => (
                      <Box
                        key={`screen4-tablet-activity-${index}`}
                        sx={{
                          width: "345px",
                          height: "274px",
                          background: `url(${item.maskTablet})`,
                          backgroundPositionX: "center",
                          backgroundRepeat: "no-repeat",
                          position: "relative",
                        }}
                      >
                        <Box sx={{ marginLeft: "27px" }}>
                          <Typography
                            fontFamily="Furore"
                            fontSize="20px"
                            color="#44F4C3"
                            marginTop="27px"
                            lineHeight="23px"
                          >{`[0${index + 1}]`}</Typography>
                          <Typography
                            fontFamily="Inter"
                            fontSize="20px"
                            fontWeight="500"
                            color="#FFFFFF"
                            width="310px"
                            marginTop="9px"
                            lineHeight="22px"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            fontFamily="Inter"
                            fontSize="14px"
                            fontWeight="300"
                            color="#FFFFFF"
                            width={item.descriptionWidthTablet || "294px"}
                            marginTop="9px"
                            lineHeight="17px"
                          >
                            {item.description}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            position: "absolute",
                            left: "50%",
                            transform: `translate(${item.transformX}, ${item.transformY})`,
                            top: "100%",
                          }}
                        >
                          <img
                            src={`${item.img}`}
                            width="240px"
                            alt={item.title}
                            loading="lazy"
                          />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Box
                    sx={{
                      marginTop: "124px",
                      width: "100%",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        width: "345px",
                        height: "274px",
                        background: `url(${activities[0].maskTablet})`,
                        backgroundPositionX: "center",
                        backgroundRepeat: "no-repeat",
                        position: "relative",
                      }}
                    >
                      <Box sx={{ marginLeft: "27px" }}>
                        <Typography
                          fontFamily="Furore"
                          fontSize="20px"
                          color="#44F4C3"
                          marginTop="27px"
                          lineHeight="23px"
                        >{`[0${3}]`}</Typography>
                        <Typography
                          fontFamily="Inter"
                          fontSize="20px"
                          fontWeight="500"
                          color="#FFFFFF"
                          width="310px"
                          marginTop="9px"
                          lineHeight="22px"
                        >
                          {activities[2].title}
                        </Typography>
                        <Typography
                          fontFamily="Inter"
                          fontSize="14px"
                          fontWeight="300"
                          color="#FFFFFF"
                          width={
                            activities[2].descriptionWidthTablet || "294px"
                          }
                          marginTop="9px"
                          lineHeight="17px"
                        >
                          {activities[2].description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          left: "50%",
                          transform: `translate(${activities[2].transformX}, ${activities[2].transformY})`,
                          top: "100%",
                        }}
                      >
                        <img
                          src={`${activities[2].img}`}
                          width="240px"
                          alt={activities[2].title}
                          loading="lazy"
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
            padding: "76px 0px 162px 0px",
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
                  marginTop: "92px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {activities.map((item, index) => (
                  <Box
                    key={`screen4-tablet-activity-${index}`}
                    sx={{
                      width: "290px",
                      height: "273px",
                      background: `url(${MaskMobile})`,
                      backgroundPositionX: "center",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                      marginTop: index ? "119px" : "0",
                    }}
                  >
                    <Box sx={{ marginLeft: "27px" }}>
                      <Typography
                        fontFamily="Furore"
                        fontSize="15px"
                        color="#44F4C3"
                        marginTop="25px"
                        lineHeight="17.6px"
                      >{`[0${index + 1}]`}</Typography>
                      <Typography
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="400"
                        color="#FFFFFF"
                        maxWidth="191px"
                        marginTop="9px"
                        lineHeight="19.2px"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        fontFamily="Inter"
                        fontSize="13px"
                        fontWeight="300"
                        color="#FFFFFF"
                        maxWidth={item.descriptionWidthMobile}
                        marginTop="15px"
                        lineHeight="15.73px"
                      >
                        {item.description}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        left: "50%",
                        transform: `translate(${item.transformX}, ${item.transformY})`,
                        top: "100%",
                      }}
                    >
                      <img
                        src={`${item.img}`}
                        width="240px"
                        alt={item.title}
                        loading="lazy"
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
