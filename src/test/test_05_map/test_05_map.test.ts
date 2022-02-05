import { DevListType, devTransform, newDevList } from "./test_05_map";

let devList: Array<DevListType>;

beforeEach(() => {
  devList = [
    { id: 1, name: "Maxim Predko", age: 32 },
    { id: 2, name: "Olga Luksha", age: 40 },
    { id: 3, name: "Oleg Shabanov", age: 34 },
    { id: 4, name: "Pavel Predko", age: 6 },
  ];
});

test("Maxim has last name Predko?", () => {
  expect(devList[0].name).toBe(devList[0].id === 1 ? devList[0].name : "");

  devTransform();

  const ageThirty = () => {
    ageFiltered = newDevList.filter((el) => el.age < 30);
  };
  let ageFiltered = [];
  ageThirty();

  expect(newDevList[0].firstName).toBe("Maxim");

  expect(ageFiltered.length).toBe(1);
  // expect();
});
