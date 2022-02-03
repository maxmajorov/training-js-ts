import { CityType } from "../test_02/test_02_02";
import {
  changeSchoolBudget,
  fireStationBudget,
  messageToCitizens,
  schoollBudgetIs,
} from "./test_03_02";

let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        buildedAt: 2000,
        repaired: true,
        adress: {
          number: 10,
          street: {
            title: "Syvorova",
          },
        },
      },
      {
        buildedAt: 2006,
        repaired: true,
        adress: {
          number: 15,
          street: {
            title: "Mira",
          },
        },
      },
      {
        buildedAt: 2012,
        repaired: true,
        adress: {
          number: 23,
          street: {
            title: "Lenina",
          },
        },
      },
    ],
    govBuildings: [
      {
        type: "HOSPITAL",
        budget: 1000,
        adress: {
          street: "Novaya",
          number: 345,
        },
      },
      {
        type: "FIRESTATION",
        budget: 2000,
        adress: {
          street: "Staraya",
          number: 35,
        },
      },
      {
        type: "SCHOOL",
        budget: 1500,
        adress: {
          street: "Nezavisimosti",
          number: 45,
        },
      },
    ],
    population: 1000,
  };
});

//Создаем тип CityType
//Заполняем объект city чтобы прошли тесты

test("Firesation's budget > 2000$", () => {
  let res_1 = fireStationBudget(city, 3000);
  let res_2 = fireStationBudget(city, 1800);

  expect(res_1).toBe(false);
  expect(res_2).toBe(true);
});

test("Change Scholl's budget", () => {
  changeSchoolBudget(city, 3500);

  expect(city.govBuildings[2].budget).toBe(5000);

  // Проверяем на < >
  let res_1 = schoollBudgetIs(city, 4000);

  expect(res_1).toBe(true);

  changeSchoolBudget(city, 2500); //Прибавляем второй раз

  expect(city.govBuildings[2].budget).toBe(7500);

  // Проверяем < > после второго прибавления
  let res_2 = schoollBudgetIs(city, 8000);

  expect(res_2).toBe(false);
});

test("Greeting message to citizens", () => {
  let message = messageToCitizens(city);

  expect(message).toBe(
    "Hello citizen of New York. All of them (1000 mans) I wish a Marry Christmas & Happy New Year!"
  );
});
