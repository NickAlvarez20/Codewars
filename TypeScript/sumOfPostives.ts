export function positiveSum(arr: number[]): number {
  let sum: number = 0;
  for (const num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}
