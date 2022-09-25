import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner1Color,
  Partner2Color,
  Partner3Color,
  Partner4Color,
  // Partner5,
} from "../../imgs/webp/screen8";

const Eight = () => {
  const desktopImageWidth = useMediaQuery("(min-width: 1555px");
  const desktopFlexWidth = useMediaQuery("(min-width: 1300px");
  const desktop1080Width = useMediaQuery("(min-width: 1000px");

  const desktop768Width = useMediaQuery("(min-width: 768px");

  return (
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            padding: "165px 80px 180px 80px",
            display: desktopFlexWidth ? "flex" : "",
            justifyContent: "space-between",
            backgroundColor: "#091015",
            gap: "20px",
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
              minWidth={desktopImageWidth ? "630px" : "unset"}
              maxWidth={desktopImageWidth ? "unset" : "436"}
            >
              OUR PARTNERS
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "60px",
              marginTop: desktopFlexWidth ? "unset" : "45px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "235px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  ":hover": {
                    ".partner1": {
                      opacity: 0,
                    },
                    ".partner1Color": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  className="partner1"
                  sx={{
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <img src={`${Partner1}`} alt="Pay accept" loading="lazy" />
                </Box>
                <Box
                  className="partner1Color"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <img
                    src={`${Partner1Color}`}
                    alt="Pay accept"
                    loading="lazy"
                    width="320px"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  ":hover": {
                    ".partner3": {
                      opacity: 0,
                    },
                    ".partner3Color": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  className="partner3"
                  sx={{
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <img
                    src={`${Partner3}`}
                    width={desktopImageWidth ? "393px" : "321px"}
                    alt="Tamashi"
                    loading="lazy"
                  />
                </Box>
                <Box
                  className="partner3Color"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <img
                    src={`${Partner3Color}`}
                    width={desktopImageWidth ? "393px" : "321px"}
                    alt="Tamashi"
                    loading="lazy"
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "235px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  ":hover": {
                    ".partner2": {
                      opacity: 0,
                    },
                    ".partner2Color": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  className="partner2"
                  sx={{
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <img
                    src={`${Partner2}`}
                    alt={"Red Rift"}
                    width={desktopImageWidth ? "361px" : "318px"}
                    loading="lazy"
                  />
                </Box>
                <Box
                  className="partner2Color"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <img
                    src={`${Partner2Color}`}
                    alt={"Red Rift"}
                    loading="lazy"
                    width={desktopImageWidth ? "361px" : "318px"}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  ":hover": {
                    ".partner4": {
                      opacity: 0,
                    },
                    ".partner4Color": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  className="partner4"
                  sx={{
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <img
                    src={`${Partner4}`}
                    width={desktopImageWidth ? "305px" : "269px"}
                    alt={"Damnn"}
                    loading="lazy"
                  />
                </Box>
                <Box
                  className="partner4Color"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    opacity: 0,
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <img
                    src={`${Partner4Color}`}
                    width={desktopImageWidth ? "305px" : "269px"}
                    alt={"Damnn"}
                    loading="lazy"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {desktop768Width && !desktop1080Width && (
        <Box
          sx={{
            padding: "102px 25px 105px 25px",
            justifyContent: "space-between",
            backgroundColor: "#091015",
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
              OUR PARTNERS
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "45px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "190px",
                justifyContent: "space-between",
              }}
            >
              <img
                src={`${Partner1}`}
                alt="Pay accept"
                loading="lazy"
                width="270px"
              />
              <img
                src={`${Partner3}`}
                alt="Tamashi"
                loading="lazy"
                width="268px"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "190px",
                justifyContent: "space-between",
              }}
            >
              <img
                src={`${Partner2}`}
                alt={"Red Rift"}
                loading="lazy"
                width="305px"
              />
              <img
                src={`${Partner4}`}
                alt={"Damnn"}
                loading="lazy"
                width="224px"
              />
              {/* <img src={`${Partner5}`} alt={"Moonraised"} loading="lazy" /> */}
            </Box>
          </Box>
        </Box>
      )}
      {!desktop768Width && !desktop1080Width && (
        <Box
          sx={{
            padding: "76px 15px 76px 15px",
            backgroundColor: "#091015",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100px",
              background:
                "linear-gradient(178.64deg, rgba(9, 16, 21, 0) 1.16%, #091015 84.64%)",
              position: "absolute",
              transform: "matrix(1, 0, 0, -1, 0, 0)",
              top: "-2px",
              left: 0,
              zIndex: 0,
            }}
          />
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
              OUR PARTNERS
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "45px",
              height: "92px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img
                src={`${Partner1Color}`}
                alt="Pay accept"
                loading="lazy"
                width="135px"
              />
              <img
                src={`${Partner3Color}`}
                alt="Tamashi"
                loading="lazy"
                width="131px"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img
                src={`${Partner2Color}`}
                alt={"Red Rift"}
                loading="lazy"
                width="123px"
              />
              <img
                src={`${Partner4Color}`}
                alt={"Damnn"}
                loading="lazy"
                width="107px"
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Eight;
