<style scoped>
  .head{height: 46px;border-bottom: solid 1px #dfdfdf}
  .hub{padding:0.2rem;background-color:#F5F5F5}
  .user i{font-size: 30px}
  .login{flex-basis: 3.8rem}
  .login *{cursor: pointer}
  .login i{font-size: 22px}
  .login button{border:none;padding: 7px 15px;border-radius: 15px;font-size: 14px;background-color:#9c9c9c;color:white}
  .li-obj{margin-right: 0.25rem}
  .li-obj a{line-height: 46px;padding: 0 20px}
  .fa-weixin{color:#5FB878}
  .fa-weibo{color:#c80f1e}
  .liSelect:after{content:'';position:absolute;width:100%;height:3px;bottom:0;left:0;display:inline-block;background-color:#00bc9b}
  .right{flex-basis: 5rem;margin-left: 0.2rem}
  .tagLink{padding: 5px 10px;border-radius: 30px}
  .tagLink:hover{background-color: #1E9FFF;color: white}
  .activeLink{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;max-width: 4rem;margin: 6px 10px;height: 16px}
  .activeLink span{margin-left: 3px}
  .activeLink:hover span{color:#FF5722}
  section img{width: 1rem;height: 1rem}
</style>
<template>
  <div>
    <div class="head flex flex-justify-between white-bg">
      <ul class="flex-child-grow padding-left flex-child-noshrink">
        <li class="li-obj inline-block full-height relative" v-for="i in ulList" :class="{liSelect:i.select}">
          <router-link class="inline-block full-height" :to="i.url">{{i.text}}</router-link>
        </li>
      </ul>
      <div class="user flex-child-noshrink flex flex-align-center margin-right">
        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
      </div>
      <div class="login full-height flex flex-align-center flex-justify-between flex-child-noshrink padding-right margin-left">
        <button>登录</button>
        <button>注册</button>
        <i class="fa fa-weixin" aria-hidden="true"></i>
        <i class="fa fa-weibo" aria-hidden="true"></i>
        <i class="fa fa-github" aria-hidden="true"></i>
      </div>
    </div>
    <div class="hub flex flex-justify-between">
      <div class="left flex-child-grow flex-child-noshrink white-bg">1</div>
      <div class="right flex-child-noshrink">
        <div class="white-bg">
          <div class="flex flex-justify-between padding border-bottom">
            <h2>热门标签</h2>
            <router-link to="/" class="font-12 blue">查看更多</router-link>
          </div>
          <div class="padding">
            <router-link class="tagLink inline-block grey-e-bg margin font-12" v-for="i in hotTag" :to="i.url">
              {{i.text}}
            </router-link>
          </div>
        </div>
        <div class="white-bg margin-top">
          <div class="flex flex-justify-between padding border-bottom">
            <h2>近期活动</h2>
            <router-link to="/" class="font-12 blue">查看更多</router-link>
          </div>
          <div class="padding">
            <router-link class="activeLink block margin font-13 line-height-1_2" v-for="i in hotActive" :to="i.url">
              <i v-if="i.hot" class="fa fa-fire orange" aria-hidden="true"></i>
              <span :style="{marginLeft:`${i.hot?3:17}px`}">{{i.text}}</span>
            </router-link>
          </div>
        </div>
        <div class="white-bg margin-top">
          <div class="flex flex-justify-between padding border-bottom">
            <h2>精选推荐</h2>
            <router-link to="/" class="font-12 blue">查看更多</router-link>
          </div>
          <div class="padding flex-wrap">
            <router-link class="activeLink block font-13 line-height-1_2" v-for="i in recommend" :to="i.url">
              <i v-if="i.type === 'share'" class="fa fa-share-alt" aria-hidden="true"></i>
              <i v-if="i.type === 'book'" class="fa fa-book" aria-hidden="true"></i>
              <i v-if="i.type === 'code'" class="fa fa-git" aria-hidden="true"></i>
              <span>{{i.text}}</span>
            </router-link>
          </div>
        </div>
        <div class="white-bg margin-top">
          <div class="flex flex-justify-between padding border-bottom">
            <h2>关注我们</h2>
          </div>
          <div class="padding flex-wrap">
            <section>
              <img src="https://gold-cdn.xitu.io/v3/static/img/welcome.6f27533.png"/>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      ulList: [
        {text: '首页', url: '#', select: true},
        {text: '分享', url: '#', select: false},
        {text: '提问', url: '#', select: false},
        {text: '公告', url: '#', select: false}
      ],
      hotTag: [
        {text: 'ES7', url: 'es6'},
        {text: 'ES6', url: 'es6'},
        {text: 'WebAssimbly', url: 'WebAssimbly'},
        {text: 'PWA', url: 'PWA'},
        {text: 'Vue', url: 'es6'},
        {text: 'React', url: 'es6'},
        {text: 'SSR', url: 'SSR'},
        {text: '区块链', url: 'block-link'},
        {text: 'Node', url: 'node'},
        {text: '虚拟DOM', url: 'virtual-dom'},
        {text: '高性能', url: 'high-performance'},
        {text: '人工智能', url: ''},
        {text: '大数据', url: 'high-performance'}
      ],
      hotActive: [
        {text: 'JS未来展望广州圆桌会议', url: 'es6', hot: true},
        {text: 'W3C中国会员统一见面会W3C中国会员统一见面会W3C中国会员统一见面会', url: 'w3c', hot: true},
        {text: 'W3C中国会员统一见面会', url: 'w3c', hot: false},
        {text: 'W3C中国会员统一见面会', url: 'w3c', hot: false},
        {text: 'W3C中国会员统一见面会', url: 'w3c', hot: true}
      ],
      recommend: [
        {text: '好书推荐-你不知道的JavaScript（下卷）', url: 'es6', type: 'book'},
        {text: '从零开始搭建Vue-ssr系列', url: 'w3c', type: 'share'},
        {text: 'W3C中国会员统一见面会', url: 'w3c', type: 'book'},
        {text: 'Google开源机器学习库TensorFlow', url: 'w3c', type: 'code'},
        {text: 'W3C中国会员统一见面会', url: 'w3c', type: 'book'}
      ]
    })
  }
</script>