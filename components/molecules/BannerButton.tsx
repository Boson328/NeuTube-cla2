import React from "react";

import {
  Button,
  FormControlLabel,
  IconButton,
  Typography
} from "@mui/material";
import Link from "next/link";

export default function BannerButton({
  href,
  icon,
  text,
  isBold,
  size = 220
}: {
  href: string;
  icon: JSX.Element;
  isBold: boolean;
  size?: number;
  text: string;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Button
        startIcon={icon}
        sx={{
          ":hover": {
            backgroundColor: "#ffffff10"
          },
          borderRadius: "50px",
          color: isBold ? "primary.main" : "gray",
          display: { xl: "flex", xs: "none" },
          fontSize: `${size / 12}px`,
          height: `${size / 3}px`,
          justifyContent: "left",
          margin: `${size / 11}px`,
          paddingLeft: `${size / 6}px`,
          paddingRight: `${size / 6}px`,
          textAlign: "left",
          width: `${size}px`
        }}
      >
        <Typography
          sx={{
            fontSize: "inherit",
            fontWeight: isBold ? "bold" : "normal",
            marginLeft: "10px",
            textDecoration: "none",
            width: "120px"
          }}
        >
          {text}
        </Typography>
      </Button>
      <IconButton
        sx={{
          ":hover": { backgroundColor: "#ffffff10" },
          color: isBold ? "primary.main" : "gray",
          display: { xl: "none", xs: "block" },
          height: "85px",
          marginLeft: "50%",
          my: "10px",
          transform: "translateX(-50%)",
          width: "85px"
        }}
      >
        <FormControlLabel
          control={icon}
          label={
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: isBold ? "bold" : "normal",
                marginTop: "10px",
                width: "120px"
              }}
            >
              {text}
            </Typography>
          }
          labelPlacement="bottom"
          sx={{ width: "25px" }}
        />
      </IconButton>
    </Link>
  );
}
