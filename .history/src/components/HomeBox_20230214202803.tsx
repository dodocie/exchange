import Login from './Login.vue'

enum View {
  HOME = 'home',
  PROD = 'production',
  LOGIN = 'login'
}

type Views = keyof typeof View

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