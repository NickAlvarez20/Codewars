export function humanYearsCatYearsDogYears(
  humanYears: number
): [number, number, number] {
  const Catyears: number =
    humanYears == 1 ? 15 : humanYears == 2 ? 24 : 24 + 4 * (humanYears - 2);
  const Dogyears: number =
    humanYears == 1 ? 15 : humanYears == 2 ? 24 : 24 + 5 * (humanYears - 2);
  return [humanYears, Catyears, Dogyears];
}
