import Login from './Login.vue'

enum View {
  HOME = 'home',
  PROD = 'production',
  LOGIN = 'login'
}

type Views = typeof View

const HomeCmp = ({view}: {view: 'login'}) => {
  const cmpMap = {
    login: Login
  }
  const component = cmpMap[view]
  return <><component /></>
}

export default HomeCmp