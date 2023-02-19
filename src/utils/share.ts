export async function wrapPromise<T>(promise: Promise<T>): Promise<[null|Error|unknown, T | null]> {
  try {
    const res = await promise
    return [null, res]
  } catch (err) {
    return [err, null]
  }
}

export function sleep(delay: number, sleepReason?: string): Promise<unknown> {
  return new Promise(resolve => setTimeout(()=>resolve(sleepReason), delay))
}