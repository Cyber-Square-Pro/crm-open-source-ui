import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, CheckBox, Input, Password } from "../../../components/atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../../utils/validations/yup";
import { useForm } from "react-hook-form";
import TextButton from "../../../components/atoms/buttons/TextButton";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../utils/constants/routes";
import { useSignUpMutation } from "../../../utils/api/baseSlice";
import { handleInputErrors } from "../../../utils/helpers/errorHandler";
import { MobileContext } from "../../../App";

const SignUpComponent: React.FC<{}> = ({}) => {
  const [success, setSuccess] = useState({
    userId: null,
    email: "",
    success: false,
  });
  const [signUp, { isLoading: isUpdating }] = useSignUpMutation();
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "pages.signUp",
  });

  const value = React.useContext(MobileContext);

  const SignUpSchema = yup.object().shape({
    fullName: yup.string().required(i18n.t("errorMessages.required") || ""),
    email: yup
      .string()
      .email(i18n.t("errorMessages.validEmail") || "")
      .required(i18n.t("errorMessages.required") || ""),
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
    termsAndConditions: yup
      .bool()
      .oneOf([true], i18n.t("errorMessages.required") || ""),
  });

  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    if (!data.referralCode || data.referralCode === "") {
      delete data.referralCode;
    }
    let res: any = await signUp(data);

    if (res.data?.success) {
      setSuccess({
        userId: res?.data?.data?.userId || null,
        email: res?.data?.data?.email || "",
        success: true,
      });
    } else {
      if (res.error?.data) {
        // handleInputErrors(res.error?.data, setError);
      }
    }
  };
 
  return (
    <form
      className="flex flex-col justify-between lg:justify-center lg:h-full gap-[35px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className="mt-[150px] mb-[30px] lg:mt-[5px]">
          <p className="text-[#ECBE44] text-start lg:text-center text-[20px] font-bold">
            {t("title")}
          </p>
          <p className="text-[#FFFFFF] text-start lg:text-center text-[14px] ">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Input
            error={errors.fullName}
            name="fullName"
            placeholder=""
            register={register}
            title={t("fullName")}
          />
          <Input
            error={errors.email}
            name="email"
            placeholder=""
            register={register}
            title={t("email")}
          />
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
          <div>
            <CheckBox
              error={errors.termsAndConditions}
              label1={t("term1")}
              label2={t("term2")}
              name="termsAndConditions"
              register={register}
              url={ROUTES.termsAndConditions}
              textColor={errors.termsAndConditions ? "red" : "white"}
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
            underline={false}
            onClick={() => {
              navigate(ROUTES.base);
            }}
          />
        </p>
      </div>
    </form>
  );
};

export default SignUpComponent;
