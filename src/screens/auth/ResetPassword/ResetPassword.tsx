import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Password from "../../../components/atoms/Input/Password";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/constants/routes";
import yup from "../../../utils/validations/yup";
import { useResetPasswordMutation } from "../../../utils/api/baseSlice";
import { useTranslation } from "react-i18next";
import { Button, IconButton } from "../../../components/atoms";
import { handleInputErrors } from "../../../utils/helpers/errorHandler";
import Status from "../../../components/molecules/status";
import { back } from "../../../assets/icons";

export default function ResetPassword() {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "pages.resetPassword",
  });
  const ResetPasswordSchema = yup.object().shape({
    password: yup
      .string()
      .required(i18n.t("errorMessages.required") || "")
      // @ts-ignore
      .isSecurePassword(i18n.t("errorMessages.validPassword")),
    confirmPassword: yup
      .string()
      .required(i18n.t("errorMessages.required") || "")
      .oneOf(
        // @ts-ignore
        [yup.ref("password"), null],
        i18n.t("errorMessages.passWordDoesntMatch")
      ),
  });
  const [resetPassword, { isLoading: isUpdating }] = useResetPasswordMutation();
  const [passwordReseted, setPasswordReseted] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ResetPasswordSchema),
  });

  const { state } = useLocation();
  const { email, accessToken, otp } = state;

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    data.type = "password";
    data["otp"] = otp;
    data["email"] = email;

    let res: any = await resetPassword(data);

    if (res.data?.success) {
      setPasswordReseted(true);
    } else {
      // handleInputErrors(res.error?.data, setError);
    }
  };

  return (
    <>
      {!passwordReseted ? (
        <form
          className="flex flex-col justify-between lg:justify-center h-full gap-[35px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col mt-[150px] lg:mt-[5px] gap-[15px]">
            <div className="mb-4">
              <IconButton
                icon={back}
                label={i18n.t('common.back')}
                onClick={() => {
                  navigate(ROUTES.base);
                }}
                size="small"
              />
            </div>
            <div>
              <p className="text-[#ECBE44] text-start text-[20px] pb-2 font-bold">
                {t("title")}
              </p>
              <p className="text-[#FFFFFF] text-start text-[14px] ">
                {t("description")}
              </p>
            </div>
            <Password
              error={errors.password}
              name="password"
              placeholder=""
              register={register}
              title={t("password")}
            />
            <Password
              error={errors.confirmPassword}
              name="confirmPassword"
              placeholder=""
              register={register}
              title={t("confirmPassword")}
            />
          </div>
          <div className="flex flex-col mb-[50px]">
            <Button
              label={t("title")}
              size="large"
              textColor="#FFFFFF"
              type="submit"
              isLoading={isUpdating}
            />
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <Status
            icon={back}
            title={t("successReset")}
            description={t("descriptionSuccess")}
            buttonText={i18n.t("pages.login.title")}
            onClick={() => navigate(ROUTES.base)}
          />
        </div>
      )}
    </>
  );
}
