import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import Header from "../modules/first/components/header";
import CloseBtn from "../imgs/new/close-btn.svg";
import ArrowDown from "../imgs/new/arrow-down.svg";
import { HashLink } from "react-router-hash-link";
import { Footer } from "../modules";

const FAQ = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuDropdown, setActiveMenuDropdown] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);

  const handleMobileMenu = (e) => {
    e?.preventDefault();
    const html = document.documentElement;
    setIsMenuOpen(!isMenuOpen);
    document.getElementById("root").classList.toggle("mobileMenu");
    html.style.overflow === "hidden"
      ? (html.style.overflow = "auto")
      : (html.style.overflow = "hidden");
  };

  const buttons = [
    {
      title: "Gameplay",
      links: [
        {
          title: "Backstory",
          link: "#backstory",
          type: "scroll",
        },
        {
          title: "ChainVerse",
          link: "#chainverse",
          type: "scroll",
        },
        {
          title: "Characters",
          link: "#characters",
          type: "scroll",
        },
        {
          title: "Activities",
          link: "#activities",
          type: "scroll",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          title: "Discord",
          link: "https://discord.com/invite/chainjoes ",
        },
        {
          title: "Twitter",
          link: "https://twitter.com/ChainJoes",
        },
        {
          title: "Telegram",
          link: "https://t.me/chainjoes",
        },
      ],
    },
    {
      title: "Team",
      link: "#team",
      type: "scroll",
    },
    {
      title: "Partners",
      link: "#partners",
      type: "scroll",
    },
    {
      title: "Roadmap",
      link: "#roadmap",
      type: "scroll",
    },
    {
      title: "Help",
      links: [
        {
          title: "GitBook",
          link: "https://chainjoes.gitbook.io/chainjoes/",
        },
        {
          title: "Tokenomics",
          link: "#",
        },
        {
          title: "Whitepaper",
          link: "#",
        },
        {
          title: "One Page",
          link: "#",
        },
        {
          title: "IDO strategy",
          link: "#",
        },
        {
          title: "FAQ ",
          link: "/faq",
        },
      ],
    },
    {
      title: "News",
      link: "https://medium.com/@ChainJoes",
    },
  ];

  const faq = [
    {
      title: "Dropdown",
      description: `Thanks for shopping at Chain Joes. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you’re exploring, evaluating, and purchasing our products. As with any shopping experience, there are terms and conditions that apply to transactions at Chain Joes. We’ll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at Chain Joes, you agree to the terms along with Chain Joes."’s" Privacy Policy. If, for any reason, You are not completely satisfied with any good or service that we provide, don't hesitate to contact us and we will discuss any of the issues you are going through with our product.`,
    },
    {
      title: "Dropdown",
      description: `Thanks for shopping at Chain Joes. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you’re exploring, evaluating, and purchasing our products. As with any shopping experience, there are terms and conditions that apply to transactions at Chain Joes. We’ll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at Chain Joes, you agree to the terms along with Chain Joes."’s" Privacy Policy. If, for any reason, You are not completely satisfied with any good or service that we provide, don't hesitate to contact us and we will discuss any of the issues you are going through with our product.`,
    },
    {
      title: "Dropdown",
      description: `Thanks for shopping at Chain Joes. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you’re exploring, evaluating, and purchasing our products. As with any shopping experience, there are terms and conditions that apply to transactions at Chain Joes. We’ll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at Chain Joes, you agree to the terms along with Chain Joes."’s" Privacy Policy. If, for any reason, You are not completely satisfied with any good or service that we provide, don't hesitate to contact us and we will discuss any of the issues you are going through with our product.`,
    },
    {
      title: "Dropdown",
      description: `Thanks for shopping at Chain Joes. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you’re exploring, evaluating, and purchasing our products. As with any shopping experience, there are terms and conditions that apply to transactions at Chain Joes. We’ll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at Chain Joes, you agree to the terms along with Chain Joes."’s" Privacy Policy. If, for any reason, You are not completely satisfied with any good or service that we provide, don't hesitate to contact us and we will discuss any of the issues you are going through with our product.`,
    },
    {
      title: "Dropdown",
      description: `Thanks for shopping at Chain Joes. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you’re exploring, evaluating, and purchasing our products. As with any shopping experience, there are terms and conditions that apply to transactions at Chain Joes. We’ll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at Chain Joes, you agree to the terms along with Chain Joes."’s" Privacy Policy. If, for any reason, You are not completely satisfied with any good or service that we provide, don't hesitate to contact us and we will discuss any of the issues you are going through with our product.`,
    },
    {
      title: "Dropdown",
      description: `Thanks for shopping at Chain Joes. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you’re exploring, evaluating, and purchasing our products. As with any shopping experience, there are terms and conditions that apply to transactions at Chain Joes. We’ll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at Chain Joes, you agree to the terms along with Chain Joes."’s" Privacy Policy. If, for any reason, You are not completely satisfied with any good or service that we provide, don't hesitate to contact us and we will discuss any of the issues you are going through with our product.`,
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          paddingBottom: { xs: "60px", md: "100px", lg: "160px", xl: "200px" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: "calc(100% - 80px)", md: 498 },
            height: "100%",
            right: isMenuOpen ? 0 : "-100%",
            top: 0,
            background: "#080808",
            zIndex: 100,
            transition: "all 0.2s ease-in-out",
            padding: "36px 40px",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{ position: "absolute", top: "12px", right: "12px" }}
            onClick={handleMobileMenu}
          >
            <img src={CloseBtn} alt="close-btn" />
          </Box>
          {buttons.map((button, index) => (
            <Box
              sx={{ marginBottom: activeMenuDropdown === index ? "36px" : "0" }}
            >
              <Box
                onClick={() => {
                  setActiveMenuDropdown(index);
                }}
                sx={{
                  marginBottom: {
                    xs: activeMenuDropdown === index ? "0" : "32px",
                    md: activeMenuDropdown === index ? "0" : "36px",
                  },
                  display: "flex",
                  "& .menu-dropdown": {
                    width: { xs: 256, md: 466 },
                    fontSize: { xs: "16px", md: "32px" },
                    lineHeight: { xs: "16px", md: "32px" },
                  },
                  "& > img": {
                    transform:
                      activeMenuDropdown === index
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
              >
                {button.link ? (
                  <>
                    {button.type === "scroll" ? (
                      <HashLink
                        to={button.link}
                        scroll={(el) => {
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                          handleMobileMenu();
                        }}
                      >
                        <Typography
                          className="menu-dropdown"
                          fontFamily="Inter"
                          fontWeight={500}
                          color="#FFFFFF"
                        >
                          {button.title}
                        </Typography>
                      </HashLink>
                    ) : (
                      <Link href={button.link} target="_blank" underline="none">
                        <Typography
                          className="menu-dropdown"
                          fontFamily="Inter"
                          fontWeight={500}
                          color="#FFFFFF"
                        >
                          {button.title}
                        </Typography>
                      </Link>
                    )}
                  </>
                ) : (
                  <Typography
                    className="menu-dropdown"
                    fontFamily="Inter"
                    fontWeight={500}
                    color="#FFFFFF"
                  >
                    {button.title}
                  </Typography>
                )}

                {button.links && (
                  <img src={ArrowDown} alt="arrow-down" width="32px" />
                )}
              </Box>
              {button.links && (
                <Box
                  sx={{
                    marginTop: {
                      xs: activeMenuDropdown === index ? "16px" : "0px",
                      md: activeMenuDropdown === index ? "20px" : "0px",
                    },
                    maxHeight: {
                      xs:
                        activeMenuDropdown === index
                          ? `${
                              button.links.length * 14 +
                              (button.links.length - 1) * 16
                            }px`
                          : 0,
                      md:
                        activeMenuDropdown === index
                          ? `${(button.links.length * 2 - 1) * 24}px`
                          : 0,
                    },
                    paddingBottom: activeMenuDropdown === index ? "5px" : "0px",
                    opacity: activeMenuDropdown === index ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  {button.links.map((link, index) => (
                    <Box
                      sx={{
                        marginBottom:
                          button.links.length - 1 !== index
                            ? { xs: "16px", md: "24px" }
                            : 0,
                        "& .dropdown-point": {
                          fontSize: { xs: "14px", md: "24px" },
                          lineHeight: { xs: "14px", md: "24px" },
                        },
                      }}
                    >
                      {link.type === "scroll" ? (
                        <HashLink
                          to={link.link}
                          scroll={(el) => {
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                            handleMobileMenu();
                          }}
                        >
                          <Typography
                            className="dropdown-point"
                            fontFamily="Inter"
                            fontWeight={500}
                            color="#FFFFFF"
                          >
                            {link.title}
                          </Typography>
                        </HashLink>
                      ) : (
                        <Link href={link.link} target="_blank" underline="none">
                          <Typography
                            className="dropdown-point"
                            fontFamily="Inter"
                            fontWeight={500}
                            color="#FFFFFF"
                          >
                            {link.title}
                          </Typography>
                        </Link>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: isMenuOpen
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(255, 255, 255, 0)",
            backdropFilter: isMenuOpen ? "blur(10px)" : "blur(0px)",
            zIndex: isMenuOpen ? 2 : -1,
            transition: "all 0.2s ease-in-out",
          }}
        />
        <Box
          sx={{
            paddingX: { xs: "20px", md: "34px", lg: "66px", xl: "135px" },
            paddingY: { xs: "15px", lg: "30px" },
          }}
        >
          <Box>
            <Header closeMenu={handleMobileMenu} buttons={buttons} />
          </Box>
        </Box>
        <Box sx={{ marginTop: { xs: "60px", md: "100px" } }}>
          <Box
            sx={{
              fontSize: { xs: "44px", md: "105px" },
              lineHeight: { xs: "39.6px", md: "95px" },
            }}
          >
            <Typography
              color="#FFF"
              fontFamily="Aaaiight"
              textAlign="center"
              style={{ fontSize: "inherit", lineHeight: "inherit" }}
            >
              faq
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: { xs: "30px", md: "80px" } }}>
          {faq.map((item, index) => (
            <Box
              sx={{
                width: { xs: 280, md: 580, lg: 588, xl: 771 },
                padding: { xs: "16px", md: "24px" },
                border: "1px solid",
                borderColor: activeFaq === index ? "#00FFB7" : "#242424",
                borderRadius: "4px",
                marginBottom: "32px",
                marginX: "auto",
                cursor: "pointer",
              }}
              onClick={() => setActiveFaq(index)}
            >
              <Box
                sx={{
                  fontSize: { xs: "14px", md: "20px" },
                  lineHeight: { xs: "14px", md: "32px" },
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  "& > img": {
                    transform:
                      activeFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
              >
                <Typography
                  fontFamily="Inter"
                  color="#FFF"
                  style={{ fontSize: "inherit", lineHeight: "inherit" }}
                >
                  {item.title}
                </Typography>
                <img src={ArrowDown} alt="arrow-down" width="24px" />
              </Box>
              <Box
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: { xs: "19.2px", md: "22.4px" },
                  marginTop: { xs: activeFaq === index ? "8px" : "0px" },
                  maxHeight: {
                    xs: activeFaq === index ? "360px" : "0px",
                    md: activeFaq === index ? "160px" : "0px",
                  },
                  opacity: activeFaq === index ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <Typography
                  fontFamily="Inter"
                  color="#FFF"
                  style={{ fontSize: "inherit", lineHeight: "inherit" }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default FAQ;
