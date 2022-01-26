<template>
    <div>
     <div class="shop">
      <img class="shop__img" :src='item.imgUrl' alt="" srcset="">
      <div  :class ="{'shop__content':true, 'shop__content--borderd':hideBorder? false:true}">
        <div class="shop__content__title">{{item.name}}</div>
        <div class="shop__content__tags">
          <span class="shop__content__tag">月售：{{item.sales}}</span>
          <span class="shop__content__tag">起送：{{item.expressLimit}}</span>
          <span class="shop__content__tag">基础运费：{{item.expressPrice}}</span>
          <span class="shop__content__tag"></span>
          <p class="shop__content__highlight">
            {{item.slogan}}
          </p>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'shopInfo',
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
 @import '../style/viriables';
 @import '../style/mixin.scss';
    .shop {
      display: flex;
      padding-top: .12rem;

      &__img {
        margin-right: .16rem;
        width: .56rem;
        height: .56rem;
      }
    &__content {
      flex: 1;
      padding-bottom: .12rem;
      &--borderd{
        border-bottom: 1px solid $content-bgColor;
      }
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
