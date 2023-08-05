import React from "react";

import type { KeyType } from "@/utils/types";

import { Grid } from "@mui/material";

import Key from "../atoms/Key";

export default function KeyLine({ keyline }: { keyline: KeyType[] }) {
  return (
    <Grid container direction="row" wrap="nowrap">
      {keyline.map(({ code, name, length }) => (
        <Key key={code} length={length || 27} name={name} />
      ))}
    </Grid>
  );
}
