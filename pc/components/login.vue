<template>
  <div v-if="loginShow" class="login-cover fixed full-height full-width flex flex-center">
    <div class="login red-bg">
      <button @click="close">close</button>
      <!--<button>注册</button>-->
      <i class="fa fa-weixin" aria-hidden="true"></i>
      <i class="fa fa-weibo" aria-hidden="true"></i>
      <i class="fa fa-github" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      loginShow: {
        type: [Boolean],
        default: false
      }
    },
    methods: {
      close() {
        this.$emit('loginClose')
      }
    }
  }
</script>

<style scoped>
  .login-cover {background-color: rgba(255,255,255,0.5);z-index: 999}
  .login {width: 600px;height: 400px}
  .fa-weixin{color:#5FB878}
  .fa-weibo{color:#c80f1e}
  .login i{font-size: 22px}
</style>