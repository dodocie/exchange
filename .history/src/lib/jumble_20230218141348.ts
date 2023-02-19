
export const enum Jumble {
  DIGITAL = 'digital',
  BOOKS = 'books',
  TOYS = 'toys',
  FITTINGS = 'fitting'
}

export const stuff = {
  [Jumble.DIGITAL]: genStuff(Jumble.DIGITAL, '数码'),
  [Jumble.BOOKS]: genStuff(Jumble.BOOKS, '书籍'),
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