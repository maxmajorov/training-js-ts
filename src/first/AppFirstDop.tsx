import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, selectUsersCount } from "./store/selectors/index";
import { createUser, plusUserCount } from "./store/actions/index";
import { v1 } from "uuid";
import { CustomButton, UsersCountValue } from "./components/index";
import { UsersList } from "./components/UsersList";
import { generateRandomName } from "./utils/index";
import { SetTimeoutType } from "./types/SetTimeoutType";

const DELAY = 500;

export const AppFirstDop = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const usersCount = useSelector(selectUsersCount);
  console.log(usersCount);
  const [isAddNewUser, setIsAddNewUser] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: SetTimeoutType = setTimeout((): void => {
      setIsAddNewUser(false);
    }, DELAY);

    return () => clearTimeout(timeoutId);
  }, [users.length]);

  useEffect(() => {
    if (users.length > 0 && isAddNewUser) {
      dispatch(plusUserCount());
    }
  }, [dispatch, users.length, isAddNewUser]);

  const handleClick = useCallback((): void => {
    dispatch(createUser({ id: v1(), name: generateRandomName() }));

    setIsAddNewUser(true);
  }, [dispatch]);

  return (
    <Fragment>
      <UsersCountValue usersCount={usersCount} />

      <CustomButton
        title="Click Me"
        isButtonDisabled={isAddNewUser}
        onClick={handleClick}
      />

      <UsersList users={users} />
    </Fragment>
  );
};
