<template>
  <div>
    <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层
      <span class="iconfont position__notice">&#xe60b;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe62d;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
    </div>
    <div class="icons">
      <div class="icons__item" v-for="(item,index) in staticPartList" :key="index">
        <img :src="item.imgSrc" alt="" class="icons__item__img" />
        <p class="icons__item__desc">{{item.name}}</p>
      </div>
    </div>
    <div class="gap"></div>
  </div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const staticPartList = [{
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/超市.png',
      name: '超市便利'
    },
    {
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
      name: '菜市场'
    },
    {
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
      name: '水果店'
    },
    {
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
      name: '鲜花绿植'
    },
    {
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
      name: '医药健康'
    },
    {
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/家居.png',
      name: '家居时尚'
    },
    {
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
      name: '烘培蛋糕'
    },
    {
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/签到.png',
      name: '签到'
    },
    {
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
      name: '大牌免运'
    },
    {
      imgSrc: 'http://www.dell-lee.com/imgs/vue3/红包.png',
      name: '红包套餐'
    }
    ]
    return { staticPartList }
  }
}

</script>

<style lang="scss" scoped>
  @import '../../style/viriables';
  @import '../../style/mixin.scss';

  .position {
    position: relative;
    padding: .16rem .24rem .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
    @include ellipses;

    .position__icon {
      position: relative;
      top: .01rem;
      font-size: .2rem;
    }

    .position__notice {
      position: absolute;
      right: 0;
      font-size: .2rem;
      top: .17rem;
    }
  }
  .banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    &__img {
      width: 100%;
    }
  }
  .search {
    margin-bottom: .12rem;
    line-height: .32rem;
    background: #f5f5f5;
    color: #B7B7B7;
    border-radius: .16rem;

    .iconfont {
      font-size: .16rem;
      display: inline-block;
      padding: 0 .08rem 0 .16rem;
    }

    &__text {
      display: inline-block;
      font-size: .14rem;
    }
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: .16rem;

    &__item {
      width: 20%;

      &__img {
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
      }

      &__desc {
        text-align: center;
        color: $content-fontcolor;
        margin: .06rem 0 .16rem 0;
      }
    }
  }

  .gap {
    margin: 0 -.18rem;
    height: .1rem;
    background: #F1F1F1;
  }

</style>
