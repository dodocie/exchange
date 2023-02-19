export type ValuesOfType<T> = {
  [K in keyof T]: T[K]
}[keyof T]
