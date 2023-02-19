import Login from './Login.vue'
import type {ValuesOfType} from '@/utils/types'

const enum ViewNames {
  HOME = 'home',
  PROD = 'production',
  LOGIN = 'login'
}

export type Views = ValuesOfType<typeof ViewNames>

const HomeCmp = ({view}: {view: Views}) => {
  const cmpMap = {
    [ViewNames.LOGIN]: Login,
    [ViewNames.HOME]: Login,
    [ViewNames.PROD]: Login,
  }
  const component = cmpMap[view]
  return <><component /></>
}

export default HomeCmp