/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const mostDrawnNumbersQuery = `SELECT numero as number, count(*) as frequency FROM (
    select
    bola1 as numero from concurso_lotofacil
    union all
    SELECT bola2 as numero2 from concurso_lotofacil
    union all
    SELECT bola3 as numero3 from concurso_lotofacil
    union all
    SELECT bola4 as numero4 from concurso_lotofacil
    union all
    SELECT bola5 as numero5 from concurso_lotofacil
    union all
    SELECT bola6 as numero6 from concurso_lotofacil
    union all
    SELECT bola7 as numero7 from concurso_lotofacil
    union all
    SELECT bola8 as numero8 from concurso_lotofacil
    union all
    SELECT bola9 as numero9 from concurso_lotofacil
    union all
    SELECT bola10 as numero10 from concurso_lotofacil
    union all
    SELECT bola11 as numero11 from concurso_lotofacil
    union all
    SELECT bola12 as numero12 from concurso_lotofacil
    union all
    SELECT bola13 as numero13 from concurso_lotofacil
    union all
    SELECT bola14 as numero14 from concurso_lotofacil
    union all
    SELECT bola15 as numero15 from concurso_lotofacil
    ) d
    GROUP BY numero
    ORDER BY frequency DESC;`;

export const getCompanionNumbersQuery = (number: number) => `
WITH number_occurrences AS (
  SELECT
    numero as number,
    count(*) as frequency
  FROM (
    SELECT bola1 as numero FROM concurso_lotofacil WHERE bola1 != ${number}
    UNION ALL SELECT bola2 FROM concurso_lotofacil WHERE bola2 != ${number}
    UNION ALL SELECT bola3 FROM concurso_lotofacil WHERE bola3 != ${number}
    UNION ALL SELECT bola4 FROM concurso_lotofacil WHERE bola4 != ${number}
    UNION ALL SELECT bola5 FROM concurso_lotofacil WHERE bola5 != ${number}
    UNION ALL SELECT bola6 FROM concurso_lotofacil WHERE bola6 != ${number}
    UNION ALL SELECT bola7 FROM concurso_lotofacil WHERE bola7 != ${number}
    UNION ALL SELECT bola8 FROM concurso_lotofacil WHERE bola8 != ${number}
    UNION ALL SELECT bola9 FROM concurso_lotofacil WHERE bola9 != ${number}
    UNION ALL SELECT bola10 FROM concurso_lotofacil WHERE bola10 != ${number}
    UNION ALL SELECT bola11 FROM concurso_lotofacil WHERE bola11 != ${number}
    UNION ALL SELECT bola12 FROM concurso_lotofacil WHERE bola12 != ${number}
    UNION ALL SELECT bola13 FROM concurso_lotofacil WHERE bola13 != ${number}
    UNION ALL SELECT bola14 FROM concurso_lotofacil WHERE bola14 != ${number}
    UNION ALL SELECT bola15 FROM concurso_lotofacil WHERE bola15 != ${number}
  ) numbers
  WHERE EXISTS (
    SELECT 1 FROM concurso_lotofacil c
    WHERE (c.bola1 = ${number} OR c.bola2 = ${number} OR c.bola3 = ${number} 
      OR c.bola4 = ${number} OR c.bola5 = ${number} OR c.bola6 = ${number} 
      OR c.bola7 = ${number} OR c.bola8 = ${number} OR c.bola9 = ${number} 
      OR c.bola10 = ${number} OR c.bola11 = ${number} OR c.bola12 = ${number} 
      OR c.bola13 = ${number} OR c.bola14 = ${number} OR c.bola15 = ${number})
    AND (c.bola1 = numbers.numero OR c.bola2 = numbers.numero OR c.bola3 = numbers.numero 
      OR c.bola4 = numbers.numero OR c.bola5 = numbers.numero OR c.bola6 = numbers.numero 
      OR c.bola7 = numbers.numero OR c.bola8 = numbers.numero OR c.bola9 = numbers.numero 
      OR c.bola10 = numbers.numero OR c.bola11 = numbers.numero OR c.bola12 = numbers.numero 
      OR c.bola13 = numbers.numero OR c.bola14 = numbers.numero OR c.bola15 = numbers.numero)
  )
  GROUP BY numero
)
SELECT number, frequency
FROM number_occurrences
ORDER BY frequency DESC
LIMIT 5;`;
