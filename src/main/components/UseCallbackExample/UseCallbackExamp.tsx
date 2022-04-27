import React, { useCallback, useMemo, useState } from "react";

export const UseCallbackExample = () => {
  console.log("Render Container component");
  const [books, setBooks] = useState<Array<string>>([
    "JS",
    "TS",
    "React",
    "Redux",
  ]);
  const [counter, setCounter] = useState<number>(0);

  const newArrBooks = useMemo(() => {
    return books.filter((user) => user.toLowerCase().indexOf("s") > -1);
  }, [books]);

  const memoizedCallbackForSetBook = useCallback(
    (newBook: string) => setBooks([...books, newBook]),
    [books]
  );

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter}
      <Books books={newArrBooks} addBooks={memoizedCallbackForSetBook} />
    </>
  );
};

// Локальный state находится в MemoExample, при изменение counter произойдет
// перерисовка компоненты, котораыя потянет за собой перерисовку как CounterUsers так
// и компоненты Users!!! (Если к примеру у нас огромная таблица, то будут тормоза и
// ресурсы React будут израсходоваться впустую!)

const BooksWithoutUpdatingIfNotChanging = (props: {
  books: Array<string>;
  addBooks: (newBook: string) => void;
}) => {
  console.log("Render BOOKS");
  return (
    <div>
      {props.books.map((el, ind) => (
        <div key={ind}>{el}</div>
      ))}
      <button onClick={() => props.addBooks("HTML & CSS")}>addBook</button>
    </div>
  );
};

// Контейнерная омпонента, не будет перерисовываться если не будут приходить новые (измененные props)
const Books = React.memo(BooksWithoutUpdatingIfNotChanging);
