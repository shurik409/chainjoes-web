import React from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import Header from "./components/header";
import Background from "../../imgs/first_screen.png";
import Scratches from "../../imgs/scratches.svg";
import ScratchesTablet from "../../imgs/screen1/scratchesTablet.png";
import ScratchesMobile from "../../imgs/screen1/scratchesMobile.png";
// import DiscordBtn from "../../imgs/discord_btn.png";
import GreenBtn from "../../imgs/green_btn.png";
import { DsLogo } from "./components/header/components/Icons";
import FirstFooter from "../../imgs/first_footer.png";

const First = () => {
  const desktop1080Width = useMediaQuery("(min-width: 1000px");
  const desktop768Width = useMediaQuery("(min-width: 768px");
  const desktop1080Height = useMediaQuery("(min-height: 1000px");
  const desktop768Height = useMediaQuery("(min-height: 685px");

  return (
    <Box>
      {desktop1080Width && (
        <Box sx={{ position: "relative", height: "100vh" }}>
          <Box
            sx={{
              height: "100vh",
              width: "100%",
              background: `url(${Background})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundSize: "cover",
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: -1,
            }}
          ></Box>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              background:
                "linear-gradient(111.64deg, #000000 9.79%, rgba(0, 0, 0, 0) 74.77%)",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          ></Box>
          <Box
            sx={{
              marginLeft: "70px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Header />
          </Box>
          <Box
            sx={
              !desktop1080Height && {
                display: "flex",
                justifyContent: "center",
                height: "calc(100% - 100px)",
                flexDirection: "column",
              }
            }
          >
            <Box
              sx={{
                position: "relative",
                marginTop: () => {
                  if (desktop1080Height) {
                    return "120px";
                  } else if (desktop768Height) {
                    return "20px";
                  }
                },
                marginLeft: "80px",
              }}
            >
              <Box
                sx={{
                  background: `url(${Scratches})`,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              ></Box>
              <Typography
                fontFamily="Furore"
                fontSize={() => {
                  if (desktop1080Height && desktop1080Width) {
                    return "95px";
                  } else if (desktop768Height) {
                    return "80px";
                  } else {
                    return "60px";
                  }
                }}
                color="#ffffff"
                lineHeight={() => {
                  if (desktop1080Height) {
                    return "95px";
                  } else if (desktop768Height) {
                    return "80px";
                  } else {
                    return "60px";
                  }
                }}
                maxWidth={desktop768Height ? "800px" : "500px"}
              >
                WELCOME <br /> TO{" "}
                <span style={{ color: "#44F4C3", display: "inline" }}>
                  CHAIN JOES WORLD
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                width: desktop768Height ? "590px" : "400px",
                marginTop: desktop768Height ? "60px" : "15px",
                marginLeft: "80px",
              }}
            >
              <Typography
                fontFamily="Inter"
                fontSize={desktop768Height ? "24px" : "16px"}
                color="#ffffff"
                fontWeight="400"
                lineHeight={desktop768Height ? "28.8px" : "21.8px"}
              >
                Chain Joes is an action-packed mobile game designed for the WEB3
                generation
              </Typography>
              <Typography
                fontFamily="Inter"
                fontSize={desktop768Height ? "18px" : "14px"}
                color="#ffffff"
                fontWeight="300"
                lineHeight="21.8px"
                style={{ marginTop: desktop768Height ? "25px" : "15px" }}
              >
                Battle with each other to win and earn rewards through our
                Play-and-Earn mechanics and protect the community from Spammers,
                Scammers and Hackers to get unique rewards
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: desktop768Height ? "60px" : "15px",
                marginLeft: "80px",
                width: 288,
                height: 64,
                transform: desktop768Height ? "" : "scale(0.8)",
                transformOrigin: desktop768Height ? "" : "top left",
                ":hover": {
                  ".first_dsBtn": {
                    transform: "translateY(-5px)",
                  },
                },
              }}
            >
              <Link
                href="https://discord.com/invite/6XcvPDbXBa"
                target="_blank"
                underline="none"
              >
                <Box
                  className="first_dsBtn"
                  sx={{
                    background: `url(${GreenBtn})`,
                    cursor: "pointer",
                    width: 288,
                    height: 64,
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
                    <DsLogo color="#000000" />
                    <Typography
                      fontFamily="Inter"
                      fontSize="16px"
                      fontStyle="italic"
                      fontWeight="400"
                      textTransform="uppercase"
                      color="#000000"
                      style={{ marginLeft: "11px" }}
                    >
                      Join discord server
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              background: `url(${FirstFooter})`,
              height: "230px",
              width: "100%",
              bottom: "-160px",
              backgroundSize: "cover",
              zIndex: -1,
            }}
          />
        </Box>
      )}
      {!desktop1080Width && desktop768Width && (
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            backgroundColor: "#000000",
            zIndex: 0,
          }}
        >
          <Box>
            <Box
              sx={{
                width: "100%",
                height: "calc(100vh - 681px)",
                background:
                  "linear-gradient(180deg, #000000 7.85%, rgba(0, 0, 0, 0) 78.92%)",
                position: "absolute",
                top: "calc(100vh - 681px)",
                left: 0,
                zIndex: -1,
              }}
            />
            <Box
              sx={{
                height: "100vh",
                maxHeight: "681px",
                width: "100%",
                background: `url(${Background})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
                backgroundSize: "cover",
                position: "absolute",
                bottom: 0,
                right: 0,
                zIndex: -2,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
            }}
          >
            <Header padding="0 44px 0 80px" />
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                marginTop: "60px",
                marginLeft: "27px",
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  background: `url(${ScratchesTablet})`,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              ></Box>
              <Typography
                fontFamily="Furore"
                fontSize="60px"
                color="#ffffff"
                lineHeight="60px"
              >
                WELCOME TO <br />
                <span style={{ color: "#44F4C3", display: "inline" }}>
                  CHAIN JOES WORLD
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                width: "530px",
                marginTop: "40px",
                marginLeft: "30px",
              }}
            >
              <Typography
                fontFamily="Inter"
                fontSize="22px"
                color="#ffffff"
                fontWeight="400"
                lineHeight="26.4px"
              >
                Chain Joes is an action-packed mobile game designed for the WEB3
                generation
              </Typography>
              <Typography
                fontFamily="Inter"
                fontSize="14px"
                color="#ffffff"
                fontWeight="300"
                lineHeight="16.94px"
                marginTop="25px"
                maxWidth="534px"
              >
                Battle with each other to win and earn rewards through our
                <br />
                Play-and-Earn mechanics and protect the community from Spammers,
                Scammers and Hackers to get unique rewards
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "40px",
                marginLeft: "30px",
                width: 288,
                height: 64,
                ":hover": {
                  ".first_dsBtn": {
                    transform: "translateY(-5px)",
                  },
                },
              }}
            >
              <Link
                href="https://discord.com/invite/6XcvPDbXBa"
                target="_blank"
                underline="none"
              >
                <Box
                  className="first_dsBtn"
                  sx={{
                    background: `url(${GreenBtn})`,
                    cursor: "pointer",
                    width: 288,
                    height: 64,
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
                    <DsLogo color="#000000" />
                    <Typography
                      fontFamily="Inter"
                      fontSize="16px"
                      fontStyle="italic"
                      fontWeight="400"
                      textTransform="uppercase"
                      color="#000000"
                      style={{ marginLeft: "11px" }}
                    >
                      Join discord server
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              background: `url(${FirstFooter})`,
              height: "230px",
              width: "100%",
              bottom: "-160px",
              backgroundSize: "cover",
              zIndex: -1,
            }}
          />
        </Box>
      )}
      {!desktop1080Width && !desktop768Width && (
        <Box
          sx={{
            position: "relative",
            height: "100vh",
            backgroundColor: "#000000",
            zIndex: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "100px",
              height: "calc(100vh - 200px)",
              minHeight: "382px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "135px",
                background:
                  "linear-gradient(180deg, #000000 13.63%, rgba(0, 0, 0, 0) 92.63%)",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
              }}
            />
            <Box
              sx={{
                height: "100%",
                width: "100%",
                background: `url(${Background})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center",
                backgroundSize: "cover",
                position: "absolute",
                bottom: "0",
                right: 0,
                zIndex: -2,
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: "135px",
                background:
                  "linear-gradient(0deg, #000000 9.79%, rgba(0, 0, 0, 0) 74.77%)",
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: -1,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
            }}
          >
            <Header padding="0 15px 0 15px" />
          </Box>
          <Box
            sx={{
              paddingX: "13px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "calc(100% - 80px)",
            }}
          >
            <Box
              sx={{
                position: "relative",
                marginTop: "29px",
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  background: `url(${ScratchesMobile})`,
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              ></Box>
              <Typography
                fontFamily="Furore"
                fontSize="35px"
                color="#ffffff"
                lineHeight="35px"
              >
                WELCOME
                <br />
                TO{" "}
                <span style={{ color: "#44F4C3", display: "inline" }}>
                  CHAIN JOES
                  <br />
                  WORLD
                </span>
              </Typography>
            </Box>
            <Box>
              <Box>
                <Typography
                  fontFamily="Inter"
                  fontSize="14px"
                  color="#ffffff"
                  fontWeight="300"
                  lineHeight="16.94px"
                  marginTop="25px"
                  marginX="auto"
                >
                  Battle with each other to win and earn rewards through our
                  Play-and-Earn mechanics and protect the community from
                  Spammers, Scammers and Hackers to get unique rewards
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: "40px",
                  ":hover": {
                    ".first_dsBtn": {
                      transform: "translateY(-5px)",
                    },
                  },
                }}
              >
                <Link
                  href="https://discord.com/invite/6XcvPDbXBa"
                  target="_blank"
                  underline="none"
                >
                  <Box
                    className="first_dsBtn"
                    sx={{
                      background: `url(${GreenBtn})`,
                      cursor: "pointer",
                      width: 253,
                      height: 50,
                      marginX: "auto",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
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
                      <DsLogo
                        color="#000000"
                        style={{ display: "block", height: "20px" }}
                      />
                      <Typography
                        fontFamily="Inter"
                        fontSize="14px"
                        fontStyle="italic"
                        fontWeight="400"
                        textTransform="uppercase"
                        color="#000000"
                        style={{ marginLeft: "11px" }}
                      >
                        Join discord server
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              background: `url(${FirstFooter})`,
              height: "230px",
              width: "100%",
              bottom: "-160px",
              backgroundSize: "cover",
              zIndex: -1,
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default First;
