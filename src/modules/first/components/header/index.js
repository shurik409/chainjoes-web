import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import HeaderButton from "./components/HeaderButton";
import { TwitterLogo, TgLogo, DsLogo, DocsLogo } from "./components/Icons";
import Logo from "../../../../imgs/webp/logo.webp";

const Header = (props) => {
  const buttons = [
    // {
    //   title: "Facebook",
    //   //icon: FbLogo,
    //   link: "https://facebook.com/ChainJoes",
    //   iconWidth: 20,
    // },
    // {
    //   title: "Instagram",
    //   //icon: InstLogo,
    //   link: "https://www.instagram.com/chain_joes/",
    //   iconWidth: 26,
    // },
    {
      title: "Twitter",
      icon: TwitterLogo,
      link: "https://twitter.com/chainjoes",
      iconWidth: 31,
    },
    {
      title: "Telegram",
      icon: TgLogo,
      link: "https://t.me/chainjoes",
      iconWidth: 29,
    },
    // {
    //   title: "Medium",
    //   //icon: MediumLogo,
    //   link: "https://medium.com/@ChainJoes",
    //   iconWidth: 36,
    // },
    {
      title: "Discord",
      icon: DsLogo,
      link: "https://discord.com/invite/6XcvPDbXBa",
      iconWidth: 32,
    },
  ];

  const desktop1080Width = useMediaQuery("(min-width: 1000px");
  const desktop768Width = useMediaQuery("(min-width: 768px");

  return (
    <Box
      sx={{
        width: "100%",
        padding: props.padding || "unset",
        zIndex: 3,
      }}
    >
      {desktop1080Width && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "33px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ height: 45, width: 109, backgroundImage: `url(${Logo})` }}
          />
          <Box sx={{ display: "flex", paddingRight: "70px" }}>
            {buttons.map((item, index) => (
              <HeaderButton
                key={`header-button-${index}`}
                icon={item.icon}
                index={index}
                last={index === buttons.length - 1}
                link={item.link}
              />
            ))}
            {/* <Box sx={{ marginLeft: "14px" }}>
              <HeaderButton title="docs" icon={DocsLogo} noLine width={137} />
            </Box> */}
          </Box>
        </Box>
      )}
      {!desktop1080Width && desktop768Width && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "30px",
            alignItems: "center",
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
          <Box sx={{ display: "flex" }}>
            {buttons.map((item, index) => (
              <HeaderButton
                key={`header-button-${index}`}
                icon={item.icon}
                index={index}
                last={index === buttons.length - 1}
                height={40}
                iconHeight={14}
                width={50}
                link={item.link}
              />
            ))}
            {/* <Box sx={{ marginLeft: "14px" }}>
              <HeaderButton
                title="docs"
                icon={DocsLogo}
                noLine
                width={96}
                height={40}
                iconHeight={14}
              />
            </Box> */}
          </Box>
        </Box>
      )}
      {!desktop1080Width && !desktop768Width && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "10px",
            alignItems: "center",
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
          {/* <Box sx={{ display: "flex" }}>
            <Box sx={{ marginLeft: "14px" }}>
              <HeaderButton
                title="docs"
                icon={DocsLogo}
                noLine
                width={96}
                height={40}
                iconHeight={14}
              />
            </Box>
          </Box> */}
        </Box>
      )}
    </Box>
  );
};

export default Header;
