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
