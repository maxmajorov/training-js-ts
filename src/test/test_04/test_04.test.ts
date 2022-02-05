import {
  cheapCourses,
  coursesFiltered,
  CoursesType,
  mensFiltered,
  mensOlderFifthy,
  tasksFiltered,
  tasksIsDone,
  TasksType,
} from "./test_04";

let mensAges: Array<number>;

beforeEach(() => {
  mensAges = [25, 30, 35, 51, 50, 65, 74, 49];
});

test("Take mans older then 50 years", () => {
  expect(mensAges.length).toBe(8);

  mensOlderFifthy();

  expect(mensFiltered.length).toBe(3);
});

//Стоимость курсов меньше 150$

let courses: Array<CoursesType> = [];

beforeEach(() => {
  courses = [
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
});

test("Should return the cost of courses is up to 150", () => {
  expect(courses.length).toBe(3);

  cheapCourses();

  expect(coursesFiltered.length).toBe(2);
  expect(coursesFiltered.map((el) => el.title).join(", ")).toBe(
    "HTML & CSS, React"
  );
  expect(coursesFiltered.map((el) => el.price).join(", ")).toBe("120, 145");
});

//Done TASKS!!!

let tasks: Array<TasksType>;

beforeEach(() => {
  tasks = [
    { id: 1, task: "Do homework", isDone: true },
    { id: 2, task: "Learning MAP method", isDone: true },
    { id: 3, task: "Lerning Redux", isDone: false },
    { id: 4, task: "Learning HTTP requeries", isDone: false },
  ];
});

test("Should show done tasks", () => {
  expect(tasks.length).toBe(4);

  tasksIsDone();

  expect(tasksFiltered.length).toBe(2);
  expect(tasksFiltered.map((el) => el.task).join(", ")).toBe(
    "Do homework, Learning MAP method"
  );
});
