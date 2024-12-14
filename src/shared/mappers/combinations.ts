function generateCombinations(arr: number[]): number[][] {
  const combinationSize = 11;

  function getCombinations(
    start: number,
    currentCombination: number[],
  ): number[][] {
    if (currentCombination.length === combinationSize) {
      return [currentCombination];
    }

    const combinations: number[][] = [];

    for (let i = start; i < arr.length; i++) {
      const newCombination = [...currentCombination, arr[i]];
      combinations.push(...getCombinations(i + 1, newCombination));
    }

    return combinations;
  }

  return getCombinations(0, []);
}

// Exemplo de uso:
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const result = generateCombinations(inputArray);

console.log(result);
