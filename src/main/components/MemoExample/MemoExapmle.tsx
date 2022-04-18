import React, { useState } from "react";

export const MemoExample = () => {
  const [counter, setCounter] = useState<number>(0);
  const [users, setUsers] = useState<Array<string>>([
    "Max",
    "Olga",
    "Pavel",
    "Karina",
  ]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setUsers([...users, "Dasha"])}>addUser</button>
      <CounterUsers counter={counter} />
      <Users users={users} />
      <div>
        {new Date().getDate() +
          " " +
          new Date().getHours() +
          "." +
          new Date().getMinutes()}
      </div>
    </>
  );
};

// Локальный state находится в MemoExample, при изменение counter произойдет
// перерисовка компоненты, котораыя потянет за собой перерисовку как CounterUsers так
// и компоненты Users!!! (Если к примеру у нас огромная таблица, то будут тормоза и
// ресурсы React будут израсходоваться впустую!)

const CountersWithoutUpdatingIfNotChanging = (props: { counter: number }) => {
  console.log("COUNTER");
  return <div>{props.counter}</div>;
};

const UsersWithoutUpdatingIfNotChanging = (props: { users: Array<string> }) => {
  console.log("USERS");
  return (
    <div>
      {props.users.map((el, ind) => (
        <div key={ind}>{el}</div>
      ))}
    </div>
  );
};

// Контейнерная компонента, не будет перерисовываться если не будут приходить новые (измененные props)
const Users = React.memo(UsersWithoutUpdatingIfNotChanging);
const CounterUsers = React.memo(CountersWithoutUpdatingIfNotChanging);
