import { UserType } from "../test_02/test_02";

export const addSkillToUser = (user: UserType, skill: string, rank: number) => {
  user.technolodgies.push({
    id: new Date().getTime(),
    item: skill,
    rank: rank,
  });
};

export const userLocation = (user: UserType, city: string) => {
  return user.location.adress.city === city ? true : false;
};

export const userMustBeActive = (user: UserType) => {
  user.isActive = true;
};
