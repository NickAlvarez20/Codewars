export function arr2bin(arr: any[]): string {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" && !Number.isNaN(arr[i])) {
      sum += 0;
    } else {
      sum += arr[i];
    }
  }
  return sum.toString(2);
}


export function arr2bin(arr: any[]): string {
  return arr
    .filter((i) => typeof i === "number")
    .reduce((a, b) => a + b, 0)
    .toString(2);
}