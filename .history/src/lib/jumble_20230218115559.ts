
export const enum Jumble {
  DIGITAL = 'digital',
  BOOKDS = 'books',
}

export const stuff = {
  [Jumble.DIGITAL]: genStuff('digital', '数码'),
  [Jumble.BOOKDS]: genStuff('digital', '数码'),
}

const digitalNames = []

function genStuff(type: string, name: string){
  const arr = new Array(100)
  return arr.map((v, i)=>{
    const ramdownStr = Math.random().toString(32).slice(2)
    return {
      id: `${type}_${ramdownStr}`,
      name: `${name}_${i}`,
      descr: `${name}_描述_${i}`,
      createdTime: Date.now()
    }
  })
}