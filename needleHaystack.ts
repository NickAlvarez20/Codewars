export function findNeedle(haystack: any[]): string {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == "needle") {
      return "found the needle at position " + i.toString();
    }
  }
  return "No needle";
}
