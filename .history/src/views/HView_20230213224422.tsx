import { defineComponent } from 'vue'
import { Banner } from '@/components/Crumbs/Banner'
import Profile from './ProfilePage.vue'

export default defineComponent({
  name: 'PhexamView',
  setup(){

    const children = <Profile />
    return () => {
      return <>
      {Banner({children})}
    </>
    }
  }
})