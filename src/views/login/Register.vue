<template>
    <div class="wrapper">
        <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" class="wrapper__img">
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" v-model="username" placeholder="请输入用户名"/>
        </div>
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" v-model="password" placeholder="请输入密码" autocomplete="new-password"/>
        </div>
        <div class="wrapper__input">
            <input type="text" class="wrapper__input__content" v-model="ensurement" placeholder="确认密码"/>
        </div>
        <div class="wrapper__register-button" @click="handleRegister()">注册</div>
        <div class="wrapper__register-link" @click="handleLoginEffect()">已有帐号去登录</div>
        <toast v-if="show" :message ='toastMessage'/>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast.vue'
// 处理注册逻辑
const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '', ensurement: '' })
  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password, ensurement } = toRefs(data)
  return { username, password, ensurement, handleRegister }
}
export default {
  name: 'Register',
  components: {
    Toast
  },
  setup () {
    const router = useRouter()
    const { username, password, ensurement, handleRegister } = useRegisterEffect()
    const { show, toastMessage, showToast } = useToastEffect()
    // 处理登录跳转
    const handleLoginEffect = () => {
      router.push({ name: 'Login' })
    }
    return { handleLoginEffect, username, password, ensurement, handleRegister, show, toastMessage, showToast }
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
    &__register-button{
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
    &__register-link{
        margin-top: .16rem;
        text-align: center;
        font-size: .14rem;
        color:$content-notice-fontcolor;
    }

}
</style>
