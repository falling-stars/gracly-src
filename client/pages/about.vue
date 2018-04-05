<style scoped>
  .h1{font-family:WaltDisneyScript,sans-serif;user-select: none}
  .h1 span{font-size: 2rem;font-weight: normal;line-height: 0}
  .user {border-radius: 50%;width: 1.4rem;height: 1.4rem;opacity: 0.9;border: solid 3px #dfdfdf;padding: 3px;user-select: none}
  .user-div:after,.user-div:before{content: '';position: absolute;width: calc(50% - 0.7rem);height: 2px;background-color: #dfdfdf}
  .user-div:before{bottom:30px;left: 4px}
  .user-div:after{bottom:30px;right: 4px}
</style>
<template>
  <div id="about" class="padding">
    <h1 class="h1 text-center margin-top margin-bottom"><span class="orange">g</span><span class="orange-yellow">r</span><span class="yellow">a</span><span class="light-green">c</span><span class="blue">l</span><span class="light-purple">y</span></h1>
    <div class="user-div padding text-center relative">
      <img class="user" src="../assets/images/user.jpeg"/>
    </div>
    <div class="introduce padding font-15 line-height-1_5">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2009年AngularJS诞生，跟随其后的React，Vue等MVVM框架开始改变前端开发的方式，将浏览器端渲染推向了极致。SPA概念的引入坚定了Web即应用的思维，但随之而来的是前端代码越来越多，逻辑越来越复杂的情况。 如何提高代码的可维护性？如何规划项目结构？如何提高前端性能？前端也开始产生了一种叫做架构的东西。
    </div>
    <div class="introduce padding font-15 line-height-1_5">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;于是我们为了成为一个合格的前端工程师开始学习主流技术，以Vue为例，我们将官方文档看完以后发现了单页面很有意思-<span class="tip2">入坑VueRouter</span>，组件间传递状态很麻烦想换个方式-<span class="tip2">入坑Vuex</span>，想使用命令行来简化Vue的构建-<span class="tip2">入坑Vie-cli</span>，ajax请求？尤大大推荐了<span class="tip2">Axios</span>，那就去学吧。模块化开发是架构的基础，Vue的单文件开发很不错，what？需要学<span class="tip2">Webpack</span>？那么<span class="tip2">Node.js</span>也要了解吧？
    </div>
  </div>
</template>

<script>
  export default {}
</script>
