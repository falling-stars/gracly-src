(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,n,s){"use strict";s.d(n,"a",function(){return l}),s.d(n,"b",function(){return p});var e,a,i=function(t,n){for(var s=0,e=t.length;s<e;s++)n(t[s],s)},r=function(t){var n=t.match(/\[\d+]/);return n?parseInt(n[0].match(/\d+/)[0]):0},c=(e=function(t,n){return"#"===n.substr(0,1)?document.getElementById(n.substr(1)):"."===n.substr(0,1)?t.getElementsByClassName(n.substr(1).replace(/\[\d+]/g,""))[r(n)]:t.getElementsByTagName(n.replace(/\[\d+]/g,""))[r(n)]},a=function(t){return"#"===t.substr(0,1)?document.getElementById(t.substr(1)):"."===t.substr(0,1)?document.getElementsByClassName(t.substr(1).replace(/\[\d+]/g,""))[r(t)]:document.getElementsByTagName(t.replace(/\[\d+]/g,""))[r(t)]},function(){for(var t=arguments.length,n=Array(t),s=0;s<t;s++)n[s]=arguments[s];var r="function"==typeof a?a(n[0]):n[0];return n.length>1&&i(n.slice(1),function(t){return r=e(r,t)}),function t(){for(var n=arguments.length,s=Array(n),a=0;a<n;a++)s[a]=arguments[a];return s.length>0?(i(s,function(t){return r=e(r,t)}),t):r}}),l=function(t){var n=t.split(" "),s=null;return i(n,function(t,n){return 0===n&&(s=c(t))||s(t)}),s()},o=function(){return/Android|iPhone|Mobile|iPad/i.test(navigator.userAgent.match(/iPhone|Android|Mobile|iPad|Firefox|opr|chrome|safari|trident/i)[0])},p=function(t,n){var s=document.documentElement.scrollTop||document.body.scrollTop;i(t,function(t){"number"==typeof t.top&&(t.down.callback&&"function"==typeof t.down.callback&&(s>=t.top?(t.down.callback(),t.down.tag=!1):t.down.tag=!0),t.up.callback&&"function"==typeof t.up.callback&&(s<=t.top?(t.up.callback(),t.up.tag=!1):t.up.tag=!0))}),o()?(document.body.addEventListener("touchmove",function(e){var a=document.documentElement.scrollTop||document.body.scrollTop;a>s&&(i(t,function(t){a>=t.top&&t.tag&&(t.fun(),t.tag=!1)}),s=a),"function"==typeof n&&a>=document.body.clientHeight-document.documentElement.clientHeight&&n()}),document.body.addEventListener("touchend",function(e){setTimeout(function e(){var a=document.documentElement.scrollTop||document.body.scrollTop;a>s&&(i(t,function(t){a>=t.top&&t.tag&&(t.fun(),t.tag=!1)}),s=a,setTimeout(e,300)),"function"==typeof n&&a>=document.body.clientHeight-document.documentElement.clientHeight&&n()},300)})):document.body.onscroll=function(e){var a=document.documentElement.scrollTop||document.body.scrollTop;i(t,function(t){a>s?"number"==typeof t.top&&t.down.callback&&"function"==typeof t.down.callback&&t.down.tag&&a>=t.top&&(t.down.callback(),t.down.tag=!1,t.up.repeat&&(t.up.tag=!0)):"number"==typeof t.top&&t.up.callback&&"function"==typeof t.up.callback&&t.up.tag&&a<=t.top&&(t.up.callback(),t.up.tag=!1,t.down.repeat&&(t.down.tag=!0))}),"function"==typeof n&&a>=document.body.clientHeight-document.documentElement.clientHeight&&n(),s=a}}},,function(t,n,s){"use strict";var e={data:function(){return{upColor:"#9c9c9c",spreadColor:"#9c9c9c",rotate:0,ulShow:!1,menu:[{text:"首页",url:"/",right:.03,top:.03},{text:"入门",url:"/start",right:.03,top:.03},{text:"社区",url:"/hub",right:.03,top:.03},{text:"关于",url:"/about",right:.03,top:.03}]}},methods:{toUp:function(){var t=this;t.upColor="#5FB878";var n=document.documentElement.scrollTop;!function s(){n-=50,window.scrollTo(0,n),n>0?setTimeout(s,4):setTimeout(function(){return t.upColor="#9c9c9c"},300)}()},spread:function(){var t=this;if(0===t.rotate)t.spreadColor="#5FB878",t.rotate=90,t.ulShow=!0,setTimeout(function(){t.ulShow=!0,t.menu[0].right=.1,t.menu[0].top=-.7,t.menu[1].right=.7,t.menu[1].top=-.35,t.menu[2].right=.7,t.menu[2].top=.35,t.menu[3].right=.1,t.menu[3].top=.74},200);else{t.rotate=0,setTimeout(function(){return t.spreadColor="#9c9c9c"},500),setTimeout(function(){return t.ulShow=!1},500);for(var n=0;n<4;n++)t.menu[n].right=.03,t.menu[n].top=.03}}}},a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"container fixed"},[s("div",{staticClass:"up full-width pointer text-center white-bg",on:{click:t.toUp}},[s("i",{staticClass:"fa fa-rocket font-30",style:{color:t.upColor},attrs:{"aria-hidden":"true"}})]),t._v(" "),s("div",{staticClass:"menu full-width pointer text-center white-bg relative",style:{top:(0===t.rotate?0:.7)+"rem"},on:{click:t.spread}},[s("i",{staticClass:"spread fa fa-life-ring font-30",style:{color:t.spreadColor,transform:"rotate("+t.rotate+"deg)"},attrs:{"aria-hidden":"true"}}),t._v(" "),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.ulShow,expression:"ulShow"}]},t._l(t.menu,function(n){return s("li",{staticClass:"white-bg absolute overflow-hide",style:{right:n.right+"rem",top:n.top+"rem"}},[s("router-link",{staticClass:"font-12 full-height full-width inline-block relative",attrs:{to:n.url}},[t._v(t._s(n.text))])],1)}))])])};a._withStripped=!0;var i=s(0),r=!1;var c=function(t){r||s(7)},l=Object(i.a)(e,a,[],!1,c,"data-v-452f0e86",null);l.options.__file="pc\\components\\up.vue";n.a=l.exports},function(t,n,s){"use strict";s.d(n,"a",function(){return i});var e=function(){function t(t,n){for(var s=0;s<n.length;s++){var e=n[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,s,e){return s&&t(n.prototype,s),e&&t(n,e),n}}();function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(n,s,e){a(this,t),this.container=n,this.data=s,this.callBack=e,this.pageNum=Math.ceil(s.total/s.show),this.create()}return e(t,[{key:"create",value:function(){var t=this.container,n=this.data,s=this.pageNum;t.innerHTML="";for(var e=n.first?n.first:"首页",a=n.last?n.last:"末页",i=n.previous?n.previous:"上一页",r=n.next?n.next:"下一页",c=n.showPage?n.showPage:s>8?8:s,l='class="page-button"',o="<button "+l+">"+e+"</button><button "+l+">"+i+"</button>",p=0;p<c;p++)o+="<button>"+(p+1)+"</button>";o+="<button "+l+">"+r+"</button><button "+l+">"+a+"</button>",t.innerHTML=o,this.addEvent()}},{key:"addEvent",value:function(){var t=this.callBack,n=this.pageNum,s=this.container,e=s.getElementsByTagName("button"),a=e.length,i=e[0],r=e[1],c=e[a-2],l=e[a-1],o=0;s.classList.add("gra-page");var p=function(n){var e=s.getElementsByClassName("select")[0];e&&e.classList.remove("select"),n.classList.add("select"),t(n.innerText)};p(e[2]),i.onclick=function(t){o=1;for(var n=2;n<a-2;n++)e[n].innerText=o++;p(e[2])},l.onclick=function(t){o=n;for(var s=a-3;s>1;s--)e[s].innerText=o--;p(e[a-3])},r.onclick=function(n){var i=s.getElementsByClassName("select")[0];"1"===i.innerText?t("1"):function(){if(i.previousElementSibling.classList.contains("page-button")){var t=+i.innerText;if(t>1){t--;for(var n=2;n<a-2;n++)e[n].innerText=t++}p(i)}else p(i.previousElementSibling)}()},c.onclick=function(i){var r=s.getElementsByClassName("select")[0];parseInt(r.innerText)===n?t(n+""):function(){if(r.nextElementSibling.classList.contains("page-button")){var t=+r.innerText;if(t<n){t++;for(var s=a-3;s>1;s--)e[s].innerText=t--}p(r)}else p(r.nextElementSibling)}()},s.onclick=function(t){var n=t.target;return"button"===n.tagName.toLowerCase()&&!n.classList.contains("page-button")&&p(n)}}}]),t}();!function(){function t(n){var s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a(this,t),this.routes=n,this.hash=s,this.init(),this.event()}e(t,[{key:"searchRoute",value:function(t){for(var n=this.routes,s=!1,e=0,a=n.length;e<a;e++)if(n[e].url===t){s=n[e];break}return s}},{key:"init",value:function(){this.emit()}},{key:"push",value:function(t){this.hash?location.hash="#"+t:(history.pushState(null,null,t),this.emit())}},{key:"emit",value:function(){var t=!1;if(this.hash)if(""!==location.hash){var n=location.hash.substr(1),s=this.searchRoute(n);""!==n&&s&&(t=s)}else location.hash="#/";else{var e=location.pathname,a=this.searchRoute(e);""!==e&&a&&(t=a)}t&&(t.state?t.callBack(t.state):t.callBack())}},{key:"event",value:function(){var t=this;window.onpopstate=function(n){return t.emit()}}}])}()},function(t,n){},,function(t,n){},function(t,n){},,,,,,,,,,,function(t,n,s){"use strict";s.r(n);var e=s(3),a=s(1),i=s(4),r=(s(5),{components:{up:e.a},data:function(){return{list:[{text:"安装",url:"#into",select:!0},{text:"实例",url:"#example",select:!1}],isFixed:!1,isStatic:!0}},methods:{select:function(t){0===t&&(this.list[0].select=!0,this.list[1].select=!1),1===t&&(this.list[0].select=!1,this.list[1].select=!0)}},created:function(){},activated:function(){var t=this;Object(a.b)([{top:50,up:{callback:function(){t.isStatic=!0,t.isFixed=!1},repeat:!0},down:{callback:function(){t.isStatic=!1,t.isFixed=!0},repeat:!0}},{top:950,up:{callback:function(){t.list[0].select=!0,t.list[1].select=!1},repeat:!0},down:{callback:function(){t.list[0].select=!1,t.list[1].select=!0},repeat:!0}}])},mounted:function(){Array.prototype.map.call(document.getElementsByClassName("code"),function(t){var n=t.innerHTML;n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/rel/g,'<span class="tip2">rel</span>')).replace(/charset/g,'<span class="tip2">charset</span>')).replace(/href/g,'<span class="tip2">href</span>')).replace(/src/g,'<span class="tip2">src</span>')).replace(/import/g,'<span class="tip1">import</span>')).replace(/from/g,'<span class="tip1">from</span>')).replace(/const/g,'<span class="tip2">const</span>')).replace(/let/g,'<span class="tip2">let</span>')).replace(/var/g,'<span class="tip2">var</span>')).replace(/ = /g,'<span class="tip2"> = </span>')).replace(/ === /g,'<span class="tip2"> === </span>')).replace(/link/g,'<span class="tip2">link</span>')).replace(/script/g,'<span class="tip2">script</span>')).replace(/=&gt;/g,'<span class="tip2">=&gt;</span>')).replace(/if/g,'<span class="tip2">if</span>')).replace(/else/g,'<span class="tip2">else</span>')).replace(/new/g,'<span class="tip3">new</span>')).replace(/true/g,'<span class="tip3">true</span>')).replace(/false/g,'<span class="tip3">false</span>')).replace(/npm/g,'<span class="tip4">npm</span>')).replace(/install/g,'<span class="tip4">install</span>')).replace(/return/g,'<span class="tip4">return</span>')).replace(/\(/g,"( ")).replace(/\)/g," )"),t.innerHTML=n}),new i.a(Object(a.a)("#page"),{total:100,show:11},function(t){return console.log(t)})}}),c=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"flex"},[s("ul",{staticClass:"menu grey-f-bg flex-child-noshrink",class:{fixed:t.isFixed,static:t.isStatic}},t._l(t.list,function(n,e){return s("li",{staticClass:"pointer inline-block full-width border-box text-center black relative",class:{select:n.select},on:{click:function(n){t.select(e)}}},[s("a",{staticClass:"inline-block full-height full-width",attrs:{href:n.url}},[t._v(t._s(n.text))])])})),t._v(" "),t.isFixed?s("div",{staticClass:"cover flex-child-noshrink border-right grey-f-bg"}):t._e(),t._v(" "),t._m(0),t._v(" "),s("up")],1)};c._withStripped=!0;var l=s(0),o=!1;var p=function(t){o||s(8)},v=Object(l.a)(r,c,[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content flex-child-grow line-height-1_5"},[s("h1",{staticClass:"h1"},[t._v("基本用法")]),t._v(" "),s("h2",{staticClass:"h2",attrs:{id:"into"}},[t._v("引入")]),t._v("\n    我们将基础库和组件库分开形成 "),s("span",{staticClass:"tip0"},[t._v("base.js")]),t._v(" 和 "),s("span",{staticClass:"tip0"},[t._v("component.js")]),t._v(" 两个文件,在使用过程中可以自行决定是否使用自带的组件库\n    "),s("h3",{staticClass:"h3"},[t._v("使用静态文件：")]),t._v(" "),s("div",{staticClass:"code"},[t._v("\n      <head>\n      "),s("br"),t._v('\n        <meta charset="UTF-8">\n      '),s("br"),t._v("\n        <title>gracly</title>\n      "),s("br"),t._v('\n      <link rel="stylesheet" href="gracly/css/gracly.css">\n      '),s("br"),t._v("\n      </head>\n      "),s("br"),t._v("\n      <body>\n      "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v("\x3c!---------\x3e")]),t._v(" "),s("br"),t._v('\n      <script src="gracly/base.js"><\/script>\n      '),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v("\x3c!--需要使用组件时引入--\x3e")]),t._v(" "),s("br"),t._v('\n      <script src="gracly/component.js"><\/script>\n      '),s("br"),t._v("\n      </body>\n    ")]),t._v(" "),s("h3",{staticClass:"h3"},[t._v("使用 npm：")]),t._v(" "),s("div",{staticClass:"code"},[t._v("\n      npm install gracly -save\n      "),s("br"),t._v("\n      import { "),s("span",{staticClass:"tip0"},[t._v("query")]),t._v(" } from 'gracly/base'\n      "),s("br"),t._v("\n      import { "),s("span",{staticClass:"tip0"},[t._v("GraRoute")]),t._v(" } from 'gracly/component'\n      "),s("br"),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v("//base内置DOM选择器")]),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"tip0"},[t._v("query")]),t._v("('.demo'[1], 'div')\n      "),s("br"),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v("//基于History的单页面组件")]),t._v(" "),s("br"),t._v("\n      const "),s("span",{staticClass:"tip0"},[t._v("route")]),t._v(" = new "),s("span",{staticClass:"tip0"},[t._v("GraRoute")]),t._v("(\n      "),s("br"),t._v("\n      [\n      "),s("br"),t._v("\n          {\n      "),s("br"),t._v("\n              url: '/',\n      "),s("br"),t._v("\n              state: { age: 32 },\n      "),s("br"),t._v("\n              callBack: state => console.log( state.age )\n      "),s("br"),t._v("\n          },\n      "),s("br"),t._v("\n          {\n      "),s("br"),t._v("\n              url: '/start',\n      "),s("br"),t._v("\n              state: { age: 988 },\n      "),s("br"),t._v("\n              callBack: state => console.log( state.age )\n      "),s("br"),t._v("\n          }\n      "),s("br"),t._v("\n      ], false)\n    ")]),t._v(" "),s("h2",{staticClass:"h2",attrs:{id:"example"}},[t._v("实例")]),t._v(" "),s("h3",{staticClass:"h3"},[t._v("运用伪柯里化函数"),s("span",{staticClass:"tip0"},[t._v("currying_")]),t._v("实现DOM选择器：")]),t._v(" "),s("div",{staticClass:"code"},[s("span",{staticClass:"note"},[t._v("//模块化需要引入{ query }")]),t._v(" "),s("br"),t._v("\n      import { "),s("span",{staticClass:"tip0"},[t._v("currying_")]),t._v(", "),s("span",{staticClass:"tip0"},[t._v("for_")]),t._v(" } from 'gracly/base'\n      "),s("br"),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v("//定于前后两个参数之间的运算及其返回值")]),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v("//第二个参数除了传入id以外都将返回a.getElementBy...(b)的结果")]),t._v(" "),s("br"),t._v("\n      const "),s("span",{staticClass:"tip0"},[t._v("elFun")]),t._v(" = ("),s("span",{staticClass:"tip0"},[t._v("a")]),t._v(", "),s("span",{staticClass:"tip0"},[t._v("b")]),t._v(") => {\n      "),s("br"),t._v("\n          if ("),s("span",{staticClass:"tip0"},[t._v("b")]),t._v(".substr(0, 1) === '#') {\n      "),s("br"),t._v("\n                return document.getElementById("),s("span",{staticClass:"tip0"},[t._v("b")]),t._v(".substr(1))\n      "),s("br"),t._v("\n          } else if ("),s("span",{staticClass:"tip0"},[t._v("b")]),t._v(".substr(0, 1) === '.') {\n      "),s("br"),t._v("\n                return "),s("span",{staticClass:"tip0"},[t._v("a")]),t._v(".getElementsByClassName("),s("span",{staticClass:"tip0"},[t._v("b")]),t._v(".substr(1).replace(/\\[\\d+]/g, ''))[getIndex("),s("span",{staticClass:"tip0"},[t._v("b")]),t._v(")]\n      "),s("br"),t._v("\n          } else {\n      "),s("br"),t._v("\n                return "),s("span",{staticClass:"tip0"},[t._v("a")]),t._v(".getElementsByTagName("),s("span",{staticClass:"tip0"},[t._v("b")]),t._v(".replace(/\\[\\d+]/g, ''))[getIndex("),s("span",{staticClass:"tip0"},[t._v("b")]),t._v(")]\n      "),s("br"),t._v("\n          }\n      "),s("br"),t._v("\n      }\n      "),s("br"),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v("//设置如何处理第一个参数")]),t._v(" "),s("br"),t._v("\n      const "),s("span",{staticClass:"tip0"},[t._v("elInit")]),t._v(" = "),s("span",{staticClass:"tip0"},[t._v("a")]),t._v(" => {\n      "),s("br"),t._v("\n          if ("),s("span",{staticClass:"tip0"},[t._v("a")]),t._v(".substr(0, 1) === '#') {\n      "),s("br"),t._v("\n                return document.getElementById("),s("span",{staticClass:"tip0"},[t._v("a")]),t._v(".substr(1))\n      "),s("br"),t._v("\n          } else if ("),s("span",{staticClass:"tip0"},[t._v("a")]),t._v(".substr(0, 1) === '.') {\n      "),s("br"),t._v("\n                return document.getElementsByClassName("),s("span",{staticClass:"tip0"},[t._v("a")]),t._v(".substr(1).replace(/\\[\\d+]/g, ''))[getIndex("),s("span",{staticClass:"tip0"},[t._v("a")]),t._v(")]\n      "),s("br"),t._v("\n          } else {\n      "),s("br"),t._v("\n                return document.getElementsByTagName("),s("span",{staticClass:"tip0"},[t._v("a")]),t._v(".replace(/\\[\\d+]/g, ''))[getIndex("),s("span",{staticClass:"tip0"},[t._v("a")]),t._v(")]\n      "),s("br"),t._v("\n          }\n      "),s("br"),t._v("\n      }\n      "),s("br"),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v("//柯里化结合")]),t._v(" "),s("br"),t._v("\n      const "),s("span",{staticClass:"tip0"},[t._v("getElement")]),t._v(" = "),s("span",{staticClass:"tip0"},[t._v("currying_")]),t._v("("),s("span",{staticClass:"tip0"},[t._v("elFun")]),t._v(", "),s("span",{staticClass:"tip0"},[t._v("elInit")]),t._v(")\n      "),s("br"),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v("//运行getElement")]),t._v(" "),s("br"),t._v("\n      getElement('div')('.item')()\n      "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v(">>获得第一个div下的第一个class为item的元素")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v("\n      getElement('div[1]')('.item')('button')()\n      "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v(">>获得第二个div下的第一个class为item的元素下的第一个buttom")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v("//优化选择器调用形式")]),t._v(" "),s("br"),t._v("\n      const "),s("span",{staticClass:"tip0"},[t._v("query")]),t._v(" = "),s("span",{staticClass:"tip0"},[t._v("queryStr")]),t._v(" => {\n      "),s("br"),t._v("\n          const args = "),s("span",{staticClass:"tip0"},[t._v("queryStr")]),t._v(".split(' ')\n      "),s("br"),t._v("\n          let "),s("span",{staticClass:"tip0"},[t._v("get")]),t._v(" = null\n      "),s("br"),t._v("\n          "),s("span",{staticClass:"tip0"},[t._v("for_")]),t._v("(args, (i, k) => k === 0 && ("),s("span",{staticClass:"tip0"},[t._v("get")]),t._v(" = "),s("span",{staticClass:"tip0"},[t._v("getElement")]),t._v("(i)) || "),s("span",{staticClass:"tip0"},[t._v("get")]),t._v("(i))\n      "),s("br"),t._v("\n          return "),s("span",{staticClass:"tip0"},[t._v("get")]),t._v("()\n      "),s("br"),t._v("\n      }\n      "),s("br"),t._v(" "),s("span",{staticClass:"tip0"},[t._v("query")]),t._v("('div[1] .item button[0]')\n      "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"note"},[t._v("//上述的query在base里面已经存在，可以直接调用")])]),t._v(" "),s("h3",{staticClass:"h3"},[t._v("使用组件示例：")]),t._v(" "),s("div",{staticClass:"code"},[t._v("\n      import { "),s("span",{staticClass:"tip0"},[t._v("query")]),t._v(" } from 'gracly/base''\n      "),s("br"),t._v("\n      import { "),s("span",{staticClass:"tip0"},[t._v("GraPage")]),t._v(" } from 'gracly/component''\n      "),s("br"),t._v("\n      new "),s("span",{staticClass:"tip0"},[t._v("GraPage")]),t._v("("),s("span",{staticClass:"tip0"},[t._v("query")]),t._v("('#page'), {\n      "),s("br"),t._v("\n          total: 100,\n      "),s("br"),t._v("\n          show: 11\n      "),s("br"),t._v("\n      }, "),s("span",{staticClass:"tip0"},[t._v("value")]),t._v(" => console.log("),s("span",{staticClass:"tip0"},[t._v("value")]),t._v("))\n    ")]),t._v(" "),s("h3",{staticClass:"h3"},[t._v("组件效果：")]),t._v(" "),s("div",{staticClass:"code",attrs:{id:"page"}})])}],!1,p,"data-v-50433322",null);v.options.__file="pc\\pages\\start.vue";n.default=v.exports}]]);