import { LabelEmpty } from "../../atoms";

interface List {
  label: string;
  value: string;
}

export default function ReviewList({ itemList }: { itemList: List[] }) {
  return (
    <div className="flex flex-col gap-7 mt-[44px] mb-[44px]">
      {itemList.map((item, index) => (
        <LabelEmpty
          label={item.label}
          value={item.value}
          key={`review-list-${item.label}`}
        />
      ))}
    </div>
  );
}
