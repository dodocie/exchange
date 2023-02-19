import { defineComponent, inject} from 'vue'
import HomeBox, {ViewNames} from '@/components/HomeBox'
import type {Views} from '@/components/HomeBox'

export default defineComponent({
  name: 'HomeView',
  setup(){
    const view = inject<Views>('currView')
    const MenuPage = HomeBox({view: view || ViewNames.HOME})
    return () => {
      return <>
        {MenuPage}
      </>
    }
  }
})