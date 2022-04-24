import React, { useMemo, useState } from "react";

export const UseMemoExample = () => {
  const [fact_1, setFact_1] = useState<number>(0);
  const [fact_2, setFact_2] = useState<number>(0);

  const result_1 = (fact_1: number): number => {
    let fake: number = 0; // Создадим фэйковую переменную и операцию чтоб нагрузить комп вычислениями

    while (fake < 10000000) {
      fake++;
      const fake2: number = Math.random();
    }

    if (fact_1 === 0) return 1;
    return fact_1 * result_1(fact_1 - 1);
  };

  const memoizedResult_1 = useMemo(() => result_1(fact_1), [fact_1]); // второй параметр ==> перечисляем зависимости

  // При изменении инпута как первого так и второго будут глюки, несмотря на то что во второй
  // функции факториала такой дичи нет. Но при изменении state во втором инпуте все равно будет
  // происходит пересчет всех функции заново.

  const result_2 = (fact_2: number): number => {
    if (fact_2 === 0) return 1;
    return fact_2 * result_2(fact_2 - 1);
  };

  return (
    <>
      <input
        value={fact_1}
        onChange={(e) => setFact_1(+e.currentTarget.value)}
      />
      <input
        value={fact_2}
        onChange={(e) => setFact_2(+e.currentTarget.value)}
      />
      <div>Result A : {memoizedResult_1}</div>
      <div>Result B : {result_2(fact_2)}</div>
    </>
  );
};
