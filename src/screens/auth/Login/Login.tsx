import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Input, Password } from "../../../components/atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../../utils/validations/yup";
import { useForm } from "react-hook-form";
import TextButton from "../../../components/atoms/buttons/TextButton";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../utils/constants/routes";
import { useLoginMutation } from "../../../utils/api/baseSlice";

const LoginComponent: React.FC<any> = () => {
  const [login, { isLoading: isUpdating }] = useLoginMutation();

  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "pages.login",
  });

  const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .email(i18n.t("errorMessages.validEmail") || "")
      .required(i18n.t("errorMessages.required") || ""),
    password: yup.string().required(i18n.t("errorMessages.required") || ""),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    let res: any = await login(data);
    if (!res.data?.success) {
      if (res.error?.data) {
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between lg:justify-center h-full gap-[35px]"
      >
        <div>
          <div className="mt-[150px] mb-[30px] lg:mt-[5px]">
            <p className="text-black text-start lg:text-center text-[20px] font-bold">
              {t("title")}
            </p>
            <p className="text-black text-start lg:text-center text-[14px] ">
              {t("description")}
            </p>
          </div>
          <div className="flex flex-col  gap-2">
            <Input
              error={errors.email}
              name="email"
              placeholder=""
              register={register}
              title={t("email")}
              labelColor="black"
            />
            <Password
              error={errors.password}
              name="password"
              placeholder=""
              register={register}
              title={t("password")}
            />
            <div className="flex flex-row justify-between">
              <TextButton
                label={t("forgot")}
                onClick={() => {
                  navigate(ROUTES.forgotPassword);
                }}
                underline={false}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-[50px] lg:mb-[5px] gap-[15px]">
          <Button
            label={t("title")}
            size="large"
            textColor="#FFFFFF"
            type="submit"
            isLoading={isUpdating}
          />
          <p className="text-[#FFFFFF] text-center text-[14px]">
            {t("doNotHave")}&nbsp;
            <TextButton
              label={t("signUp")}
              onClick={() => {
                navigate(ROUTES.signUp);
              }}
              underline={false}
            />
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
