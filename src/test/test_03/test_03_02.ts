import { CityType } from "./../test_02/test_02_02";

export const fireStationBudget = (city: CityType, budget: number) => {
  return city.govBuildings[1].budget > budget;
};

export const changeSchoolBudget = (city: CityType, budget: number) => {
  city.govBuildings[2].budget += budget;
};

export const schoollBudgetIs = (city: CityType, budget: number) => {
  return city.govBuildings[2].budget > budget;
};

export const messageToCitizens = (city: CityType) => {
  return `Hello citizen of ${city.title}. All of them (${city.population} mans) I wish a Marry Christmas & Happy New Year!`;
};
