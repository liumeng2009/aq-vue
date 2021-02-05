declare type Nullable<T> = T | null;
declare type TimeoutHandle = ReturnType<typeof setTimeout>;
declare type Recordable<T extends any = any> = Record<string, T>;
