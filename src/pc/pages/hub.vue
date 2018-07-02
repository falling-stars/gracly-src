<style scoped>
  .hub{padding:0.2rem;background-color:#F5F5F5}
  .menu{flex-basis: 250px;background-color:#F5F5F5}
  .menu>div{margin-bottom: 0.2rem}
  .left{margin-left: 0.2rem}
  .li-obj{margin-right: 0.25rem}
  .li-obj a{line-height: 46px;padding: 0 20px}
  .liSelect:after{content:'';position:absolute;width:100%;height:3px;bottom:0;left:0;display:inline-block;background-color:#00bc9b}
  .right{flex-basis:300px;margin-left: 0.2rem}
  .tagLink{padding: 5px  10px 6px 10px;border-radius: 30px}
  .tagLink:hover{background-color: #1E9FFF;color: white}
  .activeLink{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;max-width: 4rem;margin: 6px 10px;height: 16px}
  .activeLink span{margin-left: 3px}
  .activeLink:hover span{color:#FF5722}
  section img{width: 1rem;height: 1rem}
  .left-title{padding: 6px 10px 16px 10px}
  .obj{padding-bottom: 15px;padding-top: 14px}
  .thumb{border: solid 1px #dfdfdf;border-radius: 3px;padding: 3px 8px}
  .thumb i{font-size: 22px;line-height: 10px;margin-bottom: 5px}
  .tag{border-radius: 2px;padding: 2px 5px 3px 5px;color: #009688}
  .tag:hover{color: white;background-color: #009688}
  .link:hover{text-decoration: underline;color: #009688}
  .start-num{margin-left: 2px}
  .user-head{border-radius: 50%;background-color: #00A095;width: 19px;height: 19px;border: none}
  .user-container{margin-top: 9px}
  .user-name{margin-left: 1px;color:#009a61}
  .fa-comments{color: #009a61}
  .classifyLink{margin-bottom: 8px;height: 25px}
  .classifyLink i{width: 25px}
  .classifyLink span{padding-left: 4px;line-height: 25px}
  .classifyLink:hover span{color: #009a61}
  .WebPack{background:url('../assets/images/webpack.png') center/25px auto no-repeat}
  .Vue{background:url('../assets/images/vue.png') center/22px auto no-repeat}
  .React{background:url('../assets/images/react.png') center/23px auto no-repeat}
  .Html5{background:url('../assets/images/h5.png') center/22px auto no-repeat}
  .JavaScript{background:url('../assets/images/js.png') center/24px auto no-repeat}
  .Angular{background:url('../assets/images/angular.png') center/22px auto no-repeat}
  .Node{background:url('../assets/images/node.png') center/25px auto no-repeat}
</style>

<template>
  <div>
    <login :loginShow="loginShow" @loginClose="loginClose"></login>
    <hubHead @loginShow="loginShow= true"></hubHead>
    <div class="hub flex flex-justify-between">
      <div class="menu flex-child-noshrink white-bg overflow-hide">
        <div class="announcement flex flex-col white-bg">
          <div class="full-width flex flex-justify-between border-bottom padding border-box">
            <h2>公告</h2>
            <router-link to="/" class="font-12 blue">查看更多</router-link>
          </div>
          <div>
            <div class="padding">
              <router-link class="activeLink block font-13 line-height-1_2" v-for="i in recommend" :key="i.url" :to="i.url">
                <i v-if="i.type === 'share'" class="fa fa-share-alt" aria-hidden="true"></i>
                <i v-if="i.type === 'book'" class="fa fa-book" aria-hidden="true"></i>
                <i v-if="i.type === 'code'" class="fa fa-git" aria-hidden="true"></i>
                <span>{{i.text}}</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="classify flex flex-col white-bg">
          <div class="full-width flex flex-justify-between border-bottom padding border-box">
            <h2>分类板块</h2>
            <router-link to="/" class="font-12 blue">查看更多</router-link>
          </div>
          <div>
            <div class="padding">
              <router-link class="classifyLink font-13 line-height-1_2 flex flex-align-center" v-for="i in classify" :key="i.url" :to="i.url">
                <i :class="i.text" class="inline-block full-height"></i>
                <span class="inline-block full-height font-16">{{i.text}}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="left flex-child-grow white-bg flex-child-noshrink">
        <div class="white-bg padding full-width border-box">
          <div class="left-title flex flex-justify-between border-bottom">
            <h2>推荐</h2>
            <router-link to="/" class="font-12 blue">如何获得推荐？</router-link>
          </div>
          <div class="top-container full-width border-box">
            <div class="obj flex border-bottom" v-for="i in top">
              <div class="thumb flex flex-col flex-align-center pointer margin-right margin-left">
                <i class="fa fa-caret-up grey-9" aria-hidden="true"></i>
                <span class="font-14 grey line-height-1_5">{{i.thumb}}</span>
              </div>
              <div class="flex flex-col flex-justify-center flex-child-grow">
                <div>
                  <router-link class="link font-14 bold black" :to="i.url">{{i.text}}</router-link>
                  <span class="tag margin-right font-10 normal border-box pointer grey-e-bg" v-for="t in i.tag">{{t}}</span>
                  <i class="fa fa-star red" aria-hidden="true"></i><span class="start-num font-13">{{i.start}}</span>
                </div>
                <div class="user-container">
                  <img class="user-head" src="../assets/demo.jpeg"/>
                  <span class="user-name font-12 pointer">{{i.user}}</span>
                  <span class="font-10 grey-6 margin-left">{{i.date}}</span>
                  <i class="fa fa-comments grey-6 font-13 margin-left" aria-hidden="true"></i>
                  <span class="font-10 grey-6">{{i.comment}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="white-bg padding full-width border-box">
          <div class="left-title flex flex-justify-between border-bottom">
            <h2>推荐</h2>
            <router-link to="/" class="font-12 blue">如何获得推荐？</router-link>
          </div>
          <div class="top-container full-width border-box">
            <div class="obj flex border-bottom" v-for="i in top">
              <div class="thumb flex flex-col flex-align-center pointer margin-right margin-left">
                <i class="fa fa-caret-up grey-9" aria-hidden="true"></i>
                <span class="font-14 grey line-height-1_5">{{i.thumb}}</span>
              </div>
              <div class="flex flex-col flex-justify-center flex-child-grow">
                <div>
                  <router-link class="link font-14 bold black" :to="i.url">{{i.text}}</router-link>
                  <span class="tag margin-right font-10 normal border-box pointer grey-e-bg" v-for="t in i.tag">{{t}}</span>
                  <i class="fa fa-star red" aria-hidden="true"></i><span class="start-num font-13">{{i.start}}</span>
                </div>
                <div class="user-container">
                  <img class="user-head" src="../assets/demo.jpeg"/>
                  <span class="user-name font-12 pointer">{{i.user}}</span>
                  <span class="font-10 grey-6 margin-left">{{i.date}}</span>
                  <i class="fa fa-comments grey-6 font-13 margin-left" aria-hidden="true"></i>
                  <span class="font-10 grey-6">{{i.comment}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right flex-child-noshrink">
        <div class="white-bg">
          <div class="flex flex-justify-between padding border-bottom">
            <h2>热门标签</h2>
            <router-link to="/" class="font-12 blue">查看更多</router-link>
          </div>
          <div class="padding">
            <router-link class="tagLink inline-block grey-e-bg margin font-12" v-for="i in hotTag" :key="i.url" :to="i.url">
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
            <router-link class="activeLink block margin font-13 line-height-1_2" v-for="i in hotActive" :key="i.url" :to="i.url">
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
            <router-link class="activeLink block font-13 line-height-1_2" v-for="i in recommend" :key="i.url" :to="i.url">
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
  import login from '../components/login'
  import hubHead from '../components/hubHead'
  export default {
    components: {login, hubHead},
    data: () => ({
      loginShow: false,
      ulList: [
        {text: '首页', url: '#1', select: true},
        {text: '分享', url: '#2', select: false},
        {text: '提问', url: '#3', select: false},
        {text: '公告', url: '#4', select: false}
      ],
      hotTag: [
        {text: 'ES7', url: 'es61'},
        {text: 'ES6', url: 'es62'},
        {text: 'WebAssimbly', url: 'WebAssimbly'},
        {text: 'PWA', url: 'PWA'},
        {text: 'Vue', url: 'es6'},
        {text: 'React', url: 'es66'},
        {text: 'SSR', url: 'SSR'},
        {text: '区块链', url: 'block-link'},
        {text: 'Node', url: 'node'},
        {text: '虚拟DOM', url: 'virtual-dom'},
        {text: '高性能', url: 'high-performance'},
        {text: '人工智能', url: ''},
        {text: '大数据', url: 'high-performance1'}
      ],
      hotActive: [
        {text: 'JS未来展望广州圆桌会议', url: 'es6', hot: true},
        {text: 'W3C中国会员统一见面会W3C中国会员统一见面会W3C中国会员统一见面会', url: 'w3c', hot: true},
        {text: 'W3C中国会员统一见面会', url: 'w3c1', hot: false},
        {text: 'W3C中国会员统一见面会', url: 'w3c2', hot: false},
        {text: 'W3C中国会员统一见面会', url: 'w3c3', hot: true}
      ],
      recommend: [
        {text: '好书推荐-你不知道的JavaScript（下卷）', url: 'es6', type: 'book'},
        {text: '从零开始搭建Vue-ssr系列', url: 'w3c', type: 'share'},
        {text: 'W3C中国会员统一见面会', url: 'w3c1', type: 'book'},
        {text: 'Google开源机器学习库TensorFlow', url: 'w3c2', type: 'code'},
        {text: 'W3C中国会员统一见面会', url: 'w3c3', type: 'book'}
      ],
      top: [
        {
          text: '好书推荐-你不知道的JavaScript（下卷）',
          tag: ['好书推荐', 'JavaScript'],
          thumb: 43,
          url: 'es61',
          user: '刘建华',
          date: '2018-04-11',
          comment: 32,
          start: 1309
        },
        {
          text: '好书推荐-你不知道的JavaScript（下卷）',
          tag: ['好书推荐', 'ES6', 'webpack'],
          thumb: 43,
          url: 'es62',
          user: '刘建华',
          date: '2018-04-11',
          comment: 32,
          start: 12
        },
        {
          text: '好书推荐-你不知道的JavaScript（下卷）',
          tag: ['好书推荐', 'JavaScript'],
          thumb: 44,
          url: 'es63',
          user: '刘建华',
          date: '2018-04-11',
          comment: 32,
          start: 43
        },
        {
          text: '好书推荐-你不知道的JavaScript（下卷）',
          tag: ['好书推荐', 'JavaScript'],
          thumb: 43,
          url: 'es64',
          user: '刘建华',
          date: '2018-04-11',
          comment: 32,
          start: 22
        },
        {
          text: '好书推荐-你不知道的JavaScript（下卷）',
          tag: ['好书推荐', 'JavaScript'],
          thumb: 43,
          url: '/hub/es65',
          user: '刘建华',
          date: '2018-04-11',
          comment: 32,
          start: 22
        }
      ],
      classify: [
        {text: 'Html5', url: '1'},
        {text: 'JavaScript', url: '2'},
        {text: 'React', url: '3'},
        {text: 'Vue', url: '4'},
        {text: 'Angular', url: '5'},
        {text: 'WebPack', url: '6'},
        {text: 'Node', url: '7'}
      ]
    }),
    methods: {
      loginClose() {
        this.loginShow = false
      }
    },
    watch: {
      loginShow(newValue) {
        if (newValue) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'visible'
        }
      }
    }
  }
</script>