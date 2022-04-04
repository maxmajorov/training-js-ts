import React from "react";

export type AccordionPropsType = {
  title: string;
  setAccordion: (collapsed: boolean) => void;
  collapsed?: boolean;
};

//true ===>>> свернутое

const ControlledAccordion: React.FC<AccordionPropsType> = (props) => {
  return (
    <div>
      <h3 onClick={() => props.setAccordion(!props.collapsed)}>
        {props.title}
      </h3>
      {props.collapsed ? "" : <AccordionBody />}
    </div>
  );
};

function AccordionBody() {
  return (
    <ul>
      <li>CallBack</li>
      <li>Components</li>
      <li>useState</li>
    </ul>
  );
}

export default ControlledAccordion;
