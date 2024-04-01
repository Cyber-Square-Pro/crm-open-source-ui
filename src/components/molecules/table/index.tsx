import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TableBodyCell, TableHeaderCell } from "../../atoms";
import { useTranslation } from "react-i18next";

export interface TableHeaderProps {
  label: string | React.ReactNode | any;
  name: string;
  width?: number | string;
  padding?: number | string;
  sort?: boolean;
  sortOrder?: string;
}

export interface TableItemProps {
  [key: string]: React.ReactNode | string | any;
}

interface Props {
  headers: TableHeaderProps[];
  itemList: TableItemProps[];
  hover?: boolean;
  sx?: any;
}

export default function CustomTable({
  headers = [],
  itemList = [],
  hover = true,
  sx = {},
}: Props) {
  const { i18n } = useTranslation("translation");

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 3,
        boxShadow: "none",
        background: "#1C1F2C95",
        // background: "#474a5470"
      }}
      className="border border-primary"
    >
      <Table sx={{ ...sx }}>
        <TableHead>
          <TableRow>
            {!!headers &&
              headers.map((header, index) => (
                <TableHeaderCell {...header} key={`table-header-${index}`} />
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {itemList.map((item, index) => (
            <TableRow
              sx={
                hover
                  ? {
                      "&:hover": {
                        background: "rgba(205, 205, 205 , 0.3)",
                      },
                    }
                  : {}
              }
              key={`table-row-${index}`}
            >
              {headers.map((header, ind) => (
                <TableBodyCell
                  key={`table-body-${ind}-${index}`}
                  value={item[header.name]}
                  width={header?.width}
                  padding={header?.padding}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {(!!!itemList || itemList?.length == 0) && (
        <span className="text-white text-secondary flex justify-center items-center my-5">
          {i18n.t("common.noData")}
        </span>
      )}
    </TableContainer>
  );
}
