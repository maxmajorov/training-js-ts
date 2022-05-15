import { UserType } from "../../types/UserType";

export const plusUserCount = () =>
  ({
    type: "PLUS_USER_COUNT",
  } as const);

type createUserACType = {
  type: "CREATE_USER";
  payload: UserType;
};

export const createUser = (user: UserType): createUserACType => ({
  type: "CREATE_USER",
  payload: user,
});
