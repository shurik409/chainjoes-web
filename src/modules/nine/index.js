import React from "react";
import { Box, Link, Typography } from "@mui/material";
import {
  Fb,
  Discord,
  Medium,
  Inst,
  Tg,
  Twitter,
  Logo,
  Scratches,
  Smoke,
} from "../../imgs/screen9";

const Nine = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#070809",
        padding: "9px 0 0 170px ",
        display: "flex",
        backgroundImage: `url(${Smoke})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box>
        <img src={`${Logo}`} alt="Logo" loading="lazy" />
      </Box>
      <Box sx={{ marginTop: "171px", marginLeft: "237px" }}>
        <Box sx={{ position: "relative" }}>
          <Typography
            fontFamily="Furore"
            fontSize="50px"
            color="#FFFFFF"
            width="550px"
            lineHeight="50px"
          >
            <Box sx={{ color: "#44F4C3", display: "inline" }}>
              Stay updated{" "}
            </Box>{" "}
            with our latest news, events, and announcements.
          </Typography>
          <Box sx={{ position: "absolute", top: 0, left: 0 }}>
            <img src={`${Scratches}`} alt="scratches" loading="lazy" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "86px",
          }}
        >
          <Box>
            <Box sx={{ height: "30px", display: "flex", alignItems: "center" }}>
              <Link
                href="https://twitter.com/chainjoes"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    color: "#FFFFFF",
                    ":hover": { color: "#44F4C3" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={`${Twitter}`} alt="Twitter" loading="lazy" />
                  <Typography
                    fontFamily="Inter"
                    fontSize="18"
                    fontWeight="300"
                    color="inherit"
                    marginLeft="17px"
                  >
                    Twitter
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Box
              sx={{
                marginTop: "20px",
                height: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link
                href="https://t.me/chainjoes"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    color: "#FFFFFF",
                    ":hover": { color: "#44F4C3" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={`${Tg}`} alt="Inst" loading="lazy" />
                  <Typography
                    fontFamily="Inter"
                    fontSize="18"
                    fontWeight="300"
                    color="inherit"
                    marginLeft="15px"
                  >
                    Telegram
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
          <Box>
            <Box sx={{ height: "30px", display: "flex", alignItems: "center" }}>
              <Link
                href="https://www.instagram.com/chainjoes"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    color: "#FFFFFF",
                    ":hover": { color: "#44F4C3" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={`${Inst}`} alt="Inst" loading="lazy" />
                  <Typography
                    fontFamily="Inter"
                    fontSize="18"
                    fontWeight="300"
                    color="inherit"
                    marginLeft="15px"
                  >
                    Instagram
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Box
              sx={{
                marginTop: "20px",
                height: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link
                href="https://discord.com/"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    color: "#FFFFFF",
                    ":hover": { color: "#44F4C3" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={`${Discord}`} alt="Logo" loading="lazy" />
                  <Typography
                    fontFamily="Inter"
                    fontSize="18"
                    fontWeight="300"
                    color="inherit"
                    marginLeft="17px"
                  >
                    Discord
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
          <Box>
            <Box sx={{ height: "30px", display: "flex", alignItems: "center" }}>
              <Link href="https://medium.com/" target="_blank" underline="none">
                <Box
                  sx={{
                    color: "#FFFFFF",
                    ":hover": { color: "#44F4C3" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={`${Medium}`} alt="Logo" loading="lazy" />
                  <Typography
                    fontFamily="Inter"
                    fontSize="18"
                    fontWeight="300"
                    color="inherit"
                    marginLeft="17px"
                  >
                    Medium
                  </Typography>
                </Box>
              </Link>
            </Box>
            <Box
              sx={{
                marginTop: "20px",
                height: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link
                href="https://www.facebook.com/ChainJoes"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    color: "#FFFFFF",
                    ":hover": { color: "#44F4C3" },
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={`${Fb}`} alt="Logo" loading="lazy" />
                  <Typography
                    fontFamily="Inter"
                    fontSize="18"
                    fontWeight="300"
                    color="inherit"
                    marginLeft="17px"
                  >
                    Facebook
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nine;
