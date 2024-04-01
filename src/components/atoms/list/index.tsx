import React from "react";
import { useTranslation } from "react-i18next";

const List: React.FC<{ title: string; data: any[] }> = ({ title, data }) => {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "pages.myNft.productDetails.deliveryDetails",
  });

  return (
    <div>
      <p className="text-primary text-[26px] lg:text-[32px] font-bold px-[20px] ">{title}</p>
      <ul className="list-disc px-[30px] pt-[15px] flex flex-col gap-1">
        {data.map((item: string) => (
          <li className="text-white text-[16px]" key={item}>
            {item}
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default List;
