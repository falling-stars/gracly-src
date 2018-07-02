<template>
  <div class="container fixed">
      <i class="fa fa-rocket font-30 line-height-1_5" aria-hidden="true" :style="{color:upColor}" @click="toUp"></i>
  </div>
</template>

<script>
  export default {
    data: () => ({
      upColor: 'rgba(156,156,156,0.4)'
    }),
    methods: {
      toUp() {
        const self = this
        self.upColor = '#9c9c9c'
        let top = document.documentElement.scrollTop
        const scroll = () => {
          top -= 50
          window.scrollTo(0, top)
          if (top > 0) {
            setTimeout(scroll, 4)
          } else {
            setTimeout(() => self.upColor = 'rgba(156,156,156,0.4)', 300)
          }
        }
        scroll()
      }
    }
  }
</script>

<style scoped>
  .container{width:1rem;right:0;bottom:40%}
  i{font-size:1rem;transform:rotate(-45deg)}
</style>