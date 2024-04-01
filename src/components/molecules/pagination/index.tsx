import { Pagination, PaginationItem, Theme, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  paginationRoot: {
    "& .MuiPagination-ul": {
      border: `1px solid #ECBE44`,
      width: "fit-content",
      borderRadius: "10px",
      "& li": {
        borderLeft: `1px solid #ECBE44`,
        minHeight: 32,
        backgroundColor: "#1C1F2C95",
      },
      "& li:nth-child(1)": {
        border: "none !important",
        borderRadius: "10px 0px 0px 10px",
        "& .MuiButtonBase-root": {
          borderRadius: "10px 0px 0px 10px",
        },
      },
      "& li:nth-last-child(1)": {
        borderRadius: "0px 10px 10px 0px",
        "& .MuiButtonBase-root": {
          borderRadius: "0px 10px 10px 0px",
          padding: "0px 6px",
        },
      },
      "& .Mui-selected": {
        backgroundColor: "#ECBE4495 !important",
        color: "#000000 !important",
      },
      "& .MuiPaginationItem-root:hover": {
        backgroundColor: "#ECBE44",
        color: "white",
      },
      "& .MuiButtonBase-root": {
        backgroundColor: "#1C1F2C95",
        color: "#ECBE44",
        borderRadius: 0,
        margin: 0,
        padding: "0px 5px",
      },
      "& .MuiPaginationItem-ellipsis": {
        color: "#ECBE44",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 32,
      },
    },
  },
}));

export default function CustomPagination(props: Props) {
  const { page, totalPages, onChange } = props;
  const classes = useStyles();

  return (
    <div>
      <Pagination
        count={totalPages}
        classes={{ root: classes.paginationRoot }}
        page={page}
        // boundaryCount={2}
        siblingCount={0}
        onChange={(e, val) => onChange(val)}
        renderItem={(item) => <PaginationItem {...item} />}
      />
    </div>
  );
}
