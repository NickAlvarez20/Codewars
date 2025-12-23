export function get_age(age: string): number {
  return Number(age.match(/(\d+)/g));
}
