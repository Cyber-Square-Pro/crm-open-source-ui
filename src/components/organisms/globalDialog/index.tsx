import { Dialog } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeBlack } from "../../../assets/icons";
import { closeDialog, IGlobalDialogSlice } from "../../../redux/GlobalDialog";
import { IconButton } from "../../atoms";

interface Props {}

const GlobalDialog: React.FunctionComponent<Props> = () => {
  const globalDialog: IGlobalDialogSlice = useSelector(
    (state: any) => state.globalDialogSlice
  );
  const dispatch = useDispatch();

  return (
    <Dialog
      open={globalDialog.open}
      onClose={() => dispatch(closeDialog())}
      fullScreen={true}
      sx={{
        "& .MuiPaper-root": {
          backdropFilter: "blur(30px)",
          background: "transparent;",
        },
      }}
    >
      {globalDialog.background ? (
        <div className="m-auto bg-white rounded-[10px]">
        {/* <div className="m-auto bg-black rounded-[10px]"> */}
          <div className="flex justify-end p-[15px]">
            <IconButton
              icon={closeBlack}
              label=""
              onClick={() => {
                dispatch(closeDialog());
              }}
            />
          </div>
          {globalDialog.element}
        </div>
      ) : (
        <div className="m-auto">{globalDialog.element}</div>
      )}
    </Dialog>
  );
};

export default GlobalDialog;
