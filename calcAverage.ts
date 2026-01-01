export function findAverage(array: number[]): number {
  if (!array.length) return 0;
  return array.reduce((a, v) => a + v, 0) / array.length;
}
