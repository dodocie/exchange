
export const enum Jumble {
  DIGITAL = 'digital',
  BOOKS = 'books',
  SPORTS = 'sports',
  FITTING = 'fitting'
}

const menuMap = {
  [Jumble.DIGITAL]: '数码',
  [Jumble.BOOKS]: '书籍',
  [Jumble.SPORTS]: '运动',
  [Jumble.FITTING]: '家居',
} as const

export const stuff = {
  [Jumble.DIGITAL]: genStuff(Jumble.DIGITAL, '数码'),
  [Jumble.BOOKS]: genStuff(Jumble.BOOKS, '书籍'),
  [Jumble.SPORTS]: genStuff(Jumble.SPORTS, '运动'),
  [Jumble.FITTING]: genStuff(Jumble.FITTING, '家居'),
}

export interface StuffItem {
  id: string;
  name: string;
  descr: string;
  createdTime: number;
}

function genStuff(type: string, name: string){
  const arr = new Array(100).fill(1)
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

const stuffTree = {
  [Jumble.DIGITAL]:{
    laptop: '笔记本电脑',
    cellphone: '手机',
    headset: '耳机',
    sportsWatch: '运动手表'
  },
  [Jumble.SPORTS]: {
    racket: '球拍'
  },
  [Jumble.BOOKS]: {
    scifi: '科幻'
  },
  [Jumble.FITTING]: {
    treadmill: '跑步机',
    spinning: '动感单车',
  }
}

export function genStuffMenu(){
  return Object.keys(stuffTree)
  .reduce((arr, key)=>{
    const subMenu = stuffTree[key as keyof typeof stuffTree]
    const subGroup = Object
    .keys(subMenu)
    .map(subKey=>({
      value: subKey,
      label: subMenu[subKey as keyof typeof subMenu],
    }))
    arr.push({
      value: key,
      label: menuMap[key as keyof typeof menuMap],
      children: subGroup,
      subMenuType: 'item'
    })

    return arr
  }, [] as StuffMenu[])
}

type StuffMenu = {
  value: string
  label: string
  subMenuType?: 'group' | 'item'
  children?: StuffMenu[]
}