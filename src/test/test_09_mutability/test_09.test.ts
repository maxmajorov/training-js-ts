import { UserType } from "./test_09";

let user_09: UserType = {
  name: "Maxim",
  age: 32,
};

let superman = user_09;

superman.name = "Pavel";

// beforeEach(() => {
//   user_09 = {
//     name: "Maxim",
//     age: 32,
//   };
// });

const changeUserAge = (userObj: UserType) => {
  user_09.age++;
};

const changeUserName = (userObj: UserType, newName: string) => {
  user_09.name = newName;
};

const addUserLocation = (userObj: UserType, city: string) => {
  user_09.location = city;
};

// REFERENCE TEST

test("Mutability test ==> should change user age", () => {
  expect(user_09.age).toBe(32);

  changeUserAge(user_09);
  expect(user_09.age).toBe(33);

  changeUserAge(user_09);
  expect(user_09.age).toBe(34);
});

test("Mutability test ==> should change user name", () => {
  // expect(user_09.name).toBe("Maxim"); //Не пройдет, тк superman присвоено имя Pavel
  // и перезапишется значение name user_09

  changeUserName(user_09, "Olga");

  expect(user_09.name).toBe("Olga");
});

test("Mutability test ==> should add location in user object", () => {
  expect(user_09.location).toBe(undefined);

  addUserLocation(user_09, "Minsk");
  expect(user_09.location).toBe("Minsk");
});
