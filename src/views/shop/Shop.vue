<template>
    <div>
        <div class="wrapper">
            <div class="search">
                <div class="search__back iconfont" @click="handleBackClick()">&#xe6f2;</div>
                <div class="search__content">
                    <span class="search__content__icon iconfont">&#xe62d;</span>
                    <input type="text" class="search__content__input" placeholder="请输入商品名称"/>
                </div>
            </div>
            <ShopInfo  :item ="item" :hideBorder="true" v-show="item.imgUrl"/>
            <Content/>
        </div>
    </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo'
import Content from './Content'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import { reactive, toRefs } from 'vue'
// 获取当前商铺信息
const useShopInfoEffect = () => {
  const data = reactive({ item: {} })
  const route = useRoute()
  const getItemData = async () => {
    const result = await get('/api/shop/' + route.params.id)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}
export default {
  name: 'Shop',
  components: {
    ShopInfo,
    Content
  },
  setup () {
    const router = useRouter()
    const { item, getItemData } = useShopInfoEffect()
    getItemData()
    const handleBackClick = () => {
      router.back()
    }
    return {
      item,
      handleBackClick
    }
  }
}
</script>

<style lang='scss' scoped>
 @import '../../style/viriables';
 @import '../../style/mixin.scss';
.wrapper{
    padding: 0 .18rem;
}
.search{
    display: flex;
    height: .32rem;
    margin:.14rem 0 .04rem 0 ;
    line-height: .32rem;
    &__back{
        height: .32rem;
        font-size: .2rem;
        color: #B6B6B6;
        width: .3rem;
    }
    &__content{
        display: flex;
        flex: 1;
        background: $search-bgColor;
        border-radius: .16rem;
        &__icon{
            width: .44rem;
            line-height: .32rem;
            color: $search-fontColor;
            text-align: center;
        }
        &__input{
            height: .32rem;
            border: none;
            background: none;
            display: block;
            width: 100%;
            padding-right: .2rem;
            font-size: .14rem;
            color: #333333;
            &::placeholder{
                color: #333333;
            }
        }
    }
}
</style>
