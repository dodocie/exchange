export type ValuesOfType<T> = {
  [K in keyof T]: T[K]
}[keyof T]

export function keyExists<T extends Object | Element>(obj: T, k: string): k is keyof T & string{
  return k in obj
}
