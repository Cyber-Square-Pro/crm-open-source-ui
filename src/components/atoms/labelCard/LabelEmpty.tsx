import LabelCard from ".";

interface Props {
  label: string;
  value?: string | any;
}

export default function LabelEmpty({ label, value }: Props) {
  if (!!!value) {
    return (
      <div className="border border-primary rounded-[10px] w-full text-white">
        <div className="h-[46px] flex items-center px-4 text-base bg-[#262a37c4] rounded-[10px]">
          {label}
        </div>
      </div>
    );
  }
  return <LabelCard label={label} value={value} />;
}
