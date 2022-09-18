import React from "react";
import { Box } from "@mui/material";
import HeaderButton from "./components/HeaderButton";
import { TwitterLogo, TgLogo, DsLogo, DocsLogo } from "./components/Icons";
import Logo from "../../../../imgs/logo.png";

const Header = () => {
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

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "33px",
        alignItems: "center",
      }}
    >
      <Box sx={{ height: 45, width: 109, backgroundImage: `url(${Logo})` }} />
      <Box sx={{ display: "flex", paddingRight: "70px" }}>
        {buttons.map((item, index) => (
          <HeaderButton
            key={`header-button-${index}`}
            icon={item.icon}
            index={index}
            last={index === buttons.length - 1}
          />
        ))}
        <Box sx={{ marginLeft: "14px" }}>
          <HeaderButton title="docs" icon={DocsLogo} noLine width={137} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
