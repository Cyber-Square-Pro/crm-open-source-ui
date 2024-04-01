import React from "react";
import { TableCell } from "@mui/material";

interface Props {
  value: React.ReactNode | string;
  width?: string | number | undefined;
  padding?: string | number | undefined;
}

export default function BodyCell({ value, width, padding = undefined }: Props) {
  return (
    <TableCell width={width} sx={{ minWidth: width || 150, padding: padding ?? "auto" }}>
      <span className="lg:text-sm text-primary h-full">{value}</span>
    </TableCell>
  );
}
