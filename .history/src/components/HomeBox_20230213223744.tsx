import Login from './Login.vue'

export const HomeCmp = ({view}: {view: 'login'}) => {
  const cmpMap = {
    login: Login
  }
  const component = cmpMap[view]
  return <></>
}