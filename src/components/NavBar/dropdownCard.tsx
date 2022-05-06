import React, { FC } from "react";

type ItemContent = {
  name: string;
  status: string;
};

interface InputFromNavHover {
  id: number;
  header: string;
  cardArray: Array<ItemContent>;
}

interface InputFromNavHoverProps {
  content: InputFromNavHover;
}

export const DropdownCard: FC<InputFromNavHoverProps> = ({
  content,
}): JSX.Element => {
  return (
    <div className="w-1/4 h-full pt-10" key={content.id}>
      <p style={{fontSize: '13px'}}className="text-gray-400 font-bold leading-10">{content.header}</p>
      {content.cardArray.map((item) => {
        return <p style={{fontSize: '1.5rem'}} className="font-bold leading-10">{item.name}</p>;
      })}
    </div>
  );
};

export default DropdownCard;
