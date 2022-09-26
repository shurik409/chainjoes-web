import React, { useState } from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { Texture, Solana, Damnn } from "../../imgs/webp/screen10";
import { DocsLogo } from "../first/components/header/components/Icons";

const Ten = () => {
  const [docsHover, setdocsHover] = useState(false);

  const desktop1080Width = useMediaQuery("(min-width: 1000px");

  const desktop768Width = useMediaQuery("(min-width: 768px");

  return (
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            padding: "33px min(80px, 4vw) 38px min(80px, 4vw)",
            background: `url(${Texture})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
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
            <Box sx={{ marginLeft: "22px" }}>
              <Typography
                fontFamily="Inter"
                fontSize="13px"
                fontWeight="300"
                color="#BDBDBD"
                marginBottom="7px"
              >
                Production by
              </Typography>
              <img src={`${Damnn}`} alt={"Damnn logo"} loading="lazy" />
            </Box>
          </Box>
          <Box>
            <Link
              href="mailto:info@chainjoes.com"
              target="_blank"
              underline="none"
            >
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
          {/* <Box>
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
          </Box> */}
        </Box>
      )}
      {!desktop1080Width && desktop768Width && (
        <Box
          sx={{
            padding: "57px 25px 58px 25px",
            background: `url(${Texture})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "end" }}>
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
              <Box sx={{ marginLeft: "22px" }}>
                <Typography
                  fontFamily="Inter"
                  fontSize="13px"
                  fontWeight="300"
                  color="#BDBDBD"
                  marginBottom="7px"
                >
                  Production by
                </Typography>
                <img src={`${Damnn}`} alt={"Damnn logo"} loading="lazy" />
              </Box>
            </Box>
            {/* <Box>
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
                      height: "41px",
                      width: "102px",
                      transform: "skewX(-11deg)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#ffffff",
                      border: `1px solid #44F4C3`,
                    }}
                  >
                    <Box
                      sx={{
                        transform: "skewX(11deg)",
                        display: "flex",
                      }}
                    >
                      <Box>
                        <DocsLogo
                          color="#44F4C3"
                          style={{ width: "11px", display: "block" }}
                        />
                      </Box>
                      <Typography
                        fontSize="14px"
                        fontFamily="Inter"
                        fontStyle="italic"
                        textTransform="uppercase"
                        style={{
                          marginLeft: "12px",
                        }}
                        color="#44F4C3"
                      >
                        Docs
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Box> */}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "27px",
            }}
          >
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
                    fontSize="14px"
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
                    fontSize="14px"
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
                    fontSize="14px"
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
                href="mailto:info@chainjoes.com"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    color: "#44F4C3",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize="22px"
                    fontWeight="400"
                    color="inherit"
                  >
                    info@chainjoes.com
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      )}
      {!desktop1080Width && !desktop768Width && (
        <Box
          sx={{
            padding: "35px 15px 35px 15px",
            background: `url(${Texture})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box>
              <Link
                href="mailto:info@chainjoes.com"
                target="_blank"
                underline="none"
              >
                <Box
                  sx={{
                    color: "#44F4C3",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize="16px"
                    fontWeight="400"
                    color="inherit"
                  >
                    info@chainjoes.com
                  </Typography>
                </Box>
              </Link>
            </Box>
            {/* <Box>
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
                      height: "41px",
                      width: "102px",
                      transform: "skewX(-11deg)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#ffffff",
                      border: `1px solid #44F4C3`,
                    }}
                  >
                    <Box
                      sx={{
                        transform: "skewX(11deg)",
                        display: "flex",
                      }}
                    >
                      <Box>
                        <DocsLogo
                          color="#44F4C3"
                          style={{ width: "11px", display: "block" }}
                        />
                      </Box>
                      <Typography
                        fontSize="14px"
                        fontFamily="Inter"
                        fontStyle="italic"
                        textTransform="uppercase"
                        style={{
                          marginLeft: "12px",
                        }}
                        color="#44F4C3"
                      >
                        Docs
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Box> */}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "32px",
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
            <Box sx={{ marginLeft: "22px" }}>
              <Typography
                fontFamily="Inter"
                fontSize="13px"
                fontWeight="300"
                color="#BDBDBD"
                marginBottom="7px"
              >
                Production by
              </Typography>
              <img src={`${Damnn}`} alt={"Damnn logo"} loading="lazy" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "35px",
            }}
          >
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
                  fontSize="12px"
                  fontWeight="300"
                  color="inherit"
                >
                  Terms of Service
                </Typography>
              </Box>
            </Link>
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
                  fontSize="12px"
                  fontWeight="300"
                  color="inherit"
                >
                  Contract Audit
                </Typography>
              </Box>
            </Link>
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
                  fontSize="12px"
                  fontWeight="300"
                  color="inherit"
                >
                  Privacy Policy
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Ten;
