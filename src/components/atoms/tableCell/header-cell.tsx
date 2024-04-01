import { TableCell } from "@mui/material";
import { TableHeaderProps } from "../../molecules/table";

export default function HeaderCell(props: TableHeaderProps) {
  const { label, padding = undefined, width = 150 } = props;
  return (
    <TableCell
      sx={{
        borderBottom: "1px solid #ECBE44",
        minWidth: width,
        padding: padding ?? "auto",
      }}
    >
      <span className="text-[14px] md:text-[16px] text-white capitalize font-medium">
        {label}
      </span>
    </TableCell>
  );
}
