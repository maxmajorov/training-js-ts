import React, { useMemo, useState } from "react";

export const UseMemoExampleWithReactMemo = () => {
  console.log("Render component");
  const [counter, setCounter] = useState<number>(0);
  const [users, setUsers] = useState<Array<string>>([
    "Max",
    "Olga",
    "Pavel",
    "Karina",
  ]);

  const newArrUsers = useMemo(() => {
    return users.filter((user) => user.toLowerCase().indexOf("l") > -1);
  }, [users]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <button onClick={() => setUsers([...users, "Lincoln"])}>addUser</button>
      <Users users={newArrUsers} />
    </>
  );
};

// Локальный state находится в MemoExample, при изменение counter произойдет
// перерисовка компоненты, котораыя потянет за собой перерисовку как CounterUsers так
// и компоненты Users!!! (Если к примеру у нас огромная таблица, то будут тормоза и
// ресурсы React будут израсходоваться впустую!)

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
