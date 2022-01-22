<template>
  <div class="docker">
    <div :class="{'docker-item':true , 'docker-item-active': index ===0}" v-for="(item,index) in dockerList" :key="index">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker-title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe6f3;', text: '首页' },
      { icon: '&#xe7e5;', text: '购物车' },
      { icon: '&#xe61e;', text: '订单' },
      { icon: '&#xe660;', text: '我的' }
    ]
    return { dockerList }
  }
}

</script>

<style lang="scss" scoped>
  @import '../../style/viriables';
  @import '../../style/mixin.scss';

  .docker {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    border-top: .01rem solid #F1F1F1;
    display: flex;
    padding: 0 .18rem;
    box-sizing: border-box;
    color: $content-fontcolor;

    // justify-content: space-around;
    &-item {
      flex: 1;
      text-align: center;

      .iconfont {
        font-size: .18rem;
        margin: 0.07rem 0 0.02rem 0;
      }

      .docker-title {
        font-size: .2rem;
        transform: scale(.5, .5);
        transform-origin: center top;
      }
    }
  }

  .docker-item-active {
    color: #1fa4fc;
  }

</style>
