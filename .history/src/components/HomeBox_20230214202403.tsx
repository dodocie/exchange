import Login from './Login.vue'

export enum View {
  'home',
  'production',
  'login'
}

const HomeCmp = ({view}: {view: View}) => {
  const cmpMap = {
    login: Login
  }
  const component = cmpMap[view]
  return <><component /></>
}

export default HomeCmp