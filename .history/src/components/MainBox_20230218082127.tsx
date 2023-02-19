import Login from '../views/Login.vue'
import type {ValuesOfType} from '@/utils/types'

export const enum ViewNames {
  HOME = 'home',
  PROD = 'production',
  LOGIN = 'login'
}

export type Views = ValuesOfType<typeof ViewNames>

const HomeCmp = ({view}: {view: Views}) => {

  return <></>
}

export default HomeCmp