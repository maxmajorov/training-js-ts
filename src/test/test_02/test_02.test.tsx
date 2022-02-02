import { CityType } from "./test_02_02";

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
        adress: {
          street: "Novaya",
          number: 345,
        },
      },
      {
        type: "FIRESTATION",
        adress: {
          street: "Staraya",
          number: 35,
        },
      },
      {
        type: "SCHOOL",
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

test("test city should contains 3 houses", () => {
  expect(city.houses.length).toBe(3);

  expect(city.houses[0].adress.number).toBe(10);
  expect(city.houses[1].adress.street.title).toBe("Mira");
  expect(city.houses[2].adress.number).toBe(23);

  expect(city.population).toBe(1000);
});

test("Test city should contains school, hospital and firestation", () => {
  expect(city.govBuildings.length).toBe(3);

  expect(city.govBuildings[1].type).toBe("FIRESTATION");
  expect(city.govBuildings[2].type).toBe("SCHOOL");
  expect(city.govBuildings[1].adress.number).toBe(35);

  expect(city.govBuildings[0].adress.street).toBe("Novaya");
});
