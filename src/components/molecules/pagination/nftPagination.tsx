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
      padding: "6px 15px",
      "& li": {
        margin: "0px 3px"
      },
      "& li:nth-child(1)": {
        "& .MuiSvgIcon-root": {
          height: "20px",
          width: "20px",
        }
      },
      "& li:nth-last-child(1)": {
        "& .MuiSvgIcon-root": {
          height: "20px",
          width: "20px",
        }
      },
      "& .Mui-selected": {
        backgroundColor: "#ECBE44 !important",
        color: "#000000 !important",
        fontWeight: "bold"
      },
      "& .MuiPaginationItem-root:hover": {
        backgroundColor: "#FFFFFF95",
        color: "#FFFFFF",
      },
      "& .MuiButtonBase-root": {
        backgroundColor: "#FFFFFF95",
        color: "#00000095",
        // borderRadius: 0,
        margin: 0,
        padding: "0px 10px",
      },
      "& .MuiPaginationItem-ellipsis": {
        color: "#FFFFFF95",
      }
    },
  },
}));

export default function NFTPagination(props: Props) {
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
