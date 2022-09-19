import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  FirstImg,
  SecondImg,
  ThirdImg,
  FourthImg,
  FiveImg,
  SixImg,
  HeaderTexture,
} from "../../imgs/screen3";
import { Line } from "../first/components/header/components/Icons";
import { DsLogo } from "../first/components/header/components/Icons";
import GreenBtn from "../../imgs/green_btn_small.png";

const Third = () => {
  const [curentItem, setCurentItem] = useState(0);
  const header = [
    {
      title: "Mr. Joe",
      background: FirstImg,
      overlayMargin: "0",
      descriptionOne: "The soul is always looking for a home...",
      descriptionTwo:
        "This is carved on the coat of arms of the house of Hodler, whose metaverse was covered with ice after it was destroyed by hackers decades ago.  ",
    },
    {
      title: "Anwar",
      background: SecondImg,
      overlayMargin: "120px",
      descriptionOne:
        "From the metaverse Greece 21, reconstructed on the fragments of ancient Greece with the help of web 3.0 technologies, the warrior Anwar arrived.",
      descriptionTwo: "",
    },
    {
      title: "Tama Shi",
      background: ThirdImg,
      overlayMargin: "130px",
      descriptionOne:
        "Duncan has been a member of a cybercriminal gang from the Cyberizzz metaverse for many years. Due to the overabundance of various advanced technologies inside the city, it can «lag» a little — the locations are distorted and merge into each other. ",
      descriptionTwo: "",
    },
    {
      title: "Milcy",
      background: FourthImg,
      overlayMargin: "100px",
      descriptionOne:
        "MLc s9 is one of the 10 newest bots that were created as part of the experimental development of metaverse A2. which is engaged in the creation of spam bots. These bots were supposed to be the crown of creation, which would allow them to bypass all current firewalls.",
      descriptionTwo: "",
    },
    {
      title: "Deo",
      background: FiveImg,
      overlayMargin: "120px",
      descriptionOne:
        "The Monk Deo arrived from the metaverse Temple of Fate...On his planet, the monks were able to curb web 3.0 technologies and now draw strength from there. ",
      descriptionTwo:
        "Not much is known about the Deo past. Even his Sensei cannot give an answer to this question. ",
    },
    {
      title: "Human",
      background: SixImg,
      overlayMargin: "145px",
      descriptionOne:
        "Earth X300 has reached its peak of development and formed its own system. People live in prosperity, and technologies work for the benefit of humanity and deliver only comfort.",
      descriptionTwo:
        "Sam is a member of the special guard, which was engaged in ensuring the security of the DAO. ",
    },
  ];

  return (
    <Box
      sx={{
        height: "940px",
        paddingTop: "60px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          background: `url(${header[curentItem].background})`,
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
          height: "1000px",
          width: "50%",
          background:
            "linear-gradient(264.4deg, #000000 15.42%, rgba(0, 0, 0, 0) 89.56%)",
          top: 0,
          right: header[curentItem].overlayMargin,
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
              <Box id="btn_line" sx={{ position: "absolute", right: "-50px" }}>
                <Line />
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Box sx={{ marginTop: "120px", marginRight: "240px" }}>
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
  );
};

export default Third;
