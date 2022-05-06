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
    <div key={content.id}>
      <h3>{content.header}</h3>
      {content.cardArray.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
};

export default DropdownCard;
