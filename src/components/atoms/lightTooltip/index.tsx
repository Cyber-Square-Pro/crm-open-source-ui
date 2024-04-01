import React from "react";
import { styled } from "@mui/styles";
import { Tooltip, tooltipClasses } from "@mui/material";

const LightTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background: "#FFFFFF",
    color: "rgba(0, 0, 0, 0.87)",
    //   boxShadow: 1,
  },
}));

export default LightTooltip;
