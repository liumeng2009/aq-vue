export function isFuntion(val: unknown): val is Function {
  return typeof val === 'function';
}
