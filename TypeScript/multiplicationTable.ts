export function multiTable(number: number): string {
  let table = [];
  for (let i = 1; i < 11; i++) {
    table.push(
      i.toString() + " * " + number.toString() + " = " + (i * number).toString()
    );
  }
  return table.join("\n");
}
