import { UserType } from "../types/UserType";
import React from "react";
import { User } from "../components/User";

type UserPropsType = {
  users: UserType[];
};

export const UsersList: React.FC<UserPropsType> = React.memo(({ users }) => {
  console.log(users);
  return (
    <>
      {users.map(({ id, name }) => (
        <User key={id} id={id} name={name} />
      ))}
    </>
  );
});
