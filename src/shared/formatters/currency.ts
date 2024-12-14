// TODO: Ajustar problema com pontos
export function realToDecimal(realValue) {
  const justNumber = realValue.replace('R$','')
  const undottedValue = justNumber.replace('.','')
  return parseFloat(undottedValue.replace(',','.')).toFixed(2);
}