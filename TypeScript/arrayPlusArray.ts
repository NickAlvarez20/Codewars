export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  let sum1 = arr1.reduce((acc, currVal) => acc + currVal, 0);
  let sum2 = arr2.reduce((acc, currVal) => acc + currVal, 0);
  return sum1 + sum2;
};
