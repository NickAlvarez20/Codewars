export function position(alphabet: string): string {
  const charCode = alphabet.charCodeAt(0);
  let letterPos = "";

  if (charCode >= 97 && charCode <= 122) {
    letterPos = "Position of alphabet: " + (charCode - 96).toString();
  }
  return letterPos;
}
