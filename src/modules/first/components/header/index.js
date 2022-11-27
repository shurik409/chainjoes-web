import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../../../imgs/webp/logo.png";
import ArrowRight from "../../../../imgs/new/arrow-right.svg";
import ArrowDown from "../../../../imgs/new/arrow-down.svg";
import Menu from "../../../../imgs/new/menu.svg";

const Header = ({ closeMenu, buttons }) => {
  return (
    <Box
      sx={{
        width: "100%",
        zIndex: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          paddingTop: "33px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: 45,
            width: 109,
            backgroundImage: `url(${Logo})`,
            backgroundSize: "cover",
          }}
        />
        <Box sx={{ color: "#fff", display: { xs: "none", xl: "block" } }}>
          <Box
            style={{
              display: "flex",
              listStyleType: "none",
              gap: "20px",
              fontSize: "14px",
            }}
          >
            {buttons.map((item, index) => (
              <Box
                key={`main-header-button-${index}`}
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  ":hover": {
                    "& > .open-menu": {
                      display: "block",
                    },
                  },
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ marginRight: item.links ? "6px" : "" }}>
                    {item.title}
                  </Typography>
                  {item.links && <img src={ArrowDown} alt="arrow-down" />}
                </Box>
                {item.links && (
                  <Box
                    className={`open-menu`}
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: "20px",
                      left: "-20px",
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      padding: "20px",
                    }}
                  >
                    {item.links.map((button, index) => (
                      <Box
                        key={`main-header-subbutton-${index}`}
                        sx={{
                          marginY: "14px",
                          minWidth: "90px",
                          borderBottom:
                            index !== item.links.length - 1
                              ? "1px solid rgba(255, 255, 255, 0.1)"
                              : "",
                        }}
                      >
                        {button.title}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                width: "150px",
                height: "44px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "2px",
                border: "1px solid #616161",
                // borderImageSlice: 1,
                // borderImageSource:
                //   "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%)",
                marginRight: "16px",
                cursor: "pointer",
              }}
            >
              <Typography
                color="#7F7F7F"
                fontSize="14px"
                fontFamily="Inter"
                fontWeight={500}
              >
                Sale
                <sup>comming soon</sup>
              </Typography>
            </Box>
            <Box
              sx={{
                width: "150px",
                height: "44px",
                display: "flex",
                borderRadius: "2px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                background:
                  "linear-gradient(204.42deg, #00FFB7 -11.28%, #005B42 105.96%),linear-gradient(0deg, #FFFFFF, #FFFFFF)",
              }}
            >
              <Typography color="#FFFFFF" fontSize="14px" marginRight="4px">
                Whitelist
              </Typography>
              <img src={ArrowRight} alt="arrow-right" />
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", xl: "none" },
              border: { xs: "", md: "1px solid #616161" },
              borderRadius: "2px",
              width: "44px",
              height: "44px",
              justifyContent: "center",
              alignContent: "center",
              marginLeft: "32px",
            }}
            onClick={closeMenu}
          >
            <img src={Menu} alt="menu" width="24px" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
