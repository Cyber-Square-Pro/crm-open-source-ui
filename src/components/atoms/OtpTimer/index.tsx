import React, { useState, useEffect } from "react";
import TextButton from "../buttons/TextButton";
import { useTranslation } from "react-i18next";

interface OtpTimerProps {
  label: string;
  timeInSeconds: number;
  onTimerComplete: () => void;
  onResend: () => void;
  isLoading: boolean;
}

const OtpTimer: React.FC<OtpTimerProps> = ({
  label,
  timeInSeconds,
  onTimerComplete,
  onResend,
  isLoading,
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "pages.verifyOtp",
  });
  const [timer, setTimer] = useState(timeInSeconds);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      onTimerComplete();
    }

    return () => clearInterval(intervalId);
  }, [timer, onTimerComplete]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  const handleResend = async () => {
    await onResend();
    setTimer(timeInSeconds);
  };

  return (
    <>
      <div>
        {timer === 0 ? (
          <>
            <TextButton
              label={t("resendOtp")}
              onClick={handleResend}
              isLoading={isLoading}
            />
          </>
        ) : (
          <>
            <span>{label}</span> &nbsp;
            <span>{`${minutes.toString().padStart(2, "0")}:${seconds
              .toString()
              .padStart(2, "0")}`}</span>
          </>
        )}
      </div>
    </>
  );
};

export default OtpTimer;
