import React, { useState } from "react";
import { Box, Typography, useMediaQuery, Link } from "@mui/material";
import Header from "../modules/first/components/header";
import CloseBtn from "../imgs/new/close-btn.svg";
import ArrowDown from "../imgs/new/arrow-down.svg";
import { HashLink } from "react-router-hash-link";
import { Footer } from "../modules";

const PrivacyPolicy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuDropdown, setActiveMenuDropdown] = useState(0);

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
  const desktop1080Width = useMediaQuery("(min-width: 1000px)");

  const desktop768Width = useMediaQuery("(min-width: 768px)");
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            display: { xs: "block", xl: "none" },
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
            display: { xs: "block", xl: "none" },
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
          <Box sx={{ paddingTop: { xs: "50px", md: "768px", lg: "120px" } }}>
            <Box
              sx={{
                display: desktop768Width ? "flex" : "block",
                justifyContent: "space-between",
                alignItems: "flex-end",
                WebkitAlignItems: "flex-end",
              }}
            >
              <Box>
                <Typography
                  fontFamily="Furore"
                  fontSize={
                    desktop1080Width
                      ? "75px"
                      : desktop768Width
                      ? "50px"
                      : "25px"
                  }
                  color="#ffffff"
                  lineHeight={
                    desktop1080Width
                      ? "75px"
                      : desktop768Width
                      ? "50px"
                      : "25px"
                  }
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
                >
                  privacy policy
                </Typography>
              </Box>
              <Box sx={{ marginTop: !desktop768Width ? "35px" : "0px" }}>
                <Typography
                  fontFamily="Inter"
                  fontSize={
                    desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px"
                  }
                  color="#FFFFFF"
                >
                  Updated at 2022-09-29
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: desktop1080Width
                  ? "90px"
                  : desktop768Width
                  ? "50px"
                  : "30px",
              }}
            >
              <Box>
                <Typography
                  fontFamily="Inter"
                  fontSize={
                    desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px"
                  }
                  color="#FFFFFF"
                >
                  Chain Joes (“we,” “our,” or “us”) is committed to protecting
                  your privacy. This Privacy Policy explains how your personal
                  information is collected, used, and disclosed by Chain Joes.
                  <br />
                  This Privacy Policy applies to our website, and its associated
                  subdomains (collectively, our “Service”) alongside our
                  application, Chain Joes. By accessing or using our Service,
                  you signify that you have read, understood, and agree to our
                  collection, storage, use, and disclosure of your personal
                  information as described in this Privacy Policy and our Terms
                  of Service.
                </Typography>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Definitions and key terms
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    To help explain things as clearly as possible in this
                    Privacy Policy, every time any of these terms are
                    referenced, are strictly defined as:
                  </Typography>
                  <ul
                    style={{
                      paddingInlineStart: desktop1080Width ? "25px" : "17px",
                      margin: 0,
                    }}
                  >
                    <li>
                      Cookie: small amount of data generated by a website and
                      saved by your web browser. It is used to identify your
                      browser, provide analytics, remember information about you
                      such as your language preference or login information.
                    </li>
                    <li>
                      Company: when this policy mentions “Company,” “we,” “us,”
                      or “our,” it refers to Chain Joes, (High Tech Campus 10,
                      Eindhoven, North Brabant 5656, NL) that is responsible for
                      your information under this Privacy Policy.
                    </li>
                    <li>
                      Country: where Chain Joes or the owners/founders of Chain
                      Joes are based, in this case is the Netherlands
                    </li>
                    <li>
                      Customer: refers to the company, organization or person
                      that signs up to use the Chain Joes Service to manage the
                      relationships with your consumers or service users.
                    </li>
                    <li>
                      Device: any internet connected device such as a phone,
                      tablet, computer or any other device that can be used to
                      visit Chain Joes and use the services.
                    </li>
                    <li>
                      IP address: Every device connected to the Internet is
                      assigned a number known as an Internet protocol (IP)
                      address. These numbers are usually assigned in geographic
                      blocks. An IP address can often be used to identify the
                      location from which a device is connecting to the
                      Internet.
                    </li>
                    <li>
                      Personnel: refers to those individuals who are employed by
                      Chain Joes or are under contract to perform a service on
                      behalf of one of the parties.
                    </li>
                    <li>
                      Personal Data: any information that directly, indirectly,
                      or in connection with other information — including a
                      personal identification number — allows for the
                      identification or identifiability of a natural person.
                      Service: refers to the service provided by Chain Joes as
                      described in the relative terms (if available) and on this
                      platform.
                    </li>
                    <li>
                      Third-party service: refers to advertisers, contest
                      sponsors, promotional and marketing partners, and others
                      who provide our content or whose products or services we
                      think may interest you.
                    </li>
                    <li>
                      Website: Chain Joes."’s" site, which can be accessed via
                      this URL:{" "}
                      <a
                        href="https://chainjoes.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "#44F4C3" }}
                      >
                        https://chainjoes.com/
                      </a>
                    </li>
                    <li>
                      You: a person or entity that is registered with Chain Joes
                      to use the Services.
                    </li>
                  </ul>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Governing Law
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    This Privacy Policy is governed by the laws of the
                    Netherlands without regard to its conflict of laws
                    provision. You consent to the exclusive jurisdiction of the
                    courts in connection with any action or dispute arising
                    between the parties under or in connection with this Privacy
                    Policy except for those individuals who may have rights to
                    make claims under Privacy Shield, or the Swiss-US framework.
                    The laws of the Netherlands, excluding its conflicts of law
                    rules, shall govern this Agreement and your use of the
                    website. Your use of the website may also be subject to
                    other local, state, national, or international laws. By
                    using Chain Joes or contacting us directly, you signify your
                    acceptance of this Privacy Policy. If you do not agree to
                    this Privacy Policy, you should not engage with our website,
                    or use our services. Continued use of the website, direct
                    engagement with us, or following the posting of changes to
                    this Privacy Policy that do not significantly affect the use
                    or disclosure of your personal information will mean that
                    you accept those changes.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Information automatically collected
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    There is some information like your Internet Protocol (IP)
                    address and/or browser and device characteristics — is
                    collected automatically when you visit our platform. This
                    information may be used to connect your computer to the
                    Internet. Other information collected automatically could be
                    a login, e-mail address, password, computer and connection
                    information such as browser plug-in types and versions and
                    time zone setting, operating systems and platforms, purchase
                    history, (we sometimes aggregate with similar information
                    from other Users), the full Uniform Resource Locator (URL)
                    clickstream to, through and from our Website that may
                    include date and time; cookie number; parts of the site you
                    viewed or searched for; and the phone number you used to
                    call our Customer Services. We may also use browser data
                    such as cookies, Flash cookies (also known as Flash Local
                    Shared Objects) or similar data on certain parts of our
                    Website for fraud prevention and other purposes. During your
                    visits, we may use software tools such as JavaScript to
                    measure and collect session information including page
                    response times, download errors, length of visits to certain
                    pages, page interaction information (such as scrolling,
                    clicks, and mouse-overs), and methods used to browse away
                    from the page. We may also collect technical information to
                    help us identify your device for fraud prevention and
                    diagnostic purposes.
                    <br />
                    We automatically collect certain information when you visit,
                    use or navigate the platform. This information does not
                    reveal your specific identity (like your name or contact
                    information) but may include device and usage information,
                    such as your IP address, browser and device characteristics,
                    operating system, language preferences, referring URLs,
                    device name, country, location, information about who and
                    when you use our and other technical information. This
                    information is primarily needed to maintain the security and
                    operation of our platform, and for our internal analytics
                    and reporting purposes.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Personnel
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    If you are a Chain Joes worker or applicant, we collect
                    information you voluntarily provide to us. We use the
                    information collected for Human Resources purposes in order
                    to administer benefits to workers and screen applicants. You
                    may contact us in order to (1) update or correct your
                    information, (2) change your preferences with respect to
                    communications and other information you receive from us, or
                    (3) receive a record of the information we have relating to
                    you. Such updates, corrections, changes and deletions will
                    have no effect on other information that we maintain, or
                    information that we have provided to third parties in
                    accordance with this Privacy Policy prior to such update,
                    correction, change or deletion.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Sale of Business
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    We reserve the right to transfer information to a third
                    party in the event of a sale, merger or other transfer of
                    all or substantially all of the assets of Chain Joes or any
                    of its Corporate Affiliates (as defined herein), or that
                    portion of Chain Joes or any of its Corporate Affiliates to
                    which the Service relates, or in the event that we
                    discontinue our business or file a petition or have filed
                    against us a petition in bankruptcy, reorganization or
                    similar proceeding, provided that the third party agrees to
                    adhere to the terms of this Privacy Policy.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Affiliates
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    We may disclose information (including personal information)
                    about you to our Corporate Affiliates. For purposes of this
                    Privacy Policy, "Corporate Affiliate" means any person or
                    entity which directly or indirectly controls, is controlled
                    by or is under common control with Chain Joes, whether by
                    ownership or otherwise. Any information relating to you that
                    we provide to our Corporate Affiliates will be treated by
                    those Corporate Affiliates in accordance with the terms of
                    this Privacy Policy.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Your Consent
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    We've updated our Privacy Policy to provide you with
                    complete transparency into what is being set when you visit
                    our site and how it's being used. By using our website,
                    registering an account, or making a purchase, you hereby
                    consent to our Privacy Policy and agree to its terms.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Links to Other Websites
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    This Privacy Policy applies only to the Services. The
                    Services may contain links to other websites not operated or
                    controlled by Chain Joes. We are not responsible for the
                    content, accuracy or opinions expressed in such websites,
                    and such websites are not investigated, monitored or checked
                    for accuracy or completeness by us. Please remember that
                    when you use a link to go from the Services to another
                    website, our Privacy Policy is no longer in effect. Your
                    browsing and interaction on any other website, including
                    those that have a link on our platform, is subject to that
                    website’s own rules and policies. Such third parties may use
                    their own cookies or other methods to collect information
                    about you.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Cookies
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Chain Joes uses "Cookies" to identify the areas of our
                    website that you have visited. A Cookie is a small piece of
                    data stored on your computer or mobile device by your web
                    browser. We use Cookies to enhance the performance and
                    functionality of our website but are non-essential to their
                    use. However, without these cookies, certain functionality
                    like videos may become unavailable or you would be required
                    to enter your login details every time you visit the website
                    as we would not be able to remember that you had logged in
                    previously. Most web browsers can be set to disable the use
                    of Cookies. However, if you disable Cookies, you may not be
                    able to access functionality on our website correctly or at
                    all. We never place Personally Identifiable Information in
                    Cookies.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Blocking and disabling cookies and similar technologies
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Wherever you're located you may also set your browser to
                    block cookies and similar technologies, but this action may
                    block our essential cookies and prevent our website from
                    functioning properly, and you may not be able to fully
                    utilize all of its features and services. You should also be
                    aware that you may also lose some saved information (e.g.
                    saved login details, site preferences) if you block cookies
                    on your browser. Different browsers make different controls
                    available to you. Disabling a cookie or category of cookie
                    does not delete the cookie from your browser, you will need
                    to do this yourself from within your browser, you should
                    visit your browser's help menu for more information.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Kids' Privacy
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    We do not address anyone under the age of 13. We do not
                    knowingly collect personally identifiable information from
                    anyone under the age of 13. If You are a parent or guardian
                    and You are aware that Your child has provided Us with
                    Personal Data, please contact Us. If We become aware that We
                    have collected Personal Data from anyone under the age of 13
                    without verification of parental consent, We take steps to
                    remove that information from Our servers.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Changes To Our Privacy Policy
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    We may change our Service and policies, and we may need to
                    make changes to this Privacy Policy so that they accurately
                    reflect our Service and policies. Unless otherwise required
                    by law, we will notify you (for example, through our
                    Service) before we make changes to this Privacy Policy and
                    give you an opportunity to review them before they go into
                    effect. Then, if you continue to use the Service, you will
                    be bound by the updated Privacy Policy. If you do not want
                    to agree to this or any updated Privacy Policy, you can
                    delete your account.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Third-Party Services
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    We may display, include or make available third-party
                    content (including data, information, applications and other
                    products services) or provide links to third-party websites
                    or services ("Third- Party Services"). You acknowledge and
                    agree that Chain Joes shall not be responsible for any
                    Third-Party Services, including their accuracy,
                    completeness, timeliness, validity, copyright compliance,
                    legality, decency, quality or any other aspect thereof.
                    Chain Joes does not assume and shall not have any liability
                    or responsibility to you or any other person or entity for
                    any Third-Party Services. Third-Party Services and links
                    thereto are provided solely as a convenience to you and you
                    access and use them entirely at your own risk and subject to
                    such third parties' terms and conditions.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Information about General Data Protection Regulation (GDPR)
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    We may be collecting and using information from you if you
                    are from the European Economic Area (EEA), and in this
                    section of our Privacy Policy we are going to explain
                    exactly how and why is this data collected, and how we
                    maintain this data under protection from being replicated or
                    used in the wrong way.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    What is GDPR?
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    GDPR is an EU-wide privacy and data protection law that
                    regulates how EU residents' data is protected by companies
                    and enhances the control the EU residents have, over their
                    personal data. The GDPR is relevant to any globally
                    operating company and not just the EU-based businesses and
                    EU residents. Our customers’ data is important irrespective
                    of where they are located, which is why we have implemented
                    GDPR controls as our baseline standard for all our
                    operations worldwide.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    What is personal data?
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    Any data that relates to an identifiable or identified
                    individual. GDPR covers a broad spectrum of information that
                    could be used on its own, or in combination with other
                    pieces of information, to identify a person. Personal data
                    extends beyond a person’s name or email address. Some
                    examples include financial information, political opinions,
                    genetic data, biometric data, IP addresses, physical
                    address, sexual orientation, and ethnicity.
                    <br />
                    The Data Protection Principles include requirements such as:
                  </Typography>
                  <ul
                    style={{
                      paddingInlineStart: desktop1080Width ? "25px" : "17px",
                      margin: 0,
                    }}
                  >
                    <li>
                      Personal data collected must be processed in a fair,
                      legal, and transparent way and should only be used in a
                      way that a person would reasonably expect.
                    </li>
                    <li>
                      Personal data should only be collected to fulfil a
                      specific purpose and it should only be used for that
                      purpose. Organizations must specify why they need the
                      personal data when they collect it.
                    </li>
                    <li>
                      Personal data should be held no longer than necessary to
                      fulfil its purpose.
                    </li>
                    <li>
                      People covered by the GDPR have the right to access their
                      own personal data. They can also request a copy of their
                      data, and that their data be updated, deleted, restricted,
                      or moved to another organization.
                    </li>
                  </ul>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    Why is GDPR important?
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    GDPR adds some new requirements regarding how companies
                    should protect individuals' personal data that they collect
                    and process. It also raises the stakes for compliance by
                    increasing enforcement and imposing greater fines for
                    breach. Beyond these facts it's simply the right thing to
                    do. At Chain Joes we strongly believe that your data privacy
                    is very important and we already have solid security and
                    privacy practices in place that go beyond the requirements
                    of this new regulation.
                    <br />
                    Individual Data Subject's Rights - Data Access, Portability
                    and Deletion
                    <br />
                    We are committed to helping our customers meet the data
                    subject rights requirements of GDPR. Chain Joes processes or
                    stores all personal data in fully vetted, DPA compliant
                    vendors. We do store all conversation and personal data for
                    up to 6 years unless your account is deleted. In which case,
                    we dispose of all data in accordance with our Terms of
                    Service and Privacy Policy, but we will not hold it longer
                    than 60 days.
                    <br />
                    We are aware that if you are working with EU customers, you
                    need to be able to provide them with the ability to access,
                    update, retrieve and remove personal data. We got you! We've
                    been set up as self service from the start and have always
                    given you access to your data and your customers data. Our
                    customer support team is here for you to answer any
                    questions you might have about working with the API.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
                <Box>
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#44F4C3"
                    textTransform="uppercase"
                  >
                    California Residents
                  </Typography>
                </Box>
                <Box
                  sx={{
                    fontFamily: "Inter",
                    fontSize: desktop1080Width
                      ? "16px"
                      : desktop768Width
                      ? "13px"
                      : "12px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    fontFamily="Inter"
                    fontSize={
                      desktop1080Width
                        ? "16px"
                        : desktop768Width
                        ? "13px"
                        : "12px"
                    }
                    color="#FFFFFF"
                  >
                    The California Consumer Privacy Act (CCPA) requires us to
                    disclose categories of Personal Information we collect and
                    how we use it, the categories of sources from whom we
                    collect Personal Information, and the third parties with
                    whom we share it, which we have explained above.
                    <br />
                    We are also required to communicate information about rights
                    California residents have under California law. You may
                    exercise the following rights:
                  </Typography>
                  <ul
                    style={{
                      paddingInlineStart: desktop1080Width ? "25px" : "17px",
                      margin: 0,
                    }}
                  >
                    <li>
                      Right to Know and Access. You may submit a verifiable
                      request for information regarding the: (1) categories of
                      Personal Information we collect, use, or share; (2)
                      purposes for which categories of Personal Information are
                      collected or used by us; (3) categories of sources from
                      which we collect Personal Information; and (4) specific
                      pieces of Personal Information we have collected about
                      you.
                    </li>
                    <li>
                      Right to Equal Service. We will not discriminate against
                      you if you exercise your privacy rights.
                    </li>
                    <li>
                      Right to Delete. You may submit a verifiable request to
                      close your account and we will delete Personal Information
                      about you that we have collected.
                    </li>
                    <li>
                      Request that a business that sells a consumer's personal
                      data, not sell the consumer's personal data.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box sx={{ marginTop: desktop768Width ? "50px" : "35px" }}>
              <Typography
                fontFamily="Inter"
                fontSize={
                  desktop1080Width ? "16px" : desktop768Width ? "13px" : "12px"
                }
                color="#FFFFFF"
              >
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Typography
                fontFamily="Inter"
                fontSize={
                  desktop1080Width ? "16px" : desktop768Width ? "13px" : "12px"
                }
                color="#FFFFFF"
              >
                We do not sell the Personal Information of our users.
              </Typography>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Typography
                fontFamily="Inter"
                fontSize={
                  desktop1080Width ? "16px" : desktop768Width ? "13px" : "12px"
                }
                color="#FFFFFF"
              >
                Don't hesitate to contact us if you have any questions via
                Email:{" "}
                <a
                  href="mailto:
                    info@chainjoes.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "#44F4C3" }}
                >
                  info@chainjoes.com
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default PrivacyPolicy;
