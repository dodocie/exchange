import { defineComponent, ref } from 'vue'
import Menu from '@/components/Menu.vue'
import HomeBox from '@/components/HomeBox'


export default defineComponent({
  name: 'HomeView',
  setup(){
    const view = ref<'login'>('login')
    const MenuPage = HomeBox({view: view.value})
    return () => {
      return <>
        <img class="absolute" src="https://tailwindui.com/img/beams-home@95.jpg" alt="" />
        <Menu />
        <main>
          {MenuPage}
        </main>
      </>
    }
  }
})