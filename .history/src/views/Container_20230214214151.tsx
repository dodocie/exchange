import { computed, defineComponent, inject, type Ref} from 'vue'
import HomeBox, {ViewNames} from '@/components/MainBox'
import type {Views} from '@/components/MainBox'

export default defineComponent({
  name: 'HomeView',
  setup(){
    const view = inject<Ref<Views>>('currView')
    const MenuPage = computed(()=>HomeBox({view: view?.value || ViewNames.HOME}))
    return () => {
      return <>
        {MenuPage.value}
      </>
    }
  }
})