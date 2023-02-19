
export const enum Jumble {
  DIGITAL = 'digital',
  BOOKDS = 'books',
}

export const stuff = {
  [Jumble.DIGITAL]: 1
}

function genStuff(){
  const arr = new Array(100)
  return arr.map((v, i)=>{
    const ramdownStr = Math.random().toString(32).slice(2)
    return {
      id: Math.random().toString(32).slice(2),

    }
  })
}