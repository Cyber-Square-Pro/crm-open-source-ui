import { InputProps } from ".";
import LabelEmpty from "../labelCard/LabelEmpty";

interface Props extends InputProps {
  opacity?: number;
  onClick?: any;
  pattern?: string;
}

export default function LabelInput({
  placeholder,
  name,
  register,
  error,
  title,
  type = "text",
  className = "",
  value,
  disabled = false,
  onClick = () => {},
  pattern=""
}: Props) {
  if (disabled && !!!value) {
    return (
      <div onClick={onClick} className="w-full cursor-pointer">
        <LabelEmpty label={title} value={value} />
        {error && (
          <p className="text-[12px] mt-1 ml-1 text-[red]">{error.message}</p>
        )}
      </div>
    );
  }
  return (
    <div className={`w-full ${className}`}>
      <div
        className={`flex border rounded-[10px] border-primary w-full h-[46px] ${className}`}
      >
        <div className="flex-none h-full border-r border-primary rounded-l-[10px] p-2.5 flex items-center justify-center gap-0 bg-[#262a37c4] w-24 md:w-[145px] text-white">
          {title}
        </div>
        <div className="grow text-sm items-center bg-transparent text-white w-full">
          <input
            className={`bg-transparent h-full text-start focus:outline-none rounded-r-[8px] text-base inline-flex items-center w-full px-3`}
            placeholder={placeholder}
            type={type}
            {...register(name)}
            value={value}
            disabled={disabled}
            pattern
          />
        </div>
      </div>

      {error && (
        <p className="text-[12px] mt-1 ml-1 text-[red]">{error.message}</p>
      )}
    </div>
  );
}
