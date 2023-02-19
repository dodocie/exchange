import Login from './Login.vue'
import type {ValuesOfType} from '@/utils/types'

const enum ViewNames {
  HOME = 'home',
  PROD = 'production',
  LOGIN = 'login'
}

export type ViewNamess = ValuesOfType<typeof ViewNames>

const HomeCmp = ({ViewNames}: {ViewNames: ViewNamess}) => {
  const cmpMap = {
    [ViewNames.LOGIN]: Login,
    [ViewNames.HOME]: Login,
    [ViewNames.PROD]: Login,
  }
  const component = cmpMap[ViewNames]
  return <><component /></>
}

export default HomeCmp