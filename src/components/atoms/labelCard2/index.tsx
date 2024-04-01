interface Props {
  label1: string;
  label2?: string;
  value1?: string | any;
  value2?: string | any;
}

export default function LabelCardMultipleRow({
  label1,
  value1,
  label2,
  value2,
}: Props) {
  return (
    <div
      className={`flex text-white text-sm  border rounded-[10px] border-primary bg-background w-full  `}
    >
      <div className="flex basis-2/12 flex-col justify-between gap-2 border-r border-primary p-5 min-w-[30%]">
        <div className="">{label1}</div>
        <div className="">{label2}</div>
      </div>
      <div className="flex basis-10/12 flex-col gap-2 p-5 ">
        <div className="">{value1}</div>
        <div className="">{value2}</div>
      </div>
    </div>
  );
}
