<template>
  <div>
    <div v-for="i in list">
      <span>{{i.id}}</span>
      <span>{{i.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    asyncData({store, route}) {
      return store.dispatch('getUserInfo')
    },
    computed: {
      list() {
        return this.$store.state.userName
      }
    }
  }
</script>

<style scoped>

</style>