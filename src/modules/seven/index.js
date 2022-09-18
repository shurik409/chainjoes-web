import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Photo1,
  Photo2,
  Photo3,
  RedRiftLogo,
  WebLink,
  Smoke,
} from "../../imgs/screen7";

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
      photo: Photo1,
      nameWidth: "107px",
    },
    {
      name: "Christiaan van Steenbergen",
      job: "Blockchain CTO,  Co-founder",
      photo: Photo2,
    },
    { name: "Gary Yankovich", job: "Chief Product Officer ", photo: Photo3 },
    { name: "Dasha Maltseva", job: "Chief Operating Officer ", photo: Photo1 },
    { name: "Katsia Dziatlova", job: "Head of management", photo: Photo2 },
  ];
  const marketing = [
    { name: "Egor Aniferyk", job: "Producer", photo: Photo3 },
    { name: "Maya Kostenkova", job: "Creative producer", photo: Photo1 },
    { name: "Hanna Valasheniuk", job: "Creative", photo: Photo2 },
    { name: "Nastia Naumenko", job: "Head of graphic design", photo: Photo3 },
    { name: "Veronika Yasulevich", job: "Graphic Designer", photo: Photo1 },
    { name: "Pavel Ivuts", job: "Head of 3D arts", photo: Photo2 },
    { name: "Alex Andriyashko", job: "3D artist", photo: Photo3 },
    { name: "Jpa Driga", job: "SMM manager", photo: Photo1 },
  ];
  return (
    <Box
      sx={{
        padding: "173px 0px 180px 80px",
        background: `url(${Smoke})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
          width="415px"
        >
          Team
        </Typography>
      </Box>
      {/* managment */}
      <Box sx={{ display: "flex", marginTop: "67px" }}>
        <Box
          sx={{
            // width: "910px",
            // height: "417px",
            border: "1px solid",
            borderImageSlice: 1,
            borderWidth: "1px",
            borderStyle: "outset",
            borderColor: "buttonborder",
            borderImageSource:
              "linear-gradient(204.53deg, rgba(0, 255, 183, 0) -2.02%, rgba(71, 255, 244, 0.722892) 25.27%, #FFFFFF 35.73%, rgba(0, 178, 255, 0.55) 50.28%, rgba(0, 255, 183, 0) 84.33%)",
            padding: "38px 40px 45px 40px",
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
          <Box sx={{ display: "flex" }}>
            {managment.map((person, index) => (
              <Box
                key={`screen-7-managment-person-${index}`}
                sx={{ marginLeft: index ? "30px" : "" }}
              >
                <Box sx={{ width: "142px", height: "165px" }}>
                  <img
                    src={`${person.photo}`}
                    alt={person.name}
                    loading="lazy"
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
        {/* RedRift */}
        <Box
          sx={{
            marginLeft: "32px",
            border: "1px solid",
            borderImageSlice: 1,
            borderWidth: "1px",
            borderStyle: "outset",
            borderColor: "buttonborder",
            borderImageSource:
              "linear-gradient(204.53deg, rgba(0, 255, 183, 0) -2.02%, rgba(71, 255, 244, 0.722892) 25.27%, #FFFFFF 35.73%, rgba(0, 178, 255, 0.55) 50.28%, rgba(0, 255, 183, 0) 84.33%)",
            padding: "38px 116px 45px 40px",
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
              />
            </Box>
            <Box
              sx={{ display: "flex", marginTop: "25px", alignItems: "center" }}
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
                <img src={`${WebLink}`} alt={"Web link"} loading="lazy" />
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
            // width: "1433px",
            // height: "427px",
            border: "1px solid",
            borderImageSlice: 1,
            borderWidth: "1px",
            borderStyle: "outset",
            borderColor: "buttonborder",
            borderImageSource:
              "linear-gradient(204.53deg, rgba(0, 255, 183, 0) -2.02%, rgba(71, 255, 244, 0.722892) 25.27%, #FFFFFF 35.73%, rgba(0, 178, 255, 0.55) 50.28%, rgba(0, 255, 183, 0) 84.33%)",
            padding: "38px 40px 45px 40px",
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
          <Box sx={{ display: "flex" }}>
            {marketing.map((person, index) => (
              <Box
                key={`screen-7-managment-person-${index}`}
                sx={{ marginLeft: index ? "30px" : "" }}
              >
                <Box sx={{ width: "142px", height: "165px" }}>
                  <img
                    src={`${person.photo}`}
                    alt={person.name}
                    loading="lazy"
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
  );
};

export default Seven;
