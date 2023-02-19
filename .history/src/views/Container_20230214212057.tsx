import { defineComponent, inject, type Ref} from 'vue'
import HomeBox, {ViewNames} from '@/components/HomeBox'
import type {Views} from '@/components/HomeBox'

export default defineComponent({
  name: 'HomeView',
  setup(){
    const view = inject<Ref<Views>>('currView')
    const MenuPage = HomeBox({view: view?.value || ViewNames.HOME})
    return () => {
      return <>
        {MenuPage}
      </>
    }
  }
})