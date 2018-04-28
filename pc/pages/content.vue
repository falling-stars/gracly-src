<template>
  <div>
    <login :loginShow="loginShow" @loginClose="loginClose"></login>
    <hubHead @loginShow="loginShow = true"></hubHead>
    <div class="content padding">
      content
    </div>
  </div>
</template>

<script>
  import login from '../components/login'
  import hubHead from '../components/hubHead'

  export default {
    components: {login, hubHead},
    data: () => ({
      loginShow: false
    }),
    methods: {
      loginClose() {
        this.loginShow = false
      }
    }
  }
</script>

<style scoped>

</style>