<template>
  <div>
    <div class="head fixed black-bg full-width text-center relative">
      <span class="white inline-block full-height">gracly</span>
      <div class="menu absolute flex flex-justify-around flex-align-center pointer" @click="menu=!menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="content flex-child-grow line-height-1_5 flex-child-noshrink border-box full-width">
      <h1 class="h1">基本用法</h1>
      <h2 class="h2" id="into">引入</h2>
      我们将基础库和组件库分开形成 <span class="tip0">base.js</span> 和 <span class="tip0">component.js</span> 两个文件,在使用过程中可以自行决定是否使用自带的组件库
      <h3 class="h3">使用静态文件：</h3>
      <div class="code">
        &lt;head&gt;
        <br>
        &lt;meta charset="UTF-8"&gt;
        <br>
        &lt;title>gracly&lt;/title&gt;
        <br>
        &lt;link rel="stylesheet" href="gracly/css/gracly.css"&gt;
        <br>
        &lt;/head&gt;
        <br>
        &lt;body&gt;
        <br>
        <span class="note">&lt;!---------&gt;</span>
        <br>
        &lt;script src="gracly/base.js">&lt;/script&gt;
        <br>
        <span class="note">&lt;!--需要使用组件时引入--&gt;</span>
        <br>
        &lt;script src="gracly/component.js">&lt;/script&gt;
        <br>
        &lt;/body&gt;
      </div>
      <h3 class="h3">使用 npm：</h3>
      <div class="code">
        npm install gracly -save
        <br>
        import { <span class="tip0">query</span> } from 'gracly/base'
        <br>
        import { <span class="tip0">GraRoute</span> } from 'gracly/component'
        <br>
        <br>
        <span class="note">//base内置DOM选择器</span>
        <br>
        <span class="tip0">query</span>('.demo'[1], 'div')
        <br>
        <br>
        <span class="note">//基于History的单页面组件</span>
        <br>
        const <span class="tip0">route</span> = new <span class="tip0">GraRoute</span>(
        <br>
        [
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;{
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: '/',
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: { age: 32 },
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callBack: state => console.log( state.age )
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;},
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;{
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url: '/start',
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: { age: 988 },
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callBack: state => console.log( state.age )
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;}
        <br>
        ], false)
      </div>
      <h2 class="h2" id="example">实例</h2>
      <h3 class="h3">运用伪柯里化函数<span class="tip0">currying_</span>实现DOM选择器：</h3>
      <div class="code">
        <span class="note">//模块化需要引入{ query }</span>
        <br>
        import { <span class="tip0">currying_</span>, <span class="tip0">for_</span> } from 'gracly/base'
        <br>
        <br>
        <span class="note">//定于前后两个参数之间的运算及其返回值</span>
        <br>
        <span class="note">//第二个参数除了传入id以外都将返回a.getElementBy...(b)的结果</span>
        <br>
        const <span class="tip0">elFun</span> = (<span class="tip0">a</span>, <span class="tip0">b</span>) => {
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;if (<span class="tip0">b</span>.substr(0, 1) === '#') {
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return document.getElementById(<span class="tip0">b</span>.substr(1))
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;} else if (<span class="tip0">b</span>.substr(0, 1) === '.') {
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <span class="tip0">a</span>.getElementsByClassName(<span class="tip0">b</span>.substr(1).replace(/\[\d+]/g, ''))[getIndex(<span class="tip0">b</span>)]
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;} else {
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return <span class="tip0">a</span>.getElementsByTagName(<span class="tip0">b</span>.replace(/\[\d+]/g, ''))[getIndex(<span class="tip0">b</span>)]
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;}
        <br>
        }
        <br>
        <br>
        <span class="note">//设置如何处理第一个参数</span>
        <br>
        const <span class="tip0">elInit</span> = <span class="tip0">a</span> => {
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;if (<span class="tip0">a</span>.substr(0, 1) === '#') {
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return document.getElementById(<span class="tip0">a</span>.substr(1))
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;} else if (<span class="tip0">a</span>.substr(0, 1) === '.') {
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return document.getElementsByClassName(<span class="tip0">a</span>.substr(1).replace(/\[\d+]/g, ''))[getIndex(<span class="tip0">a</span>)]
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;} else {
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return document.getElementsByTagName(<span class="tip0">a</span>.replace(/\[\d+]/g, ''))[getIndex(<span class="tip0">a</span>)]
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;}
        <br>
        }
        <br>
        <br>
        <span class="note">//柯里化结合</span>
        <br>
        const <span class="tip0">getElement</span> = <span class="tip0">currying_</span>(<span class="tip0">elFun</span>, <span class="tip0">elInit</span>)
        <br>
        <br>
        <span class="note">//运行getElement</span>
        <br>
        getElement('div')('.item')()
        <br>
        <span class="note">&gt;&gt;获得第一个div下的第一个class为item的元素</span>
        <br>
        <br>
        getElement('div[1]')('.item')('button')()
        <br>
        <span class="note">&gt;&gt;获得第二个div下的第一个class为item的元素下的第一个buttom</span>
        <br>
        <br>
        <span class="note">//优化选择器调用形式</span>
        <br>
        const <span class="tip0">query</span> = <span class="tip0">queryStr</span> => {
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;const args = <span class="tip0">queryStr</span>.split(' ')
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;let <span class="tip0">get</span> = null
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="tip0">for_</span>(args, (i, k) => k === 0 && (<span class="tip0">get</span> = <span class="tip0">getElement</span>(i)) || <span class="tip0">get</span>(i))
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;return <span class="tip0">get</span>()
        <br>
        }
        <br>
        <span class="tip0">query</span>('div[1] .item button[0]')
        <br>
        <br>
        <br>
        <span class="note">//上述的query在base里面已经存在，可以直接调用</span>
      </div>
      <h3 class="h3">使用组件示例：</h3>
      <div class="code">
        import { <span class="tip0">query</span> } from 'gracly/base''
        <br>
        import { <span class="tip0">GraPage</span> } from 'gracly/component''
        <br>
        new <span class="tip0">GraPage</span>(<span class="tip0">query</span>('#page'), {
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;total: 100,
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;show: 11
        <br>
        }, <span class="tip0">value</span> => console.log(<span class="tip0">value</span>))
      </div>
      <h3 class="h3">组件效果：</h3>
      <div class="code" id="page"></div>
    </div>
    <Popup v-model="menu" position="right" :modal="false">
      <IndexList>
        <IndexSection index="A">
          <Cell title="Aaron"></Cell>
          <Cell title="Alden"></Cell>
          <Cell title="Austin"></Cell>
          <Cell title="Austin"></Cell>
          <Cell title="Austin"></Cell>
          <Cell title="Austin"></Cell>
          <Cell title="Austin"></Cell>
          <Cell title="Austin"></Cell>
          <Cell title="Austin"></Cell>
          <Cell title="Austin"></Cell>
          <Cell title="Austin"></Cell>
        </IndexSection>
        <IndexSection index="B">
          <Cell title="Baldwin"></Cell>
          <Cell title="Braden"></Cell>
          <Cell title="Braden"></Cell>
          <Cell title="Braden"></Cell>
          <Cell title="Braden"></Cell>
        </IndexSection>
        <IndexSection index="C">
          <Cell title="Caldwin"></Cell>
          <Cell title="Craden"></Cell>
          <Cell title="Craden"></Cell>
          <Cell title="Ccraden"></Cell>
          <Cell title="Csraden"></Cell>
        </IndexSection>
        <IndexSection index="D">
          <Cell title="Caldwin"></Cell>
          <Cell title="Craden"></Cell>
          <Cell title="Craden"></Cell>
          <Cell title="Ccraden"></Cell>
          <Cell title="Csraden"></Cell>
        </IndexSection>
        <IndexSection index="Z">
          <Cell title="Zack"></Cell>
          <Cell title="Zane"></Cell>
        </IndexSection>
      </IndexList>
    </Popup>
    <up></up>
  </div>
