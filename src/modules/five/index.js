import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Screen from "../../imgs/screen5.png";

const Five = () => {
  const [curentItem, setCurentItem] = useState(0);

  const texts = [
    {
      title: `Scammers`,
      description: `Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. Aliquam sit amet luctus elit.`,
    },
    {
      title: `Hackers`,
      description: `Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. Aliquam sit amet luctus elit.`,
    },
    {
      title: `Spammers`,
      description: `Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. Aliquam sit amet luctus elit.`,
    },
  ];

  return (
    <Box sx={{ position: "relative", height: "100vh", minHeight: "1080px" }}>
      <Box
        sx={{
          height: "100vh",
          minHeight: "1080px",
          background: `url(${Screen})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          width: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: -2,
        }}
      />
      <Box
        sx={{
          height: "100vh",
          minHeight: "1080px",
          background:
            "linear-gradient(97.55deg, #000000 10.59%, rgba(9, 16, 21, 0) 83.66%)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          zIndex: -1,
        }}
      />
      <Box sx={{ paddingLeft: "80px" }}>
        <Box sx={{ paddingTop: "170px" }}>
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
                    fontSize="20px"
                    color={index === curentItem ? "#44F4C3" : "#FFFFFF"}
                  >
                    {item.title}
                  </Typography>
                </Box>
                {index === curentItem && (
                  <Box>
                    <Box sx={{ width: "600px", marginTop: "25px" }}>
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
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Five;
