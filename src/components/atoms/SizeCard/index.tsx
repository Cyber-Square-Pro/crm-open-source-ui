interface CardLabels {
  label: string;
  name: string | number;
  width?: boolean;
}

interface Props {
  labels: CardLabels[];
  items: any;
}

export default function SizeCard(props: Props) {
  const { labels = [], items = [] } = props;
  return (
    <div className="w-full flex justify-between">
      {labels.map((item) => (
        <CardItem
          label={item.label}
          value={
            (items || [])?.find((obj: any) => obj?.sizeId === item?.name)
              ?.quantity || ""
          }
          width={item.width}
          key={`size-list-${item.label}`}
        />
      ))}
    </div>
  );
}

interface CardElem {
  label: string;
  value: string | number;
  width?: boolean;
}

export function CardItem({ label, value, width }: CardElem) {
  return (
    <div
      className={`text-white h-[46px] ${
        !!width ? "w-[50px] md:w-[65px]" : "w-[35px] md:w-[46px]"
      }`}
    >
      <div className="bg-[#262a37c4] h-full w-full text-sm flex justify-center items-center rounded-[10px] border border-primary">
        {label}
      </div>
      {!!value && value !== 0 ? (
        <span className="pt-3 w-full flex justify-center">{value}</span>
      ) : null}
    </div>
  );
}
