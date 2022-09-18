import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import BtnTexture from "../../../../../../imgs/btn_texture.png";
import { Line } from "../Icons";

const HeaderButton = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={props.link}
      target="_blank"
      underline="none"
      onMouseOver={(e) => {
        e.preventDefault();
        e.target.id !== "btn_line" && setHover(true);
      }}
      onMouseLeave={() => setHover(false)}
      style={{
        zIndex: props.index + 1,
        marginLeft: props.index && "3px",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          // marginLeft: props.index && !props.noLine && "-48px",
        }}
      >
        <Box
          sx={{
            height: "58px",
            width: props.width || "74px",
            backgroundImage: `url(${BtnTexture})`,
            transform: "skewX(-11deg)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
          }}
        >
          <Box
            sx={{
              transform: "skewX(11deg)",
              display: "flex",
            }}
          >
            <props.icon color={hover ? "#44F4C3" : ""} />
            {props.title && (
              <Typography
                fontSize="16px"
                fontFamily="Inter"
                fontStyle="italic"
                textTransform="uppercase"
                style={{
                  marginLeft: "12px",
                }}
                color={hover ? "#44F4C3" : "#ffffff"}
              >
                {props.title}
              </Typography>
            )}
          </Box>
        </Box>
        {!(props.last || props.noLine) && (
          <Box id="btn_line" sx={{ position: "absolute", right: "-50px" }}>
            <Line />
          </Box>
        )}
      </Box>
    </Link>
  );
};

export default HeaderButton;
