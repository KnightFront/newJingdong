<template>
  <div class="nearby">
    <h3 class="nearby__title">
      附近店铺
    </h3>
    <router-link :to="`/shop/${item._id}`" v-for="(item,index) in nearbyList" :key="index">
        <ShopInfo :item ="item"/>
    </router-link>
    <toast v-if="show" :message='toastMessage' />
  </div>
</template>
0471-95105105
<script>
import {
  ref
} from 'vue'
import {
  get
} from '../../utils/request'
import Toast, {
  useToastEffect
} from '../../components/Toast.vue'
import ShopInfo from '../../components/ShopInfo.vue'
const useNearbyListEffect = () => {
  const {
    show,
    toastMessage,
    showToast
  } = useToastEffect()
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    } else {
      showToast('登录失败')
    }
  }
  return { nearbyList, getNearbyList, toastMessage, show }
}
export default {
  name: 'Nearby',
  components: {
    Toast,
    ShopInfo
  },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return {
      nearbyList
    }
  }
}

</script>

<style lang="scss" scoped>
  @import '../../style/viriables';
  @import '../../style/mixin.scss';

  .nearby {
    &__title {
      margin: .16rem 0 .02rem 0;
      font-size: .18rem;
      color: $content-fontcolor;
      font-weight: normal;
    }
    a{
      text-decoration: none;
    }
  }

</style>
