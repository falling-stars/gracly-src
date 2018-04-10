<style scoped>
  .stage{height:560px;user-select:none;perspective:1000px}
  .back{top:0;left:0;transform-style:preserve-3d;background:url(../assets/images/index-back.jpg) no-repeat center/1920px auto;z-index:2;transform: translateZ(1.2rem);transition: all 0.1s}
  .text{left:0;top:0;z-index:3}
  h1{font-family:WaltDisneyScript,sans-serif;font-size:3.5rem;letter-spacing:2px;line-height:.7}
  h2{font-size:.5rem;letter-spacing:2px;margin-top:80px}
  #download{border-radius:50px;margin-top:30px;border:solid 2px #fff;width:200px;height:50px;background:transparent linear-gradient(60deg,transparent,rgba(255,255,255,.3),rgba(255,255,255,.8),rgba(255,255,255,.3),transparent) no-repeat -200px 0/auto auto}
  canvas{left:0;top:0;z-index:2}
  .introduce{padding:40px 0}
  .introduce>div{width:120px;height:120px}
  .circle{width:90px;height:90px;border-radius:50%;border:solid 1px #E6E6E6;margin:auto;transition:all .1s}
  .circle i{font-size:.6rem;transition: all 1s}
  .circle:hover{border:solid 1px #C8C8C8}
</style>

<template>
  <div>
    <div class="stage full-width relative overflow-hide" @mousemove="move3d">
      <div class="back full-height full-width absolute"></div>
      <div class="text absolute text-center full-width full-height">
        <h1 class="block white normal">gracly</h1>
        <h2 class="block white normal">PWA渐进式前端框架</h2>
        <button id="download" class="pointer white font-18">立即下载</button>
      </div>
      <canvas class="absolute full-width full-height"></canvas>
    </div>
    <div class="introduce white-bg text-center flex  flex-justify-around">
      <div v-for="i in introduce" class="text-center flex-child-noshrink">
        <div class="circle flex flex-center">
          <i :class=i.tag aria-hidden="true" class="grey-6"></i>
        </div>
        <span class="black-3 block font-16 black margin-top normal line-height-1_5">{{i.text1}}</span>
        <span class="grey-9 block font-14 line-height-1_5">{{i.text2}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mobileDevice} from '../assets/gracly/npm/base'

  export default {
    data: () => ({
      introduce: [
        {text1: '低耦合组件库', text2: '功能轻松引入', tag: 'fa fa-codepen'},
        {text1: '函数式基础库', text2: '灵活易于扩展', tag: 'fa fa-superscript'},
        {text1: '专注性能优化', text2: '打破性能瓶颈', tag: 'fa fa-line-chart'},
        {text1: '交互体验提升', text2: '极致的用户体验', tag: 'fa fa-refresh'}
      ],
      stage: null,
      back: null,
      centerX: 0,
      centerY: 0,
      rotateX: 0,
      rotateY: 0
    }),
    methods: {
      move3d(e) {
        this.back.style.transform = `translateZ(1.2rem) rotateX(${-(e.pageY - this.centerY) * this.rotateY}deg) rotateY(${(e.pageX - this.centerX) * this.rotateX}deg)`
      }
    },
    activated() {
      const canvas = () => {
        const mobile = this.$store.state.mobile
        const cs = document.getElementsByTagName('canvas')[0]
        const ctx = cs.getContext('2d')
        const width = document.getElementsByClassName('stage')[0].clientWidth
        const height = mobile ? 360 : 560
        cs.width = width
        cs.height = height

        class Start {
          constructor(x, y, size, spend, length) {
            this.X = x
            this.Y = y
            this.Spend = spend
            this.Size = size
            this.Length = length
            this.random = Math.random
          }

          create() {
            ctx.beginPath()
            ctx.arc(this.X, this.Y, this.Size, 0, 2 * Math.PI)
            ctx.fillStyle = 'white'
            ctx.shadowBlur = 10
            ctx.shadowColor = '#F0F0F0'
            ctx.fill()
            ctx.beginPath()
            ctx.fillStyle = 'rgba(255,255,255,0.8)'
            ctx.moveTo(this.X - this.Size + 1.5, this.Y - this.Size - 0.2)
            ctx.lineTo(this.X + this.Length, this.Y - this.Length)
            ctx.lineTo(this.X, this.Y + this.Size + 0.5)
            ctx.closePath()
            ctx.fill()
          }

          move() {
            this.Y += this.Spend
            this.X -= this.Spend
            this.create(this.X, this.Y)
            if (this.Y > height + 10 && this.X < -10) {
              this.Y = this.random() * -60
              this.X = this.random() * width + 200
              this.Size = this.random() + 0.5
              this.Length = this.random() * 35 + 20
              this.Spend = this.random() + 1
            }
          }
        }

        if (mobile) {
          const start1 = new Start(70, -15, 1.5, 0.5, 50)
          start1.create()
          const start2 = new Start(170, 0, 1.2, 1.1, 50)
          start2.create()
          const start3 = new Start(600, -43, 1.2, 1.5, 40)
          start3.create()
          const move = () => {
            ctx.clearRect(0, 0, width, 560)
            start1.move()
            start2.move()
            start3.move()
            this.$route.path === '/' && setTimeout(move, 20)
          }
          move()
        } else {
          const start1 = new Start(70, -20, 1.5, 0.5, 50)
          start1.create()
          const start2 = new Start(170, -100, 1.2, 1.1, 50)
          start2.create()
          const start3 = new Start(600, -3, 1.2, 1.5, 40)
          start3.create()
          const start4 = new Start(870, -70, 1.2, 1, 50)
          start4.create()
          const start5 = new Start(1270, -55, 1.3, 1, 38)
          start5.create()
          const start6 = new Start(300, -10, 1.2, 1, 46)
          start6.create()
          const move = () => {
            ctx.clearRect(0, 0, width, 560)
            start1.move()
            start2.move()
            start3.move()
            start4.move()
            start5.move()
            start6.move()
            this.$route.path === '/' && setTimeout(move, 20)
          }
          move()
        }
      }
      const button = () => {
        const obj = document.getElementById('download')
        let lock = 0
        let hover = 0
        const buttonLight = () => {
          let x = -200
          return () => {
            if (lock === 0) {
              lock = 1
              const move = () => {
                if (x < 200) {
                  x += 10
                  obj.style.background = `linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3), transparent) no-repeat ${x}px 0/auto auto`
                  setTimeout(move, 10)
                } else {
                  obj.style.background = `linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3), transparent) no-repeat -200px 0/auto auto`
                  x = -200
                  lock = 0
                }
              }
              setTimeout(move, 0)
            }
          }
        }
        setTimeout(buttonLight(), 1000)
        obj.onmousemove = e => hover === 0 && buttonLight()() || (() => hover = 1)()
        obj.onmouseout = () => hover = 0
      }
      canvas()
      button()
    },
    mounted() {
      this.$store.commit('setMobile', mobileDevice())
      this.stage = document.getElementsByClassName('stage')[0]
      this.back = document.getElementsByClassName('back')[0]
      this.centerX = this.back.clientWidth / 2
      this.centerY = this.back.clientHeight / 2
      this.rotateX = 3 / this.centerX
      this.rotateY = 3 / this.centerY
    }
  }
</script>
