export function gooseFilter(birds: string[]): string[] {
  const geese: string[] = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  let notGeeseArr: string[] = [];
  for (const bird of birds) {
    if (!geese.some((goose) => goose.toLowerCase() === bird.toLowerCase())) {
      notGeeseArr.push(bird);
    }
  }
  return notGeeseArr;
}

export function gooseFilter(birds: string[]): string[] {
  const geese: string[] = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  return birds.filter((bird) => !geese.includes(bird));
}
