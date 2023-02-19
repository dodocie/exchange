import Login from './Login.vue'

export enum View {
  'home',
  'production',
  'login'
}

const HomeCmp = ({view}: {view: 'login'}) => {
  const cmpMap = {
    login: Login
  }
  const component = cmpMap[view]
  return <><component /></>
}

export default HomeCmp