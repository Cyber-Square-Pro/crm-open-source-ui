import React from "react";

const List: React.FC<{ title: string; data: any[] }> = ({ title, data }) => {
  

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
