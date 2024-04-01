interface Props {
  placeholder: string;
  name: string;
  register: any;
  error: any;
  title: string;
  type?: string;
  className?: string;
}

export default function InputArea({
  placeholder,
  name,
  register,
  error,
  title,
  type = "text",
  className,
}: Props) {
  return (
    <div className={className}>
      {!!title && (
        <div className="flex justify-between ">
          <p className="text-[14px] text-white ml-1 mb-2">{title}</p>
        </div>
      )}
      <TextArea
        placeholder={placeholder}
        type={type}
        {...register(name, { required: true })}
      />
      {error && (
        <p className="text-[12px] mt-1 ml-1 text-[red]">{error.message}</p>
      )}
    </div>
  );
}

export function TextArea(props: any) {
  return (
    <textarea
      className={`text-white bg-transparent border-2 text-start border-gray-400 w-full focus:border-primary focus:outline-none rounded-[10px] text-sm px-4 py-2.5 inline-flex items-center `}
      {...props}
    />
  );
}
