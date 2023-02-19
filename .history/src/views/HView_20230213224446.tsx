import { defineComponent, ref } from 'vue'
import Menu from '@/components/Menu.vue'
import HomeBox from '@/components/HomeBox'


export default defineComponent({
  name: 'HomeView',
  setup(){

    const children = <Profile />
    return () => {
      return <>
      {Banner({children})}
    </>
    }
  }
})