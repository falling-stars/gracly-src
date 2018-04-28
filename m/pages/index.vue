<style scoped>
  .stage{height:250px;user-select:none;margin-bottom: 30px}
  .back{top:0;left:0;background:url(../assets/images/index-back.jpg) no-repeat center/auto 250px;z-index:2}
  .text{left:0;top:0;z-index:3}
  h1{font-family:WaltDisneyScript,sans-serif;font-size:3.2rem;letter-spacing:2px;line-height:0.6}
  h2{font-size:0.45rem;letter-spacing:2px;margin-top:1.5rem}
  #download{border-radius:50px;margin-top:25px;border:solid 1px #fff;padding: 0.32rem 1.5rem;background:transparent linear-gradient(60deg,transparent,rgba(255,255,255,.3),rgba(255,255,255,.8),rgba(255,255,255,.3),transparent) no-repeat -200px 0/auto auto}
  canvas{left:0;top:0;z-index:2}
  .introduce{margin-bottom: 30px}
  .introduce>div{width:3.5rem;height:3.5rem}
  .circle{width:1.9rem;height:1.9rem;border-radius:50%;border:solid 1px #E6E6E6;margin:auto;transition:all .1s}
  .circle i{font-size:1rem}
  .circle:hover{border:solid 1px #C8C8C8}
  .sub-intro{margin-top: 3px}
</style>

<template>
  <div>
    <div class="stage full-width relative overflow-hide">
      <div class="back full-height full-width absolute"></div>
      <div class="text absolute text-center full-width full-height">
        <h1 class="block white normal">gracly</h1>
        <h2 class="block white normal">PWA渐进式前端框架</h2>
        <button id="download" class="pointer white font-16">立即下载</button>
      </div>
      <canvas class="absolute full-width full-height"></canvas>
    </div>
    <div class="introduce white-bg text-center flex flex-justify-around">
      <div v-for="(i, k) in introduce" v-if="k===0||k===1" class="text-center flex-child-noshrink">
        <div class="circle flex flex-center">
          <i :class=i.tag aria-hidden="true" class="grey"></i>
        </div>
        <span class="black-3 block font-15 black margin-top normal line-height-1_5">{{i.text1}}</span>
        <span class="sub-intro grey-9 block font-13 line-height-1_5">{{i.text2}}</span>
      </div>
    </div>
    <div class="introduce white-bg text-center flex flex-justify-around">
      <div v-for="(i, k) in introduce" v-if="k===2||k===3" class="text-center flex-child-noshrink">
        <div class="circle flex flex-center">
          <i :class=i.tag aria-hidden="true" class="grey"></i>
        </div>
        <span class="black-3 block font-15 black margin-top normal line-height-1_5">{{i.text1}}</span>
        <span class="sub-intro grey-9 block font-13 line-height-1_5">{{i.text2}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      introduce: [
        {text1: '低耦合组件库', text2: '更优雅地引入', tag: 'fa fa-gears'},
        {text1: '轻量核心驱动', text2: '很轻很强大', tag: 'fa fa-snowflake-o'},
        {text1: '函数式基础库', text2: '并行提升性能', tag: 'fa fa-paper-plane-o'},
        {text1: '交互体验提升', text2: '极致的体验', tag: 'fa fa-gg'}
      ],
      stage: null,
      back: null,
      centerX: 0,
      centerY: 0,
      rotateX: 0,
      rotateY: 0
    }),
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
          const ID = requestAnimationFrame(move)
          this.$route.path !== '/' && cancelAnimationFrame(ID)
        }
        move()
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
                  requestAnimationFrame(move)
                } else {
                  obj.style.background = `linear-gradient(60deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3), transparent) no-repeat -200px 0/auto auto`
                  x = -200
                  lock = 0
                }
              }
              move()
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
      this.stage = document.getElementsByClassName('stage')[0]
      this.back = document.getElementsByClassName('back')[0]
      this.centerX = this.back.clientWidth / 2
      this.centerY = this.back.clientHeight / 2
      this.rotateX = 3 / this.centerX
      this.rotateY = 3 / this.centerY
    }
  }
</script>
