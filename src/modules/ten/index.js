import React, { useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import { Texture, Solana } from "../../imgs/screen10";
import { DocsLogo } from "../first/components/header/components/Icons";

const Ten = () => {
  const [docsHover, setdocsHover] = useState(false);

  return (
    <Box
      sx={{
        padding: "33px 80px 38px 80px",
        background: `url(${Texture})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="300"
          color="#BDBDBD"
          marginBottom="7px"
        >
          Powered by
        </Typography>
        <img src={`${Solana}`} alt={"Solana logo"} loading="lazy" />
      </Box>
      <Box>
        <Link href="mailto:info@chainjoes.com" target="_blank" underline="none">
          <Box
            sx={{
              color: "#FFFFFF",
              ":hover": {
                color: "#44F4C3",
              },
            }}
          >
            <Typography
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="400"
              color="inherit"
            >
              info@chainjoes.com
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Link href="" target="_blank" underline="none">
          <Box
            sx={{
              color: "#FFFFFF",
              ":hover": {
                color: "#44F4C3",
              },
            }}
          >
            <Typography
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="300"
              color="inherit"
            >
              Terms of Service
            </Typography>
          </Box>
        </Link>
        <Link href="" target="_blank" underline="none" marginLeft="30px">
          <Box
            sx={{
              color: "#FFFFFF",
              ":hover": {
                color: "#44F4C3",
              },
            }}
          >
            <Typography
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="300"
              color="inherit"
            >
              Contract Audit
            </Typography>
          </Box>
        </Link>
        <Link href="" target="_blank" underline="none" marginLeft="30px">
          <Box
            sx={{
              color: "#FFFFFF",
              ":hover": {
                color: "#44F4C3",
              },
            }}
          >
            <Typography
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="300"
              color="inherit"
            >
              Privacy Policy
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box>
        <Link
          href=""
          target="_blank"
          underline="none"
          onMouseOver={(e) => {
            setdocsHover(true);
          }}
          onMouseLeave={() => setdocsHover(false)}
          style={{
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
            }}
          >
            <Box
              sx={{
                height: "58px",
                width: "137px",
                transform: "skewX(-11deg)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffffff",
                border: `1px solid ${docsHover ? "#44F4C3" : "#ACACAC"}`,
              }}
            >
              <Box
                sx={{
                  transform: "skewX(11deg)",
                  display: "flex",
                }}
              >
                <DocsLogo color={docsHover ? "#44F4C3" : "#FFFFFF"} />
                <Typography
                  fontSize="16px"
                  fontFamily="Inter"
                  fontStyle="italic"
                  textTransform="uppercase"
                  style={{
                    marginLeft: "12px",
                  }}
                  color={docsHover ? "#44F4C3" : "#FFFFFF"}
                >
                  Docs
                </Typography>
              </Box>
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Ten;
