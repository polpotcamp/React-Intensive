type HasLength = { length: number };

export function filterByLength<
  T extends Record<K, HasLength>,
  K extends keyof T
>(arr: T[], key: K, minLength: number, maxLength: number): T[] {
  return arr.filter((item) => {
    const len = item[key].length;
    return len >= minLength && len <= maxLength;
  });
}
