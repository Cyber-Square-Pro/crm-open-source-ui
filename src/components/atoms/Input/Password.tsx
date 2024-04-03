import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

interface Props {
  placeholder: string;
  name: string;
  register: any;
  error: any;
  title: string;
}

export default function Password({
  placeholder,
  name,
  register,
  error,
  title,
}: Props) {
  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-[14px] text-black ml-1 mb-2">{title}</p>
      </div>
      <div className="relative h-[46px]">
        <input
          type={showPassword ? "password" : "text"}
          className={`text-white bg-[#1C1F2C] h-full bg-opacity-80 my-auto border text-start border-primary w-full focus:border-primary focus:outline-none  rounded-[10px] text-sm px-4 py-2.5 inline-flex items-center `}
          placeholder={placeholder}
          {...register(name, { required: true })}
        />
        <div
          className="icon_button absolute right-2 bottom-2 top-[11px] md:top-[10px]"
          onClick={handleClickShowPassword}
        >
          {showPassword ? (
            <VisibilityOff sx={{ color: "white" }} />
          ) : (
            <Visibility sx={{ color: "white" }} />
          )}
        </div>
      </div>
      {error ? (
        <p className="text-[12px] mt-1 ml-1 text-[red]">{error.message}</p>
      ) : (
        <p className=" invisible">a</p>
      )}
    </div>
  );
}
