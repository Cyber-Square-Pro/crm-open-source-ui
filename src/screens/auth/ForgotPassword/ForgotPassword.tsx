import React from "react";
import { useTranslation } from "react-i18next";
import { Button, IconButton, Input } from "../../../components/atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../../utils/validations/yup";
import { useForm } from "react-hook-form";
import { back } from "../../../assets/icons";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../utils/constants/routes";

const ForgotPasswordComponent: React.FC<any> = () => {
  


  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "pages.forgotPassword",
  });

  const ForgotPasswordSchema = yup.object().shape({
    email: yup
      .string()
      .email(i18n.t("errorMessages.validEmail") || "")
      .required(i18n.t("errorMessages.required") || ""),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
   
  };

 

  return (
    <form
      className="flex flex-col justify-between lg:justify-center h-full gap-[45px] w-full items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col mt-[150px] lg:mt-[5px] gap-[30px]">
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
          <p className="text-[#ECBE44]  pb-2 text-start text-[20px] font-bold">
            {t("title")}
          </p>
          <p className="text-[#FFFFFF] text-start text-[14px] ">
            {t("description")}
          </p>
        </div>
        <Input
          error={errors.email}
          name="email"
          placeholder=""
          register={register}
          title={t("email")}
          labelColor="black"
        />
      </div>
      <div className="flex flex-col mb-[50px]">
        <Button
          label={t("button")}
          size="large"
          textColor="#FFFFFF"
          type="submit"
        />
      </div>
    </form>
  );
};

export default ForgotPasswordComponent;
