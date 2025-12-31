export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  return (
    yourPoints > classPoints.reduce((a, t) => a + t, 0) / classPoints.length
  );
}
