export type Values<T> = {
  [K in keyof T]: T[K]
}[keyof T]
