<template>
    <div class="content">
        <div class="category">
            <div class="category__item category__item--active">全部商品</div>
            <div class="category__item">秒杀</div>
            <div class="category__item">新鲜水果</div>
            <div class="category__item">体闲食品</div>
            <div class="category__item">时令蔬菜</div>
            <div class="category__item">肉蛋家禽</div>
        </div>
        <div class="product">
            <div class="product__item">
                <img class="product__item__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
                <div class="product__item__detail">
                   <h4 class="product__item__title">
                       番茄250/份
                   </h4>
                   <p class="product__item__sales">月售10件</p>
                   <p class="product__item__price">
                       <span class="product__item__yen">&yen;</span>33.6
                       <span class="product__item__origin">&yen;66.6</span>
                    </p>
                </div>
                <div class="product__number">
                    <span class="product__number__minus">-</span>
                    0
                    <span class="product__number__add">+</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5rem;
    bottom: .5rem;
}
.category{
    width: .76rem;
    height: 100%;
    overflow-y: scroll;
    background: #f5f5f5;
    &__item{
        line-height: .4rem;
        text-align: center;
        color: #333333;
        font-size: .14rem;
        &--active{
            background: #ffffff;
            border-radius: .02rem;
        }
    }
}
.product{
    flex: 1;
    overflow-y: scroll;
    &__item{
        position: relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solid #f1f1f1;
        &__img{
            width: .68rem;
            height: .68rem;
            margin-right: .16rem;
        }
        &__title{
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: #333333;
        }
        &__sales{
            margin:.06rem 0;
            line-height: .16rem;
            font-size: .12rem;
            color: #333333;
        }
        &__price{
            margin:.06rem 0;
            line-height: .2rem;
            font-size: .14rem;
            color: #E93B3B;
        }
        &__yen{
            font-size: .12rem;
        }
        &__origin{
            font-size: .12rem;
            line-height: .2rem;
            color: #999;
            // 加上横线
            text-decoration: line-through;
            margin-left: .06rem;
        }
        .product__number{
            position: absolute;
            right: 0;
            bottom: .12rem;
            &__minus,&__add{
                display: inline-block;
                width: .2rem;
                height: .2rem;
                border-radius: 50%;
                font-size: .2rem;
                line-height: .18rem;
                text-align: center;
            }
            &__minus{
                border: .01rem solid #666666;
                color: #666;
                margin-right: .1rem;
            }
            &__add{
                background: #0091ff;
                color: #fff;
            }
        }
    }
}
</style>
