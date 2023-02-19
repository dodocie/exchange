import Login from './Login.vue'

const HomeCmp = ({view}: {view: 'login'}) => {
  const cmpMap = {
    login: Login
  }
  const component = cmpMap[view]
  return <><component /></>
}

export default HomeCmp