import React from "react";

type ItemType = {
  id: number;
  title: string;
};

export type AccordionPropsType = {
  accordItems: ItemType[];
  setCollapsed: () => void;
  collapsed: boolean;
};

//true ===>>> свернутое

export const ControlledAccordion: React.FC<AccordionPropsType> = ({
  accordItems,
  collapsed,
  setCollapsed,
}) => {
  const collapsedHandler = () => {
    setCollapsed();
  };

  return (
    <div>
      <h3 onClick={collapsedHandler}>Accordion</h3>
      {!collapsed ? <AccordionBody accordItems={accordItems} /> : ""}
    </div>
  );
};

type AccordionBodyPropsType = {
  accordItems: ItemType[];
};

const AccordionBody: React.FC<AccordionBodyPropsType> = ({ accordItems }) => {
  return (
    <ul>
      {accordItems.map((el) => (
        <li key={el.id} onClick={() => alert(`click ${el.id} item`)}>
          {el.title}
        </li>
      ))}
    </ul>
  );
};
