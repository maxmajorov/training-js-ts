const mensAges: Array<number> = [25, 30, 35, 51, 50, 65, 74, 49];

export const mensOlderFifthy = () => {
  mensFiltered = mensAges.filter((el) => el > 50);
};

export let mensFiltered: Array<number> = [];

export type CoursesType = {
  title: string;
  price: number;
};

const courses: Array<CoursesType> = [
  {
    title: "HTML & CSS",
    price: 120,
  },
  {
    title: "React",
    price: 145,
  },
  {
    title: "JS/TS",
    price: 200,
  },
];

export const cheapCourses = () => {
  coursesFiltered = courses.filter((el) => el.price < 150);
};

export let coursesFiltered: Array<CoursesType> = [];

//TASKS

export type TasksType = {
  id: number;
  task: string;
  isDone: boolean;
};

const tasks: Array<TasksType> = [
  { id: 1, task: "Do homework", isDone: true },
  { id: 2, task: "Learning MAP method", isDone: true },
  { id: 3, task: "Lerning Redux", isDone: false },
  { id: 4, task: "Learning HTTP requeries", isDone: false },
];

export const tasksIsDone = () => {
  tasksFiltered = tasks.filter((el) => el.isDone === true);
};

export let tasksFiltered: Array<TasksType> = [];
