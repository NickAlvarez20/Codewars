export function isPalindrome(x: string): boolean {
  // Normalize data, convert to lowercase
  const normalized = x.toLowerCase().replace(/[^a-z0-9]/g, "");
  // two pointers practice
  let left: number = 0;
  let right: number = normalized.length - 1;

  while (left < right) {
    if (normalized[left] !== normalized[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
