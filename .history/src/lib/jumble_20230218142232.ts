
export const enum Jumble {
  DIGITAL = 'digital',
  BOOKS = 'books',
  SPORTS = 'sports',
  FITTING = 'fitting'
}

export const stuff = {
  [Jumble.DIGITAL]: genStuff(Jumble.DIGITAL, '数码'),
  [Jumble.BOOKS]: genStuff(Jumble.BOOKS, '书籍'),
  [Jumble.SPORTS]: genStuff(Jumble.SPORTS, '运动'),
  [Jumble.FITTING]: genStuff(Jumble.FITTING, '家居'),
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

export const StufTree = {
  [Jumble.DIGITAL]:{
    laptop: '笔记本电脑',
    cellphone: '手机',
    
  },
  [Jumble.SPORTS]: {
    treadmill: '跑步机',
    spinning: '动感单车',
    racket: '球拍'
  }
}