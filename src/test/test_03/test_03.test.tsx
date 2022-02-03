import { UserType } from "../test_02/test_02";
import { addSkillToUser, userLocation, userMustBeActive } from "./test_03";

let user: UserType;
beforeEach(() => {
  user = {
    id: 1,
    name: "Maxim",
    age: 32,
    isActive: false,
    location: {
      country: "Belarus",
      adress: {
        district: "Minskiy",
        region: "Minskiy",
        city: "Minsk",
        street: "Ybileynaya",
      },
    },
    technolodgies: [
      {
        id: 1,
        item: "HTML",
        rank: 5,
      },
      {
        id: 2,
        item: "CSS",
        rank: 5,
      },
      {
        id: 3,
        item: "JS/TS",
        rank: 4,
      },
      {
        id: 4,
        item: "React/Redux",
        rank: 3,
      },
    ],
  };
});

test("New skill should be add to student", () => {
  expect(user.technolodgies.length).toBe(4);

  addSkillToUser(user, "JEST", 4);

  expect(user.technolodgies.length).toBe(5);
  // expect(user.technolodgies[4].item).toBe("JEST");
  // expect(user.technolodgies[4].id).toBeDefined(); //дб определен
});

//Все работает но непонятно чего подсвечивает

test("User from Minsk?", () => {
  let res_1 = userLocation(user, "Brest");
  let res_2 = userLocation(user, "Minsk");

  expect(res_1).toBe(false);
  expect(res_2).toBe(true);
});

test("User must be active", () => {
  expect(user.isActive).toBe(false);

  userMustBeActive(user);

  expect(user.isActive).toBe(true);
});
