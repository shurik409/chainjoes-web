import React from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import {
  Linked,
  Discord,
  Medium,
  TikTok,
  Tg,
  Twitter,
  Logo,
  Scratches,
  ScratchesMobile,
} from "../../imgs/webp/screen9";
import Smoke from "../../imgs/smoke2x.png";

const Nine = () => {
  const desktopFlexWidth = useMediaQuery("(min-width: 1200px)");
  const desktop1080Width = useMediaQuery("(min-width: 1000px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");
  return (
    <Box>
      {desktop1080Width && (
        <Box
          sx={{
            padding: desktopFlexWidth
              ? "9px 25px 140px 25px"
              : "9px 25px 40px 25px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: desktopFlexWidth ? "unset" : "center",
            flexDirection: desktopFlexWidth ? "row" : "column",
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1, maxWidth: "637px" }}>
            <img
              src={`${Logo}`}
              alt="Logo"
              loading="lazy"
              style={{
                width: "40vw",
                maxWidth: "637px",
                minWidth: "420px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                background: "#1BD4ED",
                filter: "blur(135.5px)",
                height: "233px",
                width: "233px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -40%)",
                zIndex: -1,
              }}
            />
          </Box>
          <Box
            sx={{
              marginTop: desktopFlexWidth ? "171px" : "",
              // width: desktopFlexWidth ? "unset" : "562px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Typography
                fontFamily="Furore"
                fontSize="50px"
                color="#252625"
                maxWidth="678px"
                lineHeight="50px"
                style={{
                  WebkitMaskImage: `url(${Scratches})`,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <span style={{ color: "#252625", display: "inline" }}>
                  join our community{" "}
                </span>
                to recieve our latest news, events and announcements first
              </Typography>
              <Typography
                fontFamily="Furore"
                fontSize="50px"
                color="#FFFFFF"
                maxWidth="678px"
                lineHeight="50px"
              >
                <span style={{ color: "#44F4C3", display: "inline" }}>
                  join our community{" "}
                </span>
                to recieve our latest news, events and announcements first
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "86px",
              }}
            >
              <Box>
                <Box
                  sx={{ height: "30px", display: "flex", alignItems: "center" }}
                >
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
                      <img src={`${Tg}`} alt="Telegram" loading="lazy" />
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
                <Box
                  sx={{ height: "30px", display: "flex", alignItems: "center" }}
                >
                  <Link
                    href="https://www.tiktok.com/@chainjoes"
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
                      <img src={`${TikTok}`} alt="TikTok" loading="lazy" />
                      <Typography
                        fontFamily="Inter"
                        fontSize="18"
                        fontWeight="300"
                        color="inherit"
                        marginLeft="15px"
                      >
                        Tik Tok
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
                    href="https://discord.com/invite/6XcvPDbXBa"
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
                <Box
                  sx={{ height: "30px", display: "flex", alignItems: "center" }}
                >
                  <Link
                    href="https://medium.com/@ChainJoes"
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
                    href="https://www.linkedin.com/company/chainjoes"
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
                      <img src={`${Linked}`} alt="Linked" loading="lazy" />
                      <Typography
                        fontFamily="Inter"
                        fontSize="18"
                        fontWeight="300"
                        color="inherit"
                        marginLeft="17px"
                      >
                        LinkedIn
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {!desktop1080Width && desktop768Width && (
        <Box
          sx={{
            padding: "57px 28px 105px 28px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(178.64deg, rgba(9, 16, 21, 0) 1.16%, #091015 84.64%)",
              position: "absolute",
              transform: "matrix(1, 0, 0, -1, 0, 0)",
              top: "-2px",
              left: 0,
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Typography
                fontFamily="Furore"
                fontSize="33px"
                color="#252625"
                maxWidth="448px"
                lineHeight="33px"
                style={{
                  WebkitMaskImage: `url(${Scratches})`,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <span style={{ color: "#252625", display: "inline" }}>
                  join our community{" "}
                </span>
                to recieve our latest news, events and announcements first
              </Typography>
              <Typography
                fontFamily="Furore"
                fontSize="33px"
                color="#FFFFFF"
                maxWidth="448px"
                lineHeight="33px"
              >
                <span style={{ color: "#44F4C3", display: "inline" }}>
                  join our community{" "}
                </span>
                to recieve our latest news, events and announcements first
              </Typography>
            </Box>
            <Box sx={{ position: "relative", zIndex: 1 }}>
              <img
                src={`${Logo}`}
                alt="Logo"
                loading="lazy"
                style={{
                  width: "240px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  background: "#1BD4ED",
                  filter: "blur(135.5px)",
                  height: "120px",
                  width: "120px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -40%)",
                  zIndex: -1,
                }}
              />
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "26px",
                maxWidth: "500px",
              }}
            >
              <Box sx={{ zIndex: 2 }}>
                <Box
                  sx={{ height: "30px", display: "flex", alignItems: "center" }}
                >
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
                      <img src={`${Tg}`} alt="Telegram" loading="lazy" />
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
              <Box sx={{ zIndex: 2 }}>
                <Box
                  sx={{ height: "30px", display: "flex", alignItems: "center" }}
                >
                  <Link
                    href="https://www.tiktok.com/@chainjoes"
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
                      <img src={`${TikTok}`} alt="TikTok" loading="lazy" />
                      <Typography
                        fontFamily="Inter"
                        fontSize="18"
                        fontWeight="300"
                        color="inherit"
                        marginLeft="15px"
                      >
                        Tik Tok
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
                    href="https://discord.com/invite/6XcvPDbXBa"
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
              <Box sx={{ zIndex: 2 }}>
                <Box
                  sx={{ height: "30px", display: "flex", alignItems: "center" }}
                >
                  <Link
                    href="https://medium.com/@ChainJoes"
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
                    href="https://www.linkedin.com/company/chainjoes"
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
                      <img src={`${Linked}`} alt="LinkedIn" loading="lazy" />
                      <Typography
                        fontFamily="Inter"
                        fontSize="18"
                        fontWeight="300"
                        color="inherit"
                        marginLeft="17px"
                      >
                        LinkedIn
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {!desktop1080Width && !desktop768Width && (
        <Box
          sx={{
            padding: "0 15px 75px 15px",
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

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              margin: "auto",
              width: "230px",
            }}
          >
            <img
              src={`${Logo}`}
              alt="Logo"
              loading="lazy"
              style={{
                width: "230px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                background: "#1BD4ED",
                filter: "blur(135.5px)",
                height: "120px",
                width: "120px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -40%)",
                zIndex: -1,
              }}
            />
          </Box>
          <Box>
            <Box sx={{ position: "relative", width: "290px", marginX: "auto" }}>
              <Typography
                fontFamily="Furore"
                fontSize="22px"
                color="#252625"
                maxWidth="290px"
                lineHeight="22px"
                textAlign="center"
                style={{
                  WebkitMaskImage: `url(${Scratches})`,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <span style={{ color: "#252625", display: "inline" }}>
                  join our community <br />
                </span>
                to recieve our latest news, events and announcements first
              </Typography>
              <Typography
                fontFamily="Furore"
                fontSize="22px"
                color="#FFFFFF"
                maxWidth="290px"
                lineHeight="22px"
                textAlign="center"
              >
                <span style={{ color: "#44F4C3", display: "inline" }}>
                  join our community <br />
                </span>
                to recieve our latest news, events and announcements first
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "54px",
                maxWidth: "500px",
                marginX: "auto",
              }}
            >
              <Box sx={{ zIndex: 2 }}>
                <Box
                  sx={{ height: "30px", display: "flex", alignItems: "center" }}
                >
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
                      <img src={`${Tg}`} alt="Telegram" loading="lazy" />
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
                <Box
                  sx={{
                    marginTop: "20px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href="https://www.tiktok.com/@chainjoes"
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
                      <img src={`${TikTok}`} alt="TikTok" loading="lazy" />
                      <Typography
                        fontFamily="Inter"
                        fontSize="18"
                        fontWeight="300"
                        color="inherit"
                        marginLeft="15px"
                      >
                        Tik Tok
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
              <Box sx={{ zIndex: 2 }}>
                <Box
                  sx={{
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href="https://discord.com/invite/6XcvPDbXBa"
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
                <Box
                  sx={{
                    marginTop: "20px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href="https://medium.com/@ChainJoes"
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
                    href="https://www.linkedin.com/company/chainjoes"
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
                      <img src={`${Linked}`} alt="Linked" loading="lazy" />
                      <Typography
                        fontFamily="Inter"
                        fontSize="18"
                        fontWeight="300"
                        color="inherit"
                        marginLeft="17px"
                      >
                        LinkedIn
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Nine;
