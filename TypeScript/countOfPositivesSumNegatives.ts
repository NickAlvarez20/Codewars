export function countPositivesSumNegatives(input: number[] | null): number[] {
  let positiveCount: number = 0;
  let sumNegatives: number = 0;
  if (!input?.length) {
    return [];
  }
  for (const num of input) {
    num > 0 ? positiveCount++ : num < 0 ? (sumNegatives += num) : 0;
  }
  return [positiveCount, sumNegatives];
}
