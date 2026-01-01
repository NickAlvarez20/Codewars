export function toAlternatingCase(s: string): string {
  let string = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      string += s[i].toUpperCase();
    } else if (s[i] === s[i].toUpperCase()) {
      string += s[i].toLowerCase();
    }
    }
    return string;
}
