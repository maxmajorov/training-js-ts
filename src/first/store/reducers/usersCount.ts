import { plusUserCount } from "../actions/users";

const initState = {
  count: 0,
};

type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof plusUserCount>;

export const usersCountReducer = (
  state: InitStateType = initState,
  action: ActionsType
): InitStateType => {
  switch (action.type) {
    case "PLUS_USER_COUNT":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
