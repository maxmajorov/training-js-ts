import React, { useReducer, useState } from "react";

//true ===>>> свернутое
// useReducer

const TOGGLE_COLLAPSE = "TOGGLE-COLLAPSE";

type ActionType = {
  type: string;
};

type StateType = {
  collapse: boolean;
};

const collapseActionCreator = () => ({
  type: TOGGLE_COLLAPSE,
});

const initialState = { collapse: true };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case TOGGLE_COLLAPSE: {
      const stateCopy = {
        ...state,
        collapse: !state.collapse, //Правило иммутабельности
      };
      console.log(stateCopy);
      return stateCopy;
    }

    default: {
      return state;
      // throw new Error("Wrong action type"); //ИЛИ ГЕНЕРИРУЕМ ОШИБКУ
    }
  }
};

const UncontrolledAccordion = () => {
  // const [collapse, setCollapse] = useState(true);
  const [collapse, dispatch] = useReducer(reducer, initialState);

  console.log("hook", collapse);

  const onClickCollapsedHandler = () => {
    dispatch(collapseActionCreator());
  };

  return (
    <div onClick={onClickCollapsedHandler}>
      <h3>===Uncontrolled Accardion===</h3>
      {!collapse.collapse ? (
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Redux</li>
        </ul>
      ) : null}
    </div>
  );
};

export default UncontrolledAccordion;
