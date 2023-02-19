import Login from './Login.vue'
import type {ValuesOfType} from '@/utils/types'

const enum View {
  HOME = 'home',
  PROD = 'production',
  LOGIN = 'login'
}

export type Views = ValuesOfType<typeof View>

const HomeCmp = ({view}: {view: Views}) => {
  const cmpMap = {
    [View.LOGIN]: Login,
    [View.HOME]: Login,
    [View.PROD]: Login,
  }
  const component = cmpMap[view]
  return <><component /></>
}

export default HomeCmp