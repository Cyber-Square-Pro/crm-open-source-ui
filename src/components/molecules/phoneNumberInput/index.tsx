import { useEffect, useState } from "react";
import { Data, getCountryByCode } from "../../atoms/countrySelect";

interface Props {
  placeholder: string;
  name: string;
  register: any;
  errors: any;
  title: string;
  type?: string;
  className?: string;
  setValue: any;
  code: string;
  background?: string;
  textColor?: string;
  labelColor?: string;
  defaultCodeValue?: string;
}

const countries = [
  { name: "United States", code: "+1" },
  { name: "Canada", code: "+1" },
  { name: "Mexico", code: "+52" },
  { name: "United Kingdom", code: "+44" },
  { name: "France", code: "+33" },
  // ...add more countries as needed
];

export default function PhoneNumberInput({
  placeholder,
  name,
  register,
  errors,
  title,
  type = "text",
  className,
  setValue,
  code,
  background = "#1C1F2C",
  textColor = "white",
  labelColor = "#000",
  defaultCodeValue,
}: Props) {
  const [codeValue, setCodeValue] =
    useState<Data | undefined | null>(undefined);

  useEffect(() => {
    if (defaultCodeValue) {
      setCodeValue(getCountryByCode(defaultCodeValue));
    }
  }, [defaultCodeValue]);

  return (
    <div className={className}>
      {!!title && (
        <div className="flex justify-between ">
          <p className={`text-[14px] text-[${labelColor}] ml-1 mb-2`}>
            {title}
          </p>
        </div>
      )}
      <div className="grid grid-cols-4 gap-2 lg:gap-12  ">
        <div className="col-span-4 lg:col-span-1">
          {errors[code] ? (
            <p className="text-[12px] mt-1 ml-1 text-[red]">
              {errors[code].message}
            </p>
          ) : (
            <p className=" invisible">a</p>
          )}
        </div>
        <div className="col-span-4 lg:col-span-3">
          <input
            className={` text-[${textColor}] bg-[${background}] bg-opacity-80 border text-start border-primary w-full focus:border-primary focus:outline-none  rounded-[10px] text-sm px-4 py-3.5 inline-flex items-center `}
            placeholder={placeholder}
            type={type}
            {...register(name, { required: true })}
          />
          {errors[name] ? (
            <p className="text-[12px] mt-1 ml-1 text-[red]">
              {errors[name].message}
            </p>
          ) : (
            <p className=" invisible">a</p>
          )}
        </div>
      </div>
    </div>
  );
}
