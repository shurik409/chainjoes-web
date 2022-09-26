import React from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import {
  RedRiftLogo,
  WebLink,
  Smoke,
  SmokeMobile,
  Alex,
  Cris,
  Dasha,
  Egor,
  Hanna,
  Katsia,
  Maya,
  Mike,
  Nastia,
  Pasha,
  Veronika,
  Gary,
  LinkedIn,
} from "../../imgs/webp/screen7";

const Seven = () => {
  const managment = [
    {
      name: "Mike Sykora",
      job: (
        <>
          CEO,
          <br />
          Co-founder
        </>
      ),
      photo: Mike,
      nameWidth: "107px",
    },
    {
      name: "Christiaan van Steenbergen",
      job: "Blockchain CTO,  Co-founder",
      photo: Cris,
    },
    { name: "Gary Yankovich", job: "Chief Product Officer ", photo: Gary },
    { name: "Dasha Maltseva", job: "Chief Operating Officer ", photo: Dasha },
    { name: "Katsia Dziatlova", job: "Head of management", photo: Katsia },
  ];
  const marketing = [
    { name: "Egor Aniferyk", job: "Producer", photo: Egor },
    { name: "Maya Kostenkova", job: "Creative producer", photo: Maya },
    { name: "Hanna Valasheniuk", job: "Creative", photo: Hanna },
    { name: "Nastia Naumenko", job: "Head of graphic design", photo: Nastia },
    { name: "Veronika Yasulevich", job: "Graphic Designer", photo: Veronika },
    { name: "Pavel Ivuts", job: "Head of 3D arts", photo: Pasha },
    { name: "Alex Andriyashko", job: "3D artist", photo: Alex },
  ];

  const desktop1080Width = useMediaQuery("(min-width: 1200px)");

  const desktopFullGridWidth = useMediaQuery("(min-width: 1555px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");

  return (
    <Box>
      {desktop768Width && (
        <Box
          sx={{
            padding: desktop1080Width
              ? "173px 80px 180px 80px"
              : "66px 28px 110px 28px",
            background: `url(${Smoke})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box>
            <Typography
              fontFamily="Furore"
              fontSize={desktop1080Width ? "75px" : "60px"}
              color="#ffffff"
              lineHeight={desktop1080Width ? "75px" : "60px"}
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
              width="415px"
            >
              Team
            </Typography>
          </Box>
          {/* managment */}
          <Box
            sx={{
              display: desktopFullGridWidth ? "flex" : "",
              marginTop: "67px",
            }}
          >
            <Box
              sx={{
                // width: "910px",
                // height: "417px",
                width: desktopFullGridWidth ? "100%" : "calc(100% - 80px)",
                border: "1px solid",
                borderImageSlice: 1,
                borderWidth: "1px",
                borderStyle: "outset",
                borderColor: "buttonborder",
                borderImageSource:
                  "linear-gradient(204.53deg, rgba(0, 255, 183, 0) -2.02%, rgba(71, 255, 244, 0.722892) 25.27%, #FFFFFF 35.73%, rgba(0, 178, 255, 0.55) 50.28%, rgba(0, 255, 183, 0) 84.33%)",
                padding: desktop1080Width
                  ? "38px 40px 45px 40px"
                  : "34px 34px 37px 36px",
              }}
            >
              <Box sx={{ marginBottom: "30px" }}>
                <Typography
                  fontFamily="Inter"
                  fontSize="20px"
                  fontWeight="400"
                  color="#ffffff"
                  lineHeight="24.2px"
                  fontStyle="italic"
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
                  Managment
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(142px,1fr))",
                  gridGap: desktop1080Width ? "30px" : "24px",
                }}
              >
                {managment.map((person, index) => (
                  <Box
                    key={`screen-7-managment-person-${index}`}
                    // sx={{ marginLeft: index ? "30px" : "" }}
                  >
                    <Box
                      sx={{
                        width: "142px",
                        height: "165px",
                        position: "relative",
                      }}
                    >
                      <img
                        src={`${person.photo}`}
                        alt={person.name}
                        loading="lazy"
                        width="142px"
                        height="165px"
                      />
                      <Box sx={{ position: "absolute", right: 10, bottom: 10 }}>
                        <img
                          src={LinkedIn}
                          alt={`${person.name}-linked`}
                          loading="lazy"
                        />
                      </Box>
                    </Box>
                    <Typography
                      fontFamily="Inter"
                      fontSize="20px"
                      fontWeight="500"
                      color="#FFFFFF"
                      width={person.nameWidth || "142px"}
                      marginTop="25px"
                      lineHeight="22px"
                    >
                      {person.name}
                    </Typography>
                    <Typography
                      fontFamily="Inter"
                      fontSize="18px"
                      fontWeight="300"
                      color="#FFFFFF"
                      width="142px"
                      marginTop="25px"
                      lineHeight="21.8px"
                      height="32px"
                      style={{ opacity: 0.7 }}
                    >
                      {person.job}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            {/* RedRift */}
            <Box
              sx={{
                marginTop: desktopFullGridWidth ? "" : "30px",
                marginLeft: desktopFullGridWidth ? "32px" : "",
                border: "1px solid",
                borderImageSlice: 1,
                borderWidth: "1px",
                borderStyle: "outset",
                borderColor: "buttonborder",
                borderImageSource:
                  "linear-gradient(204.53deg, rgba(0, 255, 183, 0) -2.02%, rgba(71, 255, 244, 0.722892) 25.27%, #FFFFFF 35.73%, rgba(0, 178, 255, 0.55) 50.28%, rgba(0, 255, 183, 0) 84.33%)",
                padding: "38px 90px 45px 40px",
              }}
            >
              <Box sx={{ marginBottom: "30px" }}>
                <Typography
                  fontFamily="Inter"
                  fontSize="20px"
                  fontWeight="400"
                  color="#ffffff"
                  lineHeight="24.2px"
                  fontStyle="italic"
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
                  Game dev
                </Typography>
              </Box>
              <Box>
                <Box>
                  <img
                    src={`${RedRiftLogo}`}
                    alt={"Red Rift Logo"}
                    loading="lazy"
                    width={desktop1080Width ? "" : "531px"}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "25px",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize="20px"
                    fontWeight="500"
                    color="#FFFFFF"
                    lineHeight="22px"
                  >
                    Red Rift
                  </Typography>
                  <Box sx={{ marginLeft: "15px" }}>
                    <Link href="https://redrift.com/" target="_blank">
                      <img src={`${WebLink}`} alt={"Web link"} loading="lazy" />
                    </Link>
                  </Box>
                </Box>
                <Typography
                  fontFamily="Inter"
                  fontSize="18px"
                  fontWeight="300"
                  color="#FFFFFF"
                  width="175px"
                  marginTop="25px"
                  lineHeight="21.8px"
                  height="32px"
                  style={{ opacity: 0.7 }}
                >
                  Game Development partner
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* marketing */}
          <Box sx={{ display: "flex", marginTop: "30px" }}>
            <Box
              sx={{
                width: "1433px",
                // height: "427px",
                border: "1px solid",
                borderImageSlice: 1,
                borderWidth: "1px",
                borderStyle: "outset",
                borderColor: "buttonborder",
                borderImageSource:
                  "linear-gradient(204.53deg, rgba(0, 255, 183, 0) -2.02%, rgba(71, 255, 244, 0.722892) 25.27%, #FFFFFF 35.73%, rgba(0, 178, 255, 0.55) 50.28%, rgba(0, 255, 183, 0) 84.33%)",
                padding: desktop1080Width
                  ? "38px 40px 45px 40px"
                  : "34px 34px 37px 36px",
              }}
            >
              <Box sx={{ marginBottom: "30px" }}>
                <Typography
                  fontFamily="Inter"
                  fontSize="20px"
                  fontWeight="400"
                  color="#ffffff"
                  lineHeight="24.2px"
                  fontStyle="italic"
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
                  Marketing
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(142px,1fr))",
                  gridGap: desktop1080Width ? "30px" : "24px",
                }}
              >
                {marketing.map((person, index) => (
                  <Box
                    key={`screen-7-managment-person-${index}`}
                    // sx={{ marginLeft: index ? "30px" : "" }}
                  >
                    <Box sx={{ width: "142px", height: "165px" }}>
                      <img
                        src={`${person.photo}`}
                        alt={person.name}
                        loading="lazy"
                        width="142px"
                        height="165px"
                      />
                    </Box>
                    <Typography
                      fontFamily="Inter"
                      fontSize="20px"
                      fontWeight="500"
                      color="#FFFFFF"
                      width={person.nameWidth || "142px"}
                      marginTop="25px"
                      lineHeight="22px"
                    >
                      {person.name}
                    </Typography>
                    <Typography
                      fontFamily="Inter"
                      fontSize="18px"
                      fontWeight="300"
                      color="#FFFFFF"
                      width="142px"
                      marginTop="25px"
                      lineHeight="21.8px"
                      height="32px"
                      style={{ opacity: 0.7 }}
                    >
                      {person.job}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {!desktop768Width && (
        <Box
          sx={{
            padding: "76px 15px 80px 15px",
            background: `url(${SmokeMobile})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            backgroundPositionY: "-14px",
          }}
        >
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
              }}
              textTransform="uppercase"
            >
              Team
            </Typography>
          </Box>
          {/* managment */}
          <Box
            sx={{
              marginTop: "39px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                border: "1px solid",
                borderImageSlice: 1,
                borderWidth: "1px",
                borderStyle: "outset",
                borderColor: "buttonborder",
                borderImageSource:
                  "linear-gradient(204.53deg, rgba(0, 255, 183, 0) -2.02%, rgba(71, 255, 244, 0.722892) 25.27%, #FFFFFF 35.73%, rgba(0, 178, 255, 0.55) 50.28%, rgba(0, 255, 183, 0) 84.33%)",
              }}
            >
              <Box
                sx={{
                  marginBottom: "34px",
                  marginTop: "25px",
                  marginLeft: "25px",
                }}
              >
                <Typography
                  fontFamily="Inter"
                  fontSize="15px"
                  fontWeight="400"
                  color="#ffffff"
                  lineHeight="18.15px"
                  fontStyle="italic"
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
                  Managment
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(110px,1fr))",
                  gridGap: "20px",
                  padding: "0 24px 55px 24px",
                }}
              >
                {managment.map((person, index) => (
                  <Box key={`screen-7-managment-person-${index}`}>
                    <Box sx={{ width: "110px", height: "127px" }}>
                      <img
                        src={`${person.photo}`}
                        alt={person.name}
                        loading="lazy"
                        width="110px"
                        height="127px"
                      />
                    </Box>
                    <Typography
                      fontFamily="Inter"
                      fontSize="16px"
                      fontWeight="400"
                      color="#FFFFFF"
                      width="110px"
                      marginTop="25px"
                      lineHeight="19.2px"
                    >
                      {person.name}
                    </Typography>
                    <Typography
                      fontFamily="Inter"
                      fontSize="14px"
                      fontWeight="300"
                      color="#FFFFFF"
                      width="110px"
                      marginTop="15px"
                      lineHeight="16.94px"
                      style={{ opacity: 0.7 }}
                    >
                      {person.job}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            {/* RedRift */}
            <Box
              sx={{
                marginTop: "40px",
                border: "1px solid",
                borderImageSlice: 1,
                borderWidth: "1px",
                borderStyle: "outset",
                borderColor: "buttonborder",
                borderImageSource:
                  "linear-gradient(204.53deg, rgba(0, 255, 183, 0) -2.02%, rgba(71, 255, 244, 0.722892) 25.27%, #FFFFFF 35.73%, rgba(0, 178, 255, 0.55) 50.28%, rgba(0, 255, 183, 0) 84.33%)",
                padding: "25px 0px 25px 25px",
              }}
            >
              <Box sx={{ marginBottom: "30px" }}>
                <Typography
                  fontFamily="Inter"
                  fontSize="15px"
                  fontWeight="400"
                  color="#ffffff"
                  lineHeight="18.5px"
                  fontStyle="italic"
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
                  Game dev
                </Typography>
              </Box>
              <Box>
                <Box>
                  <img
                    src={`${RedRiftLogo}`}
                    alt={"Red Rift Logo"}
                    loading="lazy"
                    width={"241px"}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "25px",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize="20px"
                    fontWeight="500"
                    color="#FFFFFF"
                    lineHeight="22px"
                  >
                    Red Rift
                  </Typography>
                  <Box sx={{ marginLeft: "15px" }}>
                    <Link href="https://redrift.com/" target="_blank">
                      <img src={`${WebLink}`} alt={"Web link"} loading="lazy" />
                    </Link>
                  </Box>
                </Box>
                <Typography
                  fontFamily="Inter"
                  fontSize="18px"
                  fontWeight="300"
                  color="#FFFFFF"
                  width="175px"
                  marginTop="25px"
                  lineHeight="21.8px"
                  height="32px"
                  style={{ opacity: 0.7 }}
                >
                  Game Development partner
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* marketing */}
          <Box sx={{ display: "flex", marginTop: "30px" }}>
            <Box
              sx={{
                width: "100%",
                border: "1px solid",
                borderImageSlice: 1,
                borderWidth: "1px",
                borderStyle: "outset",
                borderColor: "buttonborder",
                borderImageSource:
                  "linear-gradient(204.53deg, rgba(0, 255, 183, 0) -2.02%, rgba(71, 255, 244, 0.722892) 25.27%, #FFFFFF 35.73%, rgba(0, 178, 255, 0.55) 50.28%, rgba(0, 255, 183, 0) 84.33%)",
              }}
            >
              <Box
                sx={{
                  marginBottom: "32px",
                  marginTop: "25px",
                  marginLeft: "25px",
                }}
              >
                <Typography
                  fontFamily="Inter"
                  fontSize="15px"
                  fontWeight="400"
                  color="#ffffff"
                  lineHeight="18.15px"
                  fontStyle="italic"
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
                  Marketing
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(110px,1fr))",
                  gridGap: "20px",
                  padding: "0 24px 55px 24px",
                }}
              >
                {marketing.map((person, index) => (
                  <Box
                    key={`screen-7-managment-person-${index}`}
                    // sx={{ marginLeft: index ? "30px" : "" }}
                  >
                    <Box sx={{ width: "110px", height: "127px" }}>
                      <img
                        src={`${person.photo}`}
                        alt={person.name}
                        width="110px"
                        loading="lazy"
                      />
                    </Box>
                    <Typography
                      fontFamily="Inter"
                      fontSize="16px"
                      fontWeight="400"
                      color="#FFFFFF"
                      width="110px"
                      marginTop="25px"
                      lineHeight="19.2px"
                    >
                      {person.name}
                    </Typography>
                    <Typography
                      fontFamily="Inter"
                      fontSize="14px"
                      fontWeight="300"
                      color="#FFFFFF"
                      width="110px"
                      marginTop="15px"
                      lineHeight="16.94px"
                      style={{ opacity: 0.7 }}
                    >
                      {person.job}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "100px",
              background:
                "linear-gradient(180deg, rgba(9, 16, 21, 0) 1.16%, #091015 84.64%)",
              position: "absolute",
              bottom: 0,
              left: 0,
              zIndex: 0,
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Seven;