</template>

<script>
  import up from '~/components/up'
  import {scrollEvent, query} from '~/assets/gracly/npm/base'
  import {GraPage} from '~/assets/gracly/npm/component'
  import '~/assets/gracly/css/gracly.css'
  import { Popup, IndexList, IndexSection, Cell } from 'mint-ui'

  export default {
    components: {up, Popup, IndexList, IndexSection, Cell},
    data: () => ({
      list: [
        {
          text: '基础库',
          url: '#into',
          child: [{text: '伪柯里化', url: '#into', select: true}, {text: 'DOM选择器', url: '#into', select: false}]
        },
        {
          text: '组件库',
          url: '#example',
          child: [{text: '单页', url: '#into', select: false}, {text: '分页', url: '#into', select: false}]
        }
      ],
      menu: false,
      search: ''
    }),
    methods: {
      select(e) {
        const target = e.target
        if (target.tagName === 'A' && target.parentNode.classList.contains('li-obj')) {
          const select = document.getElementsByClassName('liSelect')
          select.length > 0 && select[0].classList.remove('liSelect')
          target.parentNode.classList.add('liSelect')
        }
      }
    },
    created() {},
    activated() {
      const self = this
      self.menu = false
      scrollEvent([
        {
          top: 50,
          up: {
            callback: () => {
              self.isStatic = true
              self.isFixed = false
            },
            repeat: true
          },
          down: {
            callback: () => {
              self.isStatic = false
              self.isFixed = true
            },
            repeat: true
          }
        },
        {
          top: 950,
          up: {
            callback: () => {
              self.list[0].select = true
              self.list[1].select = false
            },
            repeat: true
          },
          down: {
            callback: () => {
              self.list[0].select = false
              self.list[1].select = true
            },
            repeat: true
          }
        }
      ])
    },
    mounted() {
      Array.prototype.map.call(document.getElementsByClassName('code'), i => {
        let html = i.innerHTML
        html = html.replace(/rel/g, '<span class="tip2">rel</span>')
        html = html.replace(/charset/g, '<span class="tip2">charset</span>')
        html = html.replace(/href/g, '<span class="tip2">href</span>')
        html = html.replace(/src/g, '<span class="tip2">src</span>')
        html = html.replace(/import/g, '<span class="tip1">import</span>')
        html = html.replace(/from/g, '<span class="tip1">from</span>')
        html = html.replace(/const/g, '<span class="tip2">const</span>')
        html = html.replace(/let/g, '<span class="tip2">let</span>')
        html = html.replace(/var/g, '<span class="tip2">var</span>')
        html = html.replace(/ = /g, '<span class="tip2"> = </span>')
        html = html.replace(/ === /g, '<span class="tip2"> === </span>')
        html = html.replace(/link/g, '<span class="tip2">link</span>')
        html = html.replace(/script/g, '<span class="tip2">script</span>')
        html = html.replace(/=&gt;/g, '<span class="tip2">=&gt;</span>')
        html = html.replace(/if/g, '<span class="tip2">if</span>')
        html = html.replace(/else/g, '<span class="tip2">else</span>')
        html = html.replace(/new/g, '<span class="tip3">new</span>')
        html = html.replace(/true/g, '<span class="tip3">true</span>')
        html = html.replace(/false/g, '<span class="tip3">false</span>')
        html = html.replace(/npm/g, '<span class="tip4">npm</span>')
        html = html.replace(/install/g, '<span class="tip4">install</span>')
        html = html.replace(/return/g, '<span class="tip4">return</span>')
        html = html.replace(/\(/g, '( ')
        html = html.replace(/\)/g, ' )')
        i.innerHTML = html
      })
      new GraPage(query('#page'), {
        total: 100,
        show: 11
      }, value => console.log(value))
    },
    watch: {
      menu(newValue) {
        if (newValue) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'visible'
        }
      }
    }
  }
</script>

<style scoped>
  .head{top: 0;left: 0;height: 46px;z-index: 999}
  .head span{font-family:WaltDisneyScript,sans-serif;line-height: 32px;font-size: 35px}
  .menu{width:0.9rem;height: 46px;right: 0;top: 0;padding-right: 0.3rem}
  .menu div{width: 0.145rem;height: 0.145rem;background-color: white;border-radius: 50%}
  .mint-popup-right{width: 10rem;height:calc(100% - 102px);top:calc(50% - 5px);z-index: 1024}
  .h1{font-size: 0.5rem}
  .h2{font-size: 0.45rem}
  .h3{font-size: 0.45rem}
  .content{padding: 0.45rem 0.5rem;color: black;margin-top: 46px}
  .code{padding: 0.5rem;white-space: nowrap;max-width:8rem;overflow: auto}
</style>