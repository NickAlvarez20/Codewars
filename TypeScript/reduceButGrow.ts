export function grow(arr: number[]): number {
  const sum = arr.reduce((acc, currVal) => acc * currVal, 1);
  return sum;
}
