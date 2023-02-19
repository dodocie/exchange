import { useUserStore } from '@/stores/user';
import { keyExists } from '@/utils/types';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'shelf',
  props: {
    currShelf: {
      type: String,
      default: '1'
    } 
  },
  setup(props) {
    const {likes, publish, footprint} = useUserStore()
    const text = computed(() => {
      const map = {
        1: '发布',
        2: '收藏',
        3: '浏览',
      }
      if (props.currShelf === "1") return "发布";
      return keyExists(map, props.currShelf) ? map[props.currShelf] : '有';
    });
    const listMap = computed(()=>{
      const map = {
        1: publish,
        2: likes,
        3: footprint,
      }
      return keyExists(map, props.currShelf) ? map[props.currShelf] : [];
    })
    return () => {
        if(!listMap.value.length) return <><el-empty description={`oops! 还没${text.value}物品哦`} /></>
        return <>{listMap.value.map(item=><p>{item}</p>)}</>
    }
  }
})