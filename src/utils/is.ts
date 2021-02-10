export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

export function isString(val: unknown): val is string {
  return is(val, 'String');
}

export function isUrl(path: string): boolean {
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}
