<style scoped>
  header{bottom: 0;left: 0;z-index: 9999;height: 56px}
  li{width:56px}
  li i{margin-bottom: 2px}
</style>
<template>
  <header class="fixed full-width white-bg">
    <nav class="border-top full-height">
      <ul class="full-height flex flex-justify-around">
        <li v-for="u in link" class="font-12 full-height border-box">
          <router-link class="full-height full-width flex flex-col flex-justify-center text-center" :to="u.url">
            <i v-if="u.url==='/'" style="font-size: 30px" :class="{black: active==='/','grey-9': active!=='/'}" class="fa fa-home" aria-hidden="true"></i>
            <i v-if="u.url==='/hub'" style="font-size: 29px" :class="{black: active==='/hub','grey-9': active!=='/hub'}" class="fa fa-comments-o" aria-hidden="true"></i>
            <i v-if="u.url==='/start'" style="font-size: 29px" :class="{black: active==='/start','grey-9': active!=='/start'}" class="fa fa-plane" aria-hidden="true"></i>
            <i v-if="u.url==='/document'" style="font-size: 28px" :class="{black: active==='/document','grey-9': active!=='/document'}" class="fa fa-book" aria-hidden="true"></i>
            <span>{{u.name}}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    data: () => ({
      link: [
        {url: '/', name: '首页 '},
        {url: '/start', name: '快速入门'},
        {url: '/document', name: '文档'},
        {url: '/hub', name: '社区'}
      ],
      active: ''
    }),
    created() {
      this.active = this.$route.path
    },
    watch: {
      $route(to) {
        this.active = to.path
      }
    }
  }
</script>