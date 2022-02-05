import React from "react";

export type ManType = {
  name: string;
  age: number;
  stack: Array<string>;
  adress: {
    country: string;
  };
};

type PropsType = {
  title: string;
  man: ManType;
};

export const ManComponent: React.FC<PropsType> = ({ title, man }) => {
  // let { title } = props;
  // let { name, age } = props.man;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {man.name}, {man.age}
      </div>
    </div>
  );
};

// Можно создать переменные из пропсов отдельно
// let { title } = props;
// let { name, age } = props.man;

//Можно сразу вместо props написать (props) ===>>> ({ title, man })

//Можно деструктурировать с учетом вложенности, но можно запутаться
//  let { title, man: { name, age } }

//Также через REST(остаточные параматеры). Т.е когда много ключей приходит в props,
// чтобы не нагромождать можно использовать REST оператор
// (props) ===>>> ({ title, man, ...props }) - остальные параметры ост в propss
// Деструктуризация массива не актуальнь, тк элементов мб множество, но актуально например
// для хуков (useState - возвращает массив ====>>> [message, setState])

// let arr = [1, 2, 3, 4]
// let [a, b, ...rest] = arr ==>> a = 1, b = 2, rest = [3, 4]
// let [, b, ...rest] = arr ==>> b = 2, rest = [3, 4]
// let [,, ...rest] = arr ==>> rest = [3, 4]
// let [a, ...rest, b] = arr ==>> a = 1, rest = [2, 3] b = 4
