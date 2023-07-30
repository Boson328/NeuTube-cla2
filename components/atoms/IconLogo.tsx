import React from "react";

import type { SxProps, Theme } from "@mui/material";

import { SvgIcon } from "@mui/material";

export default function IconLogo({
  size = 40,
  sx = {}
}: {
  size?: number;
  sx?: SxProps<Theme>;
}) {
  return (
    <SvgIcon
      sx={{
        height: size + "px",
        width: size + "px",
        ...sx
      }}
      viewBox="0 0 49 49"
    >
      <path
        clipRule="evenodd"
        d="M23.3215 46C36.2016 46 46.6429 35.8264 46.6429 23.2765C46.6429 10.7267 36.2016 0.55304 23.3215 0.55304C10.4414 0.55304 0 10.7267 0 23.2765C0 35.8264 10.4414 46 23.3215 46ZM15.6969 10.6785C15.161 10.3615 14.4754 10.7374 14.4754 11.3483V19.2131C14.4754 19.4849 14.6199 19.7373 14.8573 19.88L19.4019 22.6122C19.91 22.9177 19.9113 23.6373 19.4042 23.9445L14.855 26.7005C14.6189 26.8435 14.4754 27.0951 14.4754 27.3659V35.2048C14.4754 35.8157 15.161 36.1916 15.6969 35.8745L35.8605 23.9463C36.3762 23.6412 36.3762 22.9119 35.8605 22.6067L15.6969 10.6785Z"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
}
