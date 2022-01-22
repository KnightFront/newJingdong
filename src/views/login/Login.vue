<template>
    <div class="wrapper">
        <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper__img">
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" placeholder="请输入手机号"/>
        </div>
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" placeholder="请输入密码"/>
        </div>
        <div class="wrapper__login-button" @click="handleLogin()">登录</div>
        <div class="wrapper__login-link">立即注册</div>

    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const handleLogin = () => {
      localStorage.isLogin = true
      router.push({ name: 'Home' })
    }
    return { handleLogin }
  }
}
</script>

<style lang="scss" scoped>
 @import '../../style/viriables';
.wrapper{
    // 先给dom垂直居中
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    // text-align: center;
    &__img{
        width: .66rem;
        display: block;
        height: .66rem;
        margin: 0  auto .4rem auto;
    }
    &__input{
        box-sizing: border-box;
        width: 2.95rem;
        height: .48rem;
        margin: .0 .4rem .16rem .4rem;
        padding: 0 .16rem;
        background: #F9F9F9;
        border: 1px solid rgba(0,0,0,0.10);
        border-radius: 6px;
        border-radius: 6px;
        &__content{
            border: none;
            outline: none;
            line-height: .48rem;
            width: 100%;
            background: none;
            font-size: .16rem;
            color:$content-notice-fontcolor;
            &::placeholder{
                color:$content-notice-fontcolor;
            }
        }
    }
    &__login-button{
       width: 2.95rem;;
       height: .48rem;
       font-size: .16rem;
       margin: .32rem .4rem 0 .4rem;
       background: #0091FF;
       box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
       border-radius: .04rem;
       border-radius: .04rem;
       color: #fff;
       text-align: center;
       line-height: .48rem;
    }
    &__login-link{
        margin-top: .16rem;
        text-align: center;
        font-size: .14rem;
        color:$content-notice-fontcolor;
    }

}
</style>
