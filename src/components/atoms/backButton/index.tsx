import { ArrowBackIos } from "@mui/icons-material";
import React from "react";
import { useTranslation } from "react-i18next";
import useCommon from "../../../hooks/common.hooks";
import Button from "../buttons";
interface Props {
  clickHandler?: () => void;
  back?: boolean;
}

export default function BackHandler({ back = true, clickHandler }: Props) {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "common",
  });

  const { backhandler } = useCommon();

  if (!back) {
    return (
      <Button
        label={i18n.t("pages.myNft.viewMore")}
        size="medium"
        type="submit"
        textColor="#000000"
        className="font-semibold"
        onClick={clickHandler || backhandler}
      />
    );
  }

  return (
    <div className="flex">
      <div
        className="text-sm flex items-center text-white cursor-pointer"
        onClick={clickHandler || backhandler}
      >
        <ArrowBackIos sx={{ height: 13, width: 13 }} />
        {t("back")}
      </div>
    </div>
  );
}
