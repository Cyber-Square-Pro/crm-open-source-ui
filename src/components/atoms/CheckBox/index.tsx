import { Link } from "react-router-dom";

interface Props {
  name: string;
  register: any;
  error: any;
  label1: string;
  label2: string;
  url?: string;
  textColor?: string;
}

export default function CheckBox({
  name,
  register,
  error,
  label1 = "Remember me",
  label2,
  url,
  textColor = "#FFFFFF",
}: Props) {
  return (
    <div>
      <div className="flex items-center">
        <input
          className="mx-2  accent-yellow-500"
          type="checkbox"
          id="remember"
          {...register(name, { required: true })}
        />
        <p className="text-start">
          <span className={`text-[14px]  text-[${textColor}]`}>{label1}</span>
          &nbsp;
          {url ? (
            <Link to={url} target="_blank">
              <span className=" text-primary underline text-[14px] cursor-pointer ">
                {label2}
              </span>
            </Link>
          ) : (
            <span className=" text-primary underline text-[14px]  ">
              {label2}
            </span>
          )}
        </p>
      </div>
      {/* {error && (
        <p className="text-[12px] mt-1 ml-1 text-[red] text-start">{error.message}</p>
      )} */}
    </div>
  );
}
