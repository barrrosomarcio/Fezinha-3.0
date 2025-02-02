import { ConcursoLotoFacilEntity } from 'src/lotofacil/domain/lotofacil.entity';
import { formataStringData } from '../formatters/date';
import { realToDecimal } from '../formatters/currency';

export class RawResult {
  Concurso: any;
  ['Data Sorteio']: any;
  Bola1: any;
  Bola2: any;
  Bola3: any;
  Bola4: any;
  Bola5: any;
  Bola6: any;
  Bola7: any;
  Bola8: any;
  Bola9: any;
  Bola10: any;
  Bola11: any;
  Bola12: any;
  Bola13: any;
  Bola14: any;
  Bola15: any;
  ['Ganhadores 15 acertos']: any;
  ['Cidade / UF']: any;
  ['Rateio 15 acertos']: any;
  ['Ganhadores 14 acertos']: any;
  ['Rateio 14 acertos']: any;
  ['Ganhadores 13 acertos']: any;
  ['Rateio 13 acertos']: any;
  ['Ganhadores 12 acertos']: any;
  ['Rateio 12 acertos']: any;
  ['Ganhadores 11 acertos']: any;
  ['Rateio 11 acertos']: any;
  ['Acumulado 15 acertos']: any;
  ['Arrecadacao Total']: any;
  ['Estimativa Prêmio']: any;
  ['Acumulado sorteio especial Lotofácil da Independência']: any;
  Observação: any;
}

export const mapConcursoLotoFacil = (resultObject) => {
  const concurso = new ConcursoLotoFacilEntity();
  concurso.concurso = resultObject.Concurso;
  concurso.dataSorteio = formataStringData(resultObject['Data Sorteio']);
  concurso.bola1 = resultObject.Bola1;
  concurso.bola2 = resultObject.Bola2;
  concurso.bola3 = resultObject.Bola3;
  concurso.bola4 = resultObject.Bola4;
  concurso.bola5 = resultObject.Bola5;
  concurso.bola6 = resultObject.Bola6;
  concurso.bola7 = resultObject.Bola7;
  concurso.bola8 = resultObject.Bola8;
  concurso.bola9 = resultObject.Bola9;
  concurso.bola10 = resultObject.Bola10;
  concurso.bola11 = resultObject.Bola11;
  concurso.bola12 = resultObject.Bola12;
  concurso.bola13 = resultObject.Bola13;
  concurso.bola14 = resultObject.Bola14;
  concurso.bola15 = resultObject.Bola15;
  concurso.ganhadores15 = resultObject['Ganhadores 15 acertos'];
  concurso.rateio15 = realToDecimal(resultObject['Rateio 15 acertos']);
  concurso.ganhadores14 = resultObject['Ganhadores 14 acertos'];
  concurso.rateio14 = realToDecimal(resultObject['Rateio 14 acertos']);
  concurso.ganhadores13 = resultObject['Ganhadores 13 acertos'];
  concurso.rateio13 = realToDecimal(resultObject['Rateio 13 acertos']);
  concurso.ganhadores12 = resultObject['Ganhadores 12 acertos'];
  concurso.rateio12 = realToDecimal(resultObject['Rateio 12 acertos']);
  concurso.ganhadores11 = resultObject['Ganhadores 11 acertos'];
  concurso.rateio11 = realToDecimal(resultObject['Rateio 11 acertos']);
  concurso.acumulado = realToDecimal(resultObject['Acumulado 15 acertos']);
  concurso.arrecadacaoTotal = realToDecimal(resultObject['Arrecadacao Total']);
  concurso.estimativaProximoPremio = realToDecimal(
    resultObject['Estimativa Prêmio'],
  );
  concurso.acumuladoEspecial = realToDecimal(
    resultObject['Acumulado sorteio especial Lotofácil da Independência'],
  );

  return concurso;
};
