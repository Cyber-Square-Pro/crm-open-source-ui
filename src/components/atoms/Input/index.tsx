export interface InputProps {
  placeholder: string;
  name: string;
  register: any;
  error: any;
  title: string;
  hideLabel?: boolean;
  type?: string;
  className?: string;
  background?: string;
  textColor?: string;
  labelColor?: string;
  value?: string;
  disabled?: boolean;
  customVal?: any;
  inputProps?: any;
  icon?: any;
  align?: string
}

export default function Input({
  placeholder,
  name,
  register,
  error,
  title,
  hideLabel = true,
  type = "text",
  className,
  background = "#1C1F2C",
  textColor = "white",
  labelColor = "white",
  value,
  disabled = false,
  customVal = {},
  inputProps = {},
  align="start",
  icon = null,
}: InputProps) {
  return (
    <div className={className}>
      {title ? (
        <div className="flex justify-between ">
          <p className={`text-[14px] text-[${labelColor}] ml-1 mb-2`}>
            {title}
          </p>
        </div>
      ) : (
        hideLabel && (
          <div className="flex justify-between invisible">
            <p className={`text-[14px] text-[${labelColor}] ml-1 mb-2`}>.</p>
          </div>
        )
      )}
      <div
        className={`border text-start border-primary w-full rounded-[10px] text-sm inline-flex items-center`}
      >
        <input
          className={`w-full focus:outline-none focus:border-none text-[${textColor}] bg-[${background}] bg-opacity-80 px-4 py-3 input_field rounded-[10px] text-${align}`}
          placeholder={placeholder}
          type={type}
          {...register(
            name,
            customVal
            // { required: true }
          )}
          value={value}
          disabled={disabled}
          {...inputProps}
        />
        {icon && <div className="pl-[0px] pr-[10px]">{icon}</div>}
      </div>
      {error ? (
        <p className="text-[12px] mt-1 ml-1 text-[red]">{error.message}</p>
      ) : (
        hideLabel && <p className=" invisible">a</p>
      )}
    </div>
  );
}
