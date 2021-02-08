declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
declare type Nullable<T> = T | null;
declare type TimeoutHandle = ReturnType<typeof setTimeout>;
declare type Recordable<T extends any = any> = Record<string, T>;
declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
