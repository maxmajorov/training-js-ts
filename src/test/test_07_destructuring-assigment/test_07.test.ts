import { ManType } from "./ManComponent";

export let manProps: ManType = {
  name: "Maxim",
  age: 32,
  stack: ["HTML", "CSS", "TS"],
  adress: {
    country: "Belarus",
  },
};

// beforeEach(() => {
//   manProps = {
//     name: "Maxim",
//     age: 32,
//     stack: ["HTML", "CSS", "TS"],
//     adress: {
//       country: "Belarus",
//     },
//   };
// });

// test("Destructuring", () => {
//   let { name, age } = manProps;

//   expect(name).toBe("Maxim");
//   expect(age).toBe(32);
// });
