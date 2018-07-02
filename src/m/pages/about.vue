<style scoped>
  .h1{font-family:WaltDisneyScript,sans-serif;user-select: none}
  .h1 span{font-size: 2rem;font-weight: normal;line-height: 0}
  .user {border-radius: 50%;width: 1.4rem;height: 1.4rem;opacity: 0.9;border: solid 3px #dfdfdf;padding: 3px;user-select: none}
  .user-div:after,.user-div:before{content: '';position: absolute;width: calc(50% - 0.7rem);height: 2px;background-color: #dfdfdf}
  .user-div:before{bottom:30px;left: 4px}
  .user-div:after{bottom:30px;right: 4px}
  .introduce{padding-left: 20px;padding-right: 20px;padding-bottom: 10px}
  .split{position: relative;height: 84px;overflow: hidden;margin-top: 30px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNDM4RkVGMEE1QjYxMUU3OEJDRUVFNjY1MTE1MkVDRSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNDM4RkVFRkE1QjYxMUU3OEJDRUVFNjY1MTE1MkVDRSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE3LTA5LTI0VDIzOjEwOjI4KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxNy0xMC0xMFQwODowNToxMCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxNy0xMC0xMFQwODowNToxMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowM0YxRjkxQTVFMjAxMUU1OEIyRkI3NzhGRUQ3QjhDRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowM0YxRjkxQjVFMjAxMUU1OEIyRkI3NzhGRUQ3QjhDRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnDUdDAAAAAVSURBVHjaYmBgYJBiwAOkCHMAAgwADXgAaYliMEgAAAAASUVORK5CYII=)}
  .split:after{position: absolute;content: '';width: 100%;top: -30px;left:48%;height: 80px;background-color: #5FB878;transform: rotate(5deg)}
  .split:before{position: absolute;content: '';width: 100%;top: -30px;left:-48%;height: 80px;background-color: #FFB800;transform: rotate(-5deg)}
  #author:after,#author:before{background-color: #f5f5f5}
</style>
<template>
  <div id="about">
    <h1 class="h1 text-center margin-top margin-bottom"><span class="orange">g</span><span class="orange-yellow">r</span><span class="yellow">a</span><span class="light-green">c</span><span class="blue">l</span><span class="light-purple">y</span></h1>
    <div class="user-div padding text-center relative">
      <img class="user" src="../assets/images/user.jpeg"/>
    </div>
    <div class="introduce font-15 line-height-1_5">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2009年AngularJS诞生，跟随其后的React，Vue等MVVM框架开始改变前端开发的方式，将浏览器端渲染推向了极致。SPA概念的引入坚定了Web即应用的思维，但随之而来的是前端代码越来越多，逻辑越来越复杂的情况。 如何提高代码的可维护性？如何规划项目结构？如何提高前端性能？前端也开始产生了一种叫做架构的东西。
    </div>
    <div class="introduce font-15 line-height-1_5">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;于是我们为了成为一个合格的前端工程师开始学习主流技术，以Vue为例，我们将官方文档看完以后发现了单页面很有意思-<span class="tip2">入坑VueRouter</span>，组件间传递状态很麻烦想换个方式-<span class="tip2">入坑Vuex</span>，想使用命令行来简化Vue的构建-<span class="tip2">入坑Vie-cli</span>，ajax请求？尤大大推荐了<span class="tip2">Axios</span>，那就去学吧。模块化开发是架构的基础，Vue的单文件开发很不错，what？需要学<span class="tip2">Webpack</span>？那么<span class="tip2">Node.js</span>也要了解吧？
    </div>
    <div class="introduce font-15 line-height-1_5">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;果然一入前端深似海！在技术日新月异的今天，我们要随时保持学习才不至于被技术发展的列车甩下。但是能达到我上述标准的人并不占大多数（<span class="tip2" style="text-decoration: underline;">如果你达到了上述标准，请忽略这个框架的存在，因为这个框架的作用是帮助那些还没达到标准的开发者</span>），还有很多的二线，三线城市的前端工程师们可以因为公司技术更新速度慢或者学习成本的问题没有跟上，而gracly的初衷就在这里。想象一下我们实现一个单页面应用和模板渲染可以不用去学习React或者是Vue，而且我们所使用的东西可以很轻易地用原生JS来进行扩展或者实现，多么美好！
    </div>
    <div class="introduce font-15 line-height-1_5">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gracly把常用的一些功能例如单页面，ajx，文件上传预览和进度显示，分页等等功能分离为单独的组件。用函数式编程的思想构建了基础库，在这个OOP横行的时代虽然有点不入大流，但我坚信在未来为了提高Web应用的性能有可能设计到多线程或者并行计算的时候，我们可以利用函数式编程编写出更简洁和更高性能的代码。
    </div>
    <div class="split"></div>
    <div id="author" class="user-div padding text-center relative" style="margin-top: -90px">
      <img class="user" src="../assets/images/user.jpeg"/>
    </div>
    <div class="text-center margin-top margin-bottom font-20"><h1>关于作者</h1></div>
    <div class="introduce font-15 line-height-1_5">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;刘建华，云南人，目前就读于云南农业大学计科系大四，推崇原生JS，<a class="blue" href="https://baike.baidu.com/item/%E9%98%BF%E7%89%B9%E4%BC%8D%E5%BE%B7%E5%AE%9A%E5%BE%8B/631745?fr=aladdin">阿特伍德定律</a>信徒，开源爱好者，痴迷于造轮子。
    </div>
    <div class="introduce font-15 line-height-1_5" style="margin-top: -6px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前研究方向：前端架构，Node，Koa，同构应用，WebAssimbly，GraphQL，GPU.js
    </div>
    <div class="introduce font-15 line-height-1_5" style="margin-top: -6px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎交流：QQ:1769908045
    </div>
    <div class="split" style="transform: rotate(180deg)"></div>
  </div>
</template>

<script>
  export default {}
</script>
