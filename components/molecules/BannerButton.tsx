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
  isBold
}: {
  href: string;
  icon: JSX.Element;
  isBold: boolean;
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
          fontSize: "18px",
          height: "70px",
          justifyContent: "left",
          margin: "20px",
          paddingLeft: "30px",
          paddingRight: "30px",
          textAlign: "left",
          width: "220px"
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
