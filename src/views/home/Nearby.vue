<template>
  <div class="nearby">
        <h3 class="nearby__title">
          附近店铺
        </h3>
        <div class="nearby__item" v-for="(item,index) in nearbyList" :key="index">
          <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="" srcset="">
          <div class="nearby__content">
            <div class="nearby__content__title">{{item.title}}</div>
            <div class="nearby__content__tags">
              <span class="nearby__content__tag" v-for="(items,indexs) in item.tags" :key="indexs">{{items}}+</span>
              <p class="nearby__content__highlight">
                {{item.desc}}
              </p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [{
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥0', '基础运费¥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    },
    {
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥0', '基础运费¥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    },
    {
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥0', '基础运费¥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    },
    {
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥0', '基础运费¥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    },
    {
      title: '沃尔玛',
      tags: ['月售1万+', '起送¥0', '基础运费¥5'],
      desc: 'VIP尊享满89元减4元运费券（每月3张）'
    }]
    return { nearbyList }
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

    &__item {
      display: flex;
      padding-top: .12rem;

      &__img {
        margin-right: .16rem;
        width: .56rem;
        height: .56rem;
      }
    }

    &__content {
      flex: 1;
      padding-bottom: .12rem;
      border-bottom: 1px solid $content-bgColor;

      &__title {
        line-height: .22rem;
        font-size: .16rem;
        color: $content-fontcolor;
      }

      &__tags {
        line-height: .18rem;
        font-size: .13rem;
        margin-top: .08rem;
        color: $content-fontcolor;
      }

      &__tag {
        margin-right: .16rem;
      }

      &__highlight {
        line-height: .18rem;
        font-size: .13rem;
        color: #E93B3B;
        margin: .08rem 0 0 0;
      }
    }
  }

</style>
