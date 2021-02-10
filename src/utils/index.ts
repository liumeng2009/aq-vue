export function es6Unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}
