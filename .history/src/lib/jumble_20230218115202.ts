
export const enum Jumble {
  DIGITAL = 'digital',
  BOOKDS = 'books',
}

export const stuff = {
  [Jumble.DIGITAL]: 1
}

function genStuff(type: string){
  const arr = new Array(100)
  const 
  return arr.map((v, i)=>{
    const ramdownStr = Math.random().toString(32).slice(2)
    return {
      id: `${type}_${ramdownStr}`,
      name: ''
    }
  })
}