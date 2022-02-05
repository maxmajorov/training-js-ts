export type DevListType = {
  id: number;
  name: string;
  age: number;
};

const devList: Array<DevListType> = [
  { id: 1, name: "Maxim Predko", age: 32 },
  { id: 2, name: "Olga Luksha", age: 40 },
  { id: 3, name: "Oleg Shabanov", age: 34 },
  { id: 4, name: "Pavel Predko", age: 6 },
];

export const devTransform = () => {
  newDevList = devList.map((el) => {
    return {
      stack: ["HTML", "CSS", "JS/TS", "React"],
      firstName: el.name.split(" ")[0],
      lastName: el.name.split(" ")[1],
      age: el.age,
    };
  });
};

type NewDevListType = {
  stack: Array<string>;
  firstName: string;
  lastName: string;
  age: number;
};

export let newDevList: Array<NewDevListType> = [];

// {
//   stack: ['h', 's'],
//   firstName: ''
//   last: ''
//   age: number
// }

const greetingMessage = devList.map(
  (el) => `Hello ${el.name.split(" ")[0]}! I'm glad to see you hear!`
);

// greetingMessage.forEach(el => alert(el));
